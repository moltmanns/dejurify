
import { useDrag, useDrop } from 'react-dnd';
import { BuilderComponent } from '@/types/builder';

interface DragItem {
  id: string;
  index: number;
}

export function useDragComponent(
  component: BuilderComponent,
  index: number,
  isPreview = false
) {
  return useDrag<DragItem, unknown, { isDragging: boolean }>(() => ({
    type: 'arrangeComponent',
    item: { id: component.id, index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    canDrag: !isPreview, // Disable dragging in preview mode
  }));
}

export function useDropComponent(
  index: number,
  moveComponent: (fromIndex: number, toIndex: number) => void,
  isPreview = false
) {
  return useDrop<DragItem, unknown, { isOver: boolean }>(() => ({
    accept: 'arrangeComponent',
    hover: (item, monitor) => {
      if (item.index === index || isPreview) {
        return;
      }
      
      moveComponent(item.index, index);
      item.index = index;
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
    canDrag: !isPreview, 
  }));
}
