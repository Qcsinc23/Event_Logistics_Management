import { useRef, useEffect } from 'react';
import { Rect, Circle, Line, Group, Transformer } from 'react-konva';

interface LayoutItemProps {
  shapeProps: {
    id: string;
    type: string;
    x: number;
    y: number;
    width: number;
    height: number;
    rotation: number;
    isDragging: boolean;
  };
  isSelected: boolean;
  onSelect: () => void;
  onChange: (newAttrs: any) => void;
  onDragStart: (e: any) => void;
  onDragEnd: (e: any) => void;
  onTransformEnd: (e: any) => void;
}

const LayoutItem = ({
  shapeProps,
  isSelected,
  onSelect,
  onChange,
  onDragStart,
  onDragEnd,
  onTransformEnd
}: LayoutItemProps) => {
  const groupRef = useRef(null);
  const transformerRef = useRef(null);

  useEffect(() => {
    if (isSelected && transformerRef.current && groupRef.current) {
      // @ts-ignore
      transformerRef.current.nodes([groupRef.current]);
      // @ts-ignore
      transformerRef.current.getLayer()?.batchDraw();
    }
  }, [isSelected]);

  const getShapeColor = (type: string) => {
    switch (type) {
      case 'round-table':
      case 'rectangular-table':
        return '#B8CCE4'; // Light blue
      case 'chair':
        return '#E2EFD9'; // Light green
      case 'stage':
      case 'podium':
        return '#FBE5D6'; // Light orange
      case 'speaker':
      case 'screen':
      case 'camera':
        return '#F2DCDB'; // Light red
      case 'bar':
      case 'buffet':
        return '#E5E0EC'; // Light purple
      default:
        return '#F2F2F2'; // Light gray
    }
  };

  const renderShape = () => {
    const { width, height, type } = shapeProps;
    const color = getShapeColor(type);
    const shadowProps = {
      shadowBlur: 5,
      shadowColor: 'rgba(0,0,0,0.3)',
      shadowOffset: { x: 2, y: 2 },
      shadowOpacity: 0.3
    };

    switch (type) {
      case 'round-table':
        return (
          <>
            <Circle
              x={width / 2}
              y={height / 2}
              radius={Math.min(width, height) / 2}
              fill={color}
              stroke={isSelected ? '#666666' : '#999999'}
              strokeWidth={isSelected ? 2 : 1}
              {...shadowProps}
            />
            {/* Table surface pattern */}
            <Circle
              x={width / 2}
              y={height / 2}
              radius={Math.min(width, height) / 3}
              stroke="#999999"
              strokeWidth={1}
            />
          </>
        );

      case 'rectangular-table':
        return (
          <>
            <Rect
              width={width}
              height={height}
              fill={color}
              cornerRadius={5}
              stroke={isSelected ? '#666666' : '#999999'}
              strokeWidth={isSelected ? 2 : 1}
              {...shadowProps}
            />
            {/* Table surface pattern */}
            <Line
              points={[10, height/2, width-10, height/2]}
              stroke="#999999"
              strokeWidth={1}
            />
          </>
        );

      case 'chair':
        const chairSize = Math.min(width, height);
        return (
          <>
            <Circle
              x={width / 2}
              y={height / 2}
              radius={chairSize / 3}
              fill={color}
              stroke={isSelected ? '#666666' : '#999999'}
              strokeWidth={isSelected ? 2 : 1}
              {...shadowProps}
            />
            <Rect
              x={width/2 - chairSize/4}
              y={height/2 - chairSize/4}
              width={chairSize/2}
              height={chairSize/2}
              fill={color}
              stroke={isSelected ? '#666666' : '#999999'}
              strokeWidth={isSelected ? 2 : 1}
            />
          </>
        );

      case 'stage':
        return (
          <>
            <Rect
              width={width}
              height={height}
              fill={color}
              stroke={isSelected ? '#666666' : '#999999'}
              strokeWidth={isSelected ? 2 : 1}
              {...shadowProps}
            />
            {/* Stage pattern */}
            <Line
              points={[0, height/3, width, height/3]}
              stroke="#999999"
              strokeWidth={1}
            />
            <Line
              points={[0, height*2/3, width, height*2/3]}
              stroke="#999999"
              strokeWidth={1}
            />
          </>
        );

      case 'podium':
        return (
          <>
            <Rect
              width={width}
              height={height}
              fill={color}
              cornerRadius={2}
              stroke={isSelected ? '#666666' : '#999999'}
              strokeWidth={isSelected ? 2 : 1}
              {...shadowProps}
            />
            {/* Podium pattern */}
            <Line
              points={[width/4, 0, width/4, height]}
              stroke="#999999"
              strokeWidth={1}
            />
          </>
        );

      case 'speaker':
        return (
          <>
            <Rect
              width={width}
              height={height}
              fill={color}
              cornerRadius={5}
              stroke={isSelected ? '#666666' : '#999999'}
              strokeWidth={isSelected ? 2 : 1}
              {...shadowProps}
            />
            {/* Speaker pattern */}
            <Circle
              x={width/2}
              y={height/3}
              radius={width/4}
              stroke="#999999"
              strokeWidth={1}
            />
            <Circle
              x={width/2}
              y={height*2/3}
              radius={width/3}
              stroke="#999999"
              strokeWidth={1}
            />
          </>
        );

      case 'screen':
        return (
          <>
            <Rect
              width={width}
              height={height}
              fill={color}
              stroke={isSelected ? '#666666' : '#999999'}
              strokeWidth={isSelected ? 2 : 1}
              {...shadowProps}
            />
            {/* Screen pattern */}
            <Line
              points={[width/2, 0, width/2, height]}
              stroke="#999999"
              strokeWidth={1}
            />
          </>
        );

      case 'camera':
        return (
          <>
            <Rect
              width={width * 0.7}
              height={height * 0.7}
              x={width * 0.15}
              y={height * 0.15}
              fill={color}
              cornerRadius={5}
              stroke={isSelected ? '#666666' : '#999999'}
              strokeWidth={isSelected ? 2 : 1}
              {...shadowProps}
            />
            {/* Lens */}
            <Circle
              x={width/2}
              y={height/2}
              radius={Math.min(width, height) * 0.2}
              stroke="#999999"
              strokeWidth={1}
            />
          </>
        );

      case 'bar':
      case 'buffet':
        return (
          <>
            <Rect
              width={width}
              height={height}
              fill={color}
              cornerRadius={5}
              stroke={isSelected ? '#666666' : '#999999'}
              strokeWidth={isSelected ? 2 : 1}
              {...shadowProps}
            />
            {/* Counter pattern */}
            <Line
              points={[10, height/3, width-10, height/3]}
              stroke="#999999"
              strokeWidth={1}
            />
            <Line
              points={[10, height*2/3, width-10, height*2/3]}
              stroke="#999999"
              strokeWidth={1}
            />
          </>
        );

      default:
        return (
          <Rect
            width={width}
            height={height}
            fill={color}
            cornerRadius={2}
            stroke={isSelected ? '#666666' : '#999999'}
            strokeWidth={isSelected ? 2 : 1}
            {...shadowProps}
          />
        );
    }
  };

  return (
    <>
      <Group
        {...shapeProps}
        ref={groupRef}
        draggable
        onClick={onSelect}
        onTap={onSelect}
        onDragStart={onDragStart}
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            // @ts-ignore
            x: e.target.x(),
            // @ts-ignore
            y: e.target.y(),
          });
          onDragEnd(e);
        }}
        onTransformEnd={(e) => {
          const node = groupRef.current;
          if (!node) return;
          
          // @ts-ignore
          const scaleX = node.scaleX();
          // @ts-ignore
          const scaleY = node.scaleY();

          // @ts-ignore
          node.scaleX(1);
          // @ts-ignore
          node.scaleY(1);

          onChange({
            ...shapeProps,
            // @ts-ignore
            x: node.x(),
            // @ts-ignore
            y: node.y(),
            // @ts-ignore
            width: Math.max(5, node.width() * scaleX),
            // @ts-ignore
            height: Math.max(5, node.height() * scaleY),
            // @ts-ignore
            rotation: node.rotation(),
          });

          onTransformEnd(e);
        }}
      >
        {renderShape()}
      </Group>
      {isSelected && (
        <Transformer
          ref={transformerRef}
          boundBoxFunc={(oldBox, newBox) => {
            // Limit resize
            const minSize = 5;
            const maxSize = 1000;
            
            if (
              newBox.width < minSize ||
              newBox.height < minSize ||
              newBox.width > maxSize ||
              newBox.height > maxSize
            ) {
              return oldBox;
            }
            return newBox;
          }}
          padding={5}
          enabledAnchors={['top-left', 'top-right', 'bottom-left', 'bottom-right']}
          rotateEnabled={true}
          rotationSnaps={[0, 45, 90, 135, 180, 225, 270, 315]}
          borderStroke="#666666"
          borderStrokeWidth={2}
          anchorStroke="#666666"
          anchorFill="#ffffff"
          anchorSize={8}
        />
      )}
    </>
  );
};

export default LayoutItem;
