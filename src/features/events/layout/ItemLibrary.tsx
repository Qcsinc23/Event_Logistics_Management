import { Box, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Tooltip } from '@mui/material';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import TableBarIcon from '@mui/icons-material/TableBar';
import ChairIcon from '@mui/icons-material/Chair';
import StadiumIcon from '@mui/icons-material/Stadium';
import SpeakerIcon from '@mui/icons-material/Speaker';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';

interface ItemCategory {
  name: string;
  items: {
    id: string;
    name: string;
    icon: JSX.Element;
    defaultWidth: number;
    defaultHeight: number;
    description: string;
    color: string;
  }[];
}

const itemCategories: ItemCategory[] = [
  {
    name: 'Furniture',
    items: [
      {
        id: 'round-table',
        name: 'Round Table',
        icon: <TableRestaurantIcon />,
        defaultWidth: 100,
        defaultHeight: 100,
        description: 'Circular dining table (seats 8-10)',
        color: '#B8CCE4'
      },
      {
        id: 'rectangular-table',
        name: 'Rectangular Table',
        icon: <TableBarIcon />,
        defaultWidth: 150,
        defaultHeight: 80,
        description: 'Banquet table (seats 6-8)',
        color: '#B8CCE4'
      },
      {
        id: 'chair',
        name: 'Chair',
        icon: <ChairIcon />,
        defaultWidth: 40,
        defaultHeight: 40,
        description: 'Standard banquet chair',
        color: '#E2EFD9'
      }
    ]
  },
  {
    name: 'Stage & Platform',
    items: [
      {
        id: 'stage',
        name: 'Stage',
        icon: <TheaterComedyIcon />,
        defaultWidth: 300,
        defaultHeight: 150,
        description: 'Elevated platform (24" height)',
        color: '#FBE5D6'
      },
      {
        id: 'podium',
        name: 'Podium',
        icon: <RecordVoiceOverIcon />,
        defaultWidth: 60,
        defaultHeight: 40,
        description: 'Speaker podium with microphone',
        color: '#FBE5D6'
      }
    ]
  },
  {
    name: 'AV Equipment',
    items: [
      {
        id: 'speaker',
        name: 'Speaker',
        icon: <SpeakerIcon />,
        defaultWidth: 40,
        defaultHeight: 60,
        description: 'PA speaker on stand',
        color: '#F2DCDB'
      },
      {
        id: 'screen',
        name: 'Projection Screen',
        icon: <ScreenShareIcon />,
        defaultWidth: 200,
        defaultHeight: 20,
        description: '16:9 projection screen with stand',
        color: '#F2DCDB'
      },
      {
        id: 'camera',
        name: 'Camera',
        icon: <CameraAltIcon />,
        defaultWidth: 30,
        defaultHeight: 30,
        description: 'Video camera on tripod',
        color: '#F2DCDB'
      }
    ]
  },
  {
    name: 'Food & Beverage',
    items: [
      {
        id: 'bar',
        name: 'Bar Counter',
        icon: <LocalBarIcon />,
        defaultWidth: 200,
        defaultHeight: 60,
        description: 'Full-service bar station',
        color: '#E5E0EC'
      },
      {
        id: 'buffet',
        name: 'Buffet Station',
        icon: <RestaurantIcon />,
        defaultWidth: 180,
        defaultHeight: 60,
        description: 'Double-sided buffet table',
        color: '#E5E0EC'
      }
    ]
  }
];

interface ItemLibraryProps {
  onAddItem: (itemType: string) => void;
}

const ItemLibrary = ({ onAddItem }: ItemLibraryProps) => {
  return (
    <Box sx={{ height: '100%', overflow: 'auto' }}>
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Item Library
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Click items to add them to the layout
        </Typography>
      </Box>

      <Divider />

      {itemCategories.map((category, index) => (
        <Box key={category.name}>
          <Typography
            variant="subtitle2"
            sx={{
              px: 2,
              py: 1,
              bgcolor: 'background.default',
              color: 'text.secondary'
            }}
          >
            {category.name}
          </Typography>
          <List dense>
            {category.items.map((item) => (
              <ListItem key={item.id} disablePadding>
                <Tooltip 
                  title={
                    <Box>
                      <Typography variant="subtitle2">{item.name}</Typography>
                      <Typography variant="body2">{item.description}</Typography>
                      <Typography variant="caption">
                        Size: {item.defaultWidth}cm × {item.defaultHeight}cm
                      </Typography>
                    </Box>
                  }
                  placement="right"
                >
                  <ListItemButton
                    onClick={() => onAddItem(item.id)}
                    sx={{
                      '&:hover': {
                        bgcolor: 'action.hover',
                      }
                    }}
                  >
                    <ListItemIcon sx={{ 
                      minWidth: 40,
                      color: item.color,
                      '& svg': {
                        fontSize: 24,
                      }
                    }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.name}
                      secondary={`${item.defaultWidth}×${item.defaultHeight}cm`}
                    />
                  </ListItemButton>
                </Tooltip>
              </ListItem>
            ))}
          </List>
          {index < itemCategories.length - 1 && <Divider />}
        </Box>
      ))}
    </Box>
  );
};

export default ItemLibrary;
