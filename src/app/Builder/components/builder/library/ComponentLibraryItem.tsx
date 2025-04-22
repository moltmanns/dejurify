
import React from 'react';
import { useDrag } from 'react-dnd';
import { useBuilder } from '@/app/Builder/context';
import { cn } from '@/lib/utils';
import { Badge } from "@/components/ui/badge";
import { ComponentLibraryItemProps } from './types';

export const ComponentLibraryItem: React.FC<ComponentLibraryItemProps> = ({
  type,
  label,
  icon,
  defaultProps = {},
  variant
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'component',
    item: () => {
      console.log('Dragging component:', { type, defaultProps });
      return { type, defaultProps };
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const { addComponent } = useBuilder();

  const handleClick = () => {
    console.log('Adding component by click:', type);
    addComponent(type, defaultProps);
  };

  return (
    <div
      ref={drag}
      className={cn(
        'component-library-item cursor-pointer p-3 border border-gray-200 dark:border-gray-800 rounded-md flex flex-col items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800',
        isDragging && 'opacity-50'
      )}
      onClick={handleClick}
    >
      <div className="text-gray-600 dark:text-gray-400">{icon}</div>
      <div className="flex flex-col items-center gap-0.5">
        <span className="text-xs text-center font-medium">{label}</span>
        {variant && (
          <Badge variant="outline" className="text-[10px] px-1 py-0">
            {variant}
          </Badge>
        )}
      </div>
    </div>
  );
};
