
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Copy, 
  Trash, 
  GripVertical,
  ArrowUp,
  ArrowDown 
} from 'lucide-react';

interface ComponentControlsProps {
  onMoveUp: () => void;
  onMoveDown: () => void;
  onDuplicate: (e: React.MouseEvent) => void;
  onDelete: (e: React.MouseEvent) => void;
  dragRef: React.Ref<HTMLButtonElement>;
}

export const ComponentControls: React.FC<ComponentControlsProps> = ({
  onMoveUp,
  onMoveDown,
  onDuplicate,
  onDelete,
  dragRef
}) => {
  return (
    <div className="element-controls z-50">
      <Button
        size="icon"
        variant="ghost"
        className="element-handle h-8 w-8"
        ref={dragRef}
      >
        <GripVertical className="h-4 w-4" />
      </Button>
      <Button
        size="icon"
        variant="ghost"
        className="h-8 w-8"
        onClick={onMoveUp}
      >
        <ArrowUp className="h-4 w-4" />
      </Button>
      <Button
        size="icon"
        variant="ghost"
        className="h-8 w-8"
        onClick={onMoveDown}
      >
        <ArrowDown className="h-4 w-4" />
      </Button>
      <Button
        size="icon"
        variant="ghost"
        className="h-8 w-8"
        onClick={onDuplicate}
      >
        <Copy className="h-4 w-4" />
      </Button>
      <Button
        size="icon"
        variant="ghost"
        className="h-8 w-8"
        onClick={onDelete}
      >
        <Trash className="h-4 w-4" />
      </Button>
    </div>
  );
};
