
import React from 'react';
import { useBuilder } from '@/app/Builder/context';
import { BuilderComponent } from '@/app/Builder/types/builder';
import { cn } from '@/lib/utils';
import { ComponentTypeRenderer } from './renderers/ComponentTypeRenderer';
import { ComponentControls } from './controls/ComponentControls';
import { useDragComponent, useDropComponent } from '@/app/Builder/hooks/builder/useDragDrop';

interface ComponentRendererProps {
  component: BuilderComponent;
  isSelected: boolean;
  onClick: () => void;
  index: number;
  isPreview?: boolean;
}

export const ComponentRenderer: React.FC<ComponentRendererProps> = ({
  component,
  isSelected,
  onClick,
  index,
  isPreview = false,
}) => {
  const { duplicateComponent, removeComponent, moveComponent } = useBuilder();

  const [{ isDragging }, drag, preview] = useDragComponent(component, index, isPreview);
  const [{ isOver }, drop] = useDropComponent(index, moveComponent, isPreview);

  const handleDuplicate = (e: React.MouseEvent) => {
    e.stopPropagation();
    duplicateComponent(component.id);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    removeComponent(component.id);
  };

  const handleMoveUp = () => moveComponent(index, Math.max(0, index - 1));
  const handleMoveDown = () => moveComponent(index, index + 1);

  // In preview mode, just render the component without builder UI
  if (isPreview) {
    return <div className="preview-only"><ComponentTypeRenderer component={component} /></div>;
  }

  return (
    <div
      ref={(node) => {
        drop(node);
        preview(node);
      }}
      className={cn(
        'builder-element',
        isSelected && 'selected',
        isDragging && 'opacity-50'
      )}
      onClick={onClick}
    >
      <ComponentControls 
        onMoveUp={handleMoveUp}
        onMoveDown={handleMoveDown}
        onDuplicate={handleDuplicate}
        onDelete={handleDelete}
        dragRef={drag}
      />

      <ComponentTypeRenderer component={component} />
    </div>
  );
};
