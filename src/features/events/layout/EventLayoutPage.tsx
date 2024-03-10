import { Box, Typography, Paper, Grid, Drawer, IconButton, Button, Tooltip, Dialog, DialogTitle, DialogContent, DialogActions, TextField, CircularProgress, Alert } from '@mui/material';
import { useState, useRef, useEffect, useCallback } from 'react';
import { Stage, Layer, Rect, Image } from 'react-konva';
import MenuIcon from '@mui/icons-material/Menu';
import SaveIcon from '@mui/icons-material/Save';
import ShareIcon from '@mui/icons-material/Share';
import PrintIcon from '@mui/icons-material/Print';
import GridOnIcon from '@mui/icons-material/GridOn';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import ImageIcon from '@mui/icons-material/Image';
import useImage from 'use-image';
import ItemLibrary from './ItemLibrary';
import LayoutItem from './LayoutItem';
import { createEventLayout, updateEventLayout, exportLayoutAsPng, exportLayoutAsPdf } from '../../../services/event-layouts';
import { getInventoryItems } from '../../../services/inventory';

interface LayoutObject {
  id: string;
  type: string;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  isDragging: boolean;
}

const GRID_SIZE = 20;
const MIN_WIDTH = 800;
const MIN_HEIGHT = 600;

interface BackgroundImage {
  url: string;
  width: number;
  height: number;
}

interface EventLayoutPageProps {
  eventId: string;
  layoutId?: string;
}

const EventLayoutPage = ({ eventId, layoutId }: EventLayoutPageProps) => {
  const [objects, setObjects] = useState<LayoutObject[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isLibraryOpen, setIsLibraryOpen] = useState(true);
  const [showGrid, setShowGrid] = useState(true);
  const [scale, setScale] = useState(1);
  const [dimensions, setDimensions] = useState({ width: MIN_WIDTH, height: MIN_HEIGHT });
  const [backgroundImage, setBackgroundImage] = useState<BackgroundImage | null>(null);
  const [isImageDialogOpen, setIsImageDialogOpen] = useState(false);
  const [isSaveDialogOpen, setIsSaveDialogOpen] = useState(false);
  const [isExportDialogOpen, setIsExportDialogOpen] = useState(false);
  const [layoutName, setLayoutName] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [inventoryItems, setInventoryItems] = useState<Record<string, number>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [image] = useImage(backgroundImage?.url || '');
  const stageRef = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Load inventory data
  useEffect(() => {
    const loadInventory = async () => {
      try {
        const items = await getInventoryItems();
        const inventory: Record<string, number> = {};
        items.forEach((item: { id: string; quantity_available?: number }) => {
          inventory[item.id] = item.quantity_available || 0;
        });
        setInventoryItems(inventory);
      } catch (error) {
        console.error('Failed to load inventory:', error);
      }
    };
    loadInventory();
  }, []);

  const handleSave = async () => {
    if (!layoutName.trim()) {
      setSaveError('Please enter a layout name');
      return;
    }

    setIsSaving(true);
    setSaveError(null);

    try {
      const layoutData = {
        event_id: eventId,
        name: layoutName,
        objects: objects.map(({ isDragging, ...obj }) => obj),
        background_image_url: backgroundImage?.url
      };

      if (layoutId) {
        await updateEventLayout(layoutId, layoutData);
      } else {
        await createEventLayout(layoutData);
      }

      setIsSaveDialogOpen(false);
    } catch (error) {
      console.error('Failed to save layout:', error);
      setSaveError('Failed to save layout. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleExport = async (format: 'png' | 'pdf') => {
    if (!stageRef.current) return;

    try {
      if (format === 'png') {
        const dataUrl = await exportLayoutAsPng(stageRef.current);
        const link = document.createElement('a');
        link.download = `${layoutName || 'event-layout'}.png`;
        link.href = dataUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        const blob = await exportLayoutAsPdf(stageRef.current);
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = `${layoutName || 'event-layout'}.pdf`;
        link.href = url;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }
      setIsExportDialogOpen(false);
    } catch (error) {
      console.error('Failed to export layout:', error);
    }
  };

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { clientWidth, clientHeight } = containerRef.current;
        setDimensions({
          width: Math.max(MIN_WIDTH, clientWidth - 40), // 40px for padding
          height: Math.max(MIN_HEIGHT, clientHeight - 40)
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  const handleDragStart = (e: any) => {
    const id = e.target.id();
    setObjects(prevObjects =>
      prevObjects.map(obj => ({
        ...obj,
        isDragging: obj.id === id
      }))
    );
  };

  const handleDragEnd = (e: any) => {
    const id = e.target.id();
    setObjects(prevObjects =>
      prevObjects.map(obj => ({
        ...obj,
        isDragging: false,
        x: obj.id === id ? Math.round(e.target.x() / GRID_SIZE) * GRID_SIZE : obj.x,
        y: obj.id === id ? Math.round(e.target.y() / GRID_SIZE) * GRID_SIZE : obj.y
      }))
    );
  };

  const handleTransformEnd = (e: any) => {
    const node = e.target;
    const id = node.id();
    
    setObjects(prevObjects =>
      prevObjects.map(obj => {
        if (obj.id === id) {
          return {
            ...obj,
            x: node.x(),
            y: node.y(),
            width: node.width() * (node.scaleX() || 1),
            height: node.height() * (node.scaleY() || 1),
            rotation: node.rotation()
          };
        }
        return obj;
      })
    );
  };

  const handleAddItem = (itemType: string) => {
    const newItem: LayoutObject = {
      id: `${itemType}-${Date.now()}`,
      type: itemType,
      x: dimensions.width / 2,
      y: dimensions.height / 2,
      width: 100,
      height: 100,
      rotation: 0,
      isDragging: false
    };
    setObjects(prev => [...prev, newItem]);
  };

  const handleZoom = (direction: 'in' | 'out') => {
    const factor = direction === 'in' ? 1.2 : 0.8;
    const newScale = Math.min(Math.max(scale * factor, 0.5), 2);
    setScale(newScale);
  };

  const drawGrid = () => {
    const gridLines = [];
    const numHorizontalLines = Math.floor(dimensions.height / GRID_SIZE);
    const numVerticalLines = Math.floor(dimensions.width / GRID_SIZE);

    // Horizontal lines
    for (let i = 0; i <= numHorizontalLines; i++) {
      gridLines.push(
        <Rect
          key={`h-${i}`}
          x={0}
          y={i * GRID_SIZE}
          width={dimensions.width}
          height={1}
          fill="#ddd"
          opacity={0.5}
        />
      );
    }

    // Vertical lines
    for (let i = 0; i <= numVerticalLines; i++) {
      gridLines.push(
        <Rect
          key={`v-${i}`}
          x={i * GRID_SIZE}
          y={0}
          width={1}
          height={dimensions.height}
          fill="#ddd"
          opacity={0.5}
        />
      );
    }

    return gridLines;
  };

  return (
    <Box sx={{ display: 'flex', height: 'calc(100vh - 64px)' }}>
      <Drawer
        variant="persistent"
        anchor="left"
        open={isLibraryOpen}
        sx={{
          width: 280,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 280,
            position: 'relative',
            height: '100%',
            border: 'none',
            borderRight: '1px solid rgba(0, 0, 0, 0.12)'
          },
        }}
      >
        <ItemLibrary onAddItem={handleAddItem} />
      </Drawer>

      <Box sx={{ flexGrow: 1, p: 2, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton onClick={() => setIsLibraryOpen(!isLibraryOpen)}>
              <MenuIcon />
            </IconButton>
            <Tooltip title="Toggle Grid">
              <IconButton onClick={() => setShowGrid(!showGrid)}>
                <GridOnIcon color={showGrid ? 'primary' : 'inherit'} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Add Floor Plan">
              <IconButton onClick={() => setIsImageDialogOpen(true)}>
                <ImageIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Zoom In">
              <IconButton onClick={() => handleZoom('in')}>
                <ZoomInIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Zoom Out">
              <IconButton onClick={() => handleZoom('out')}>
                <ZoomOutIcon />
              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              variant="outlined"
              startIcon={<SaveIcon />}
              onClick={() => setIsSaveDialogOpen(true)}
            >
              Save
            </Button>
            <Button
              variant="outlined"
              startIcon={<ShareIcon />}
              onClick={() => setIsSaveDialogOpen(true)}
            >
              Share
            </Button>
            <Button
              variant="outlined"
              startIcon={<PrintIcon />}
              onClick={() => setIsExportDialogOpen(true)}
            >
              Export
            </Button>
          </Box>
          {/* Save Dialog */}
      <Dialog open={isSaveDialogOpen} onClose={() => setIsSaveDialogOpen(false)}>
        <DialogTitle>Save Layout</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Layout Name"
            fullWidth
            value={layoutName}
            onChange={(e) => setLayoutName(e.target.value)}
            error={!!saveError}
            helperText={saveError}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsSaveDialogOpen(false)}>Cancel</Button>
          <Button 
            onClick={handleSave} 
            variant="contained" 
            disabled={isSaving}
            startIcon={isSaving ? <CircularProgress size={20} /> : null}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Export Dialog */}
      <Dialog open={isExportDialogOpen} onClose={() => setIsExportDialogOpen(false)}>
        <DialogTitle>Export Layout</DialogTitle>
        <DialogContent>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Choose an export format:
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="outlined"
              onClick={() => handleExport('png')}
              startIcon={<ImageIcon />}
            >
              PNG Image
            </Button>
            <Button
              variant="outlined"
              onClick={() => handleExport('pdf')}
              startIcon={<PrintIcon />}
            >
              PDF Document
            </Button>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsExportDialogOpen(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>

        <Paper
          ref={containerRef}
          elevation={3}
          sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: '#f5f5f5',
            overflow: 'hidden',
            position: 'relative',
            border: '2px solid red', // Debug border
            minHeight: '600px', // Ensure minimum height
            width: '100%', // Explicit width
            height: '100%', // Explicit height
            backgroundColor: 'yellow' // High visibility background
          }}
        >
          <Stage
            ref={stageRef}
            width={dimensions.width}
            height={dimensions.height}
            scale={{ x: scale, y: scale }}
            style={{ border: '2px solid blue' }} // Debug border
            onMouseDown={(e) => {
              // @ts-ignore
              const clickedOnEmpty = e.target === e.target.getStage();
              if (clickedOnEmpty) {
                setSelectedId(null);
              }
            }}
          >
            <Layer>
              {/* Background */}
              <Rect
                x={0}
                y={0}
                width={dimensions.width}
                height={dimensions.height}
                fill="white"
                shadowBlur={10}
                shadowColor="rgba(0,0,0,0.1)"
              />
              
              {/* Floor Plan */}
              {image && (
                <Image
                  image={image}
                  width={dimensions.width}
                  height={dimensions.height}
                  opacity={0.5}
                />
              )}
              
              {/* Grid */}
              {showGrid && drawGrid()}

              {/* Layout Items */}
              {objects.map((obj) => (
                <LayoutItem
                  key={obj.id}
                  shapeProps={obj}
                  isSelected={obj.id === selectedId}
                  onSelect={() => setSelectedId(obj.id)}
                  onChange={(newAttrs: Partial<LayoutObject>) => {
                    setObjects(prevObjects =>
                      prevObjects.map(item =>
                        item.id === obj.id ? { ...item, ...newAttrs } : item
                      )
                    );
                  }}
                  onDragStart={handleDragStart}
                  onDragEnd={handleDragEnd}
                  onTransformEnd={handleTransformEnd}
                />
              ))}
            </Layer>
          </Stage>
        </Paper>
        {/* Floor Plan Dialog */}
      <Dialog open={isImageDialogOpen} onClose={() => setIsImageDialogOpen(false)}>
        <DialogTitle>Add Floor Plan</DialogTitle>
        <DialogContent>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Upload a floor plan image to use as a background for your layout.
          </Typography>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                const url = URL.createObjectURL(file);
                const img = new window.Image();
                img.onload = () => {
                  setBackgroundImage({
                    url,
                    width: img.width,
                    height: img.height
                  });
                  setIsImageDialogOpen(false);
                };
                img.src = url;
              }
            }}
          />
          <Button
            variant="contained"
            onClick={() => fileInputRef.current?.click()}
            fullWidth
          >
            Choose Image
          </Button>
        </DialogContent>
        <DialogActions>
          {backgroundImage && (
            <Button 
              onClick={() => {
                setBackgroundImage(null);
                setIsImageDialogOpen(false);
              }}
              color="error"
            >
              Remove Background
            </Button>
          )}
          <Button onClick={() => setIsImageDialogOpen(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
    </Box>
  );
};

export default EventLayoutPage;
