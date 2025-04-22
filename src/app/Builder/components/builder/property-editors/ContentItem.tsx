
import React from 'react';
import { BuilderComponent } from '@/app/Builder/types/builder';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/app/Builder/components/ui/label';
import { ChevronDown, ChevronUp, Trash } from 'lucide-react';
import { useBuilder } from '@/app/Builder/context';

interface ContentItemProps {
  item: any;
  index: number;
  arrayKey: string;
  items: any[];
  component: BuilderComponent;
}

export const ContentItem: React.FC<ContentItemProps> = ({
  item,
  index,
  arrayKey,
  items,
  component,
}) => {
  const { updateComponent } = useBuilder();

  const handleItemChange = (itemKey: string, value: any) => {
    if (Array.isArray(items)) {
      const newItems = [...items];
      (newItems[index] as any)[itemKey] = value;
      updateComponent(component.id, { [arrayKey]: newItems });
    }
  };

  const handleMoveUp = () => {
    if (Array.isArray(items) && index > 0) {
      const newItems = [...items];
      [newItems[index], newItems[index - 1]] = [newItems[index - 1], newItems[index]];
      updateComponent(component.id, { [arrayKey]: newItems });
    }
  };

  const handleMoveDown = () => {
    if (Array.isArray(items) && index < items.length - 1) {
      const newItems = [...items];
      [newItems[index], newItems[index + 1]] = [newItems[index + 1], newItems[index]];
      updateComponent(component.id, { [arrayKey]: newItems });
    }
  };

  const handleDelete = () => {
    if (Array.isArray(items)) {
      const newItems = [...items];
      newItems.splice(index, 1);
      updateComponent(component.id, { [arrayKey]: newItems });
    }
  };

  if (!item || typeof item !== 'object') return null;

  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-md p-3 space-y-3">
      <div className="flex justify-between items-center">
        <h4 className="text-sm font-medium">
          {item.title || item.name || item.label || `Item ${index + 1}`}
        </h4>
        <div className="flex items-center gap-1">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={handleMoveUp}
          >
            <ChevronUp className="h-4 w-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={handleMoveDown}
          >
            <ChevronDown className="h-4 w-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={handleDelete}
          >
            <Trash className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {Object.entries(item).map(([itemKey, itemValue]) => {
        if (itemKey === 'id') return null;
        
        const isLongText = typeof itemValue === 'string' && 
          (itemKey.includes('description') || 
           itemKey.includes('bio') || 
           itemKey.includes('excerpt') || 
           itemKey.includes('answer'));
        
        return (
          <div key={itemKey} className="space-y-1">
            <Label htmlFor={`${arrayKey}-${index}-${itemKey}`} className="text-xs">
              {itemKey.charAt(0).toUpperCase() + itemKey.slice(1)}
            </Label>
            {typeof itemValue === 'string' && (
              isLongText ? (
                <Textarea
                  id={`${arrayKey}-${index}-${itemKey}`}
                  value={itemValue}
                  onChange={(e) => handleItemChange(itemKey, e.target.value)}
                  rows={2}
                />
              ) : (
                <Input
                  id={`${arrayKey}-${index}-${itemKey}`}
                  value={itemValue}
                  onChange={(e) => handleItemChange(itemKey, e.target.value)}
                />
              )
            )}
          </div>
        );
      })}
    </div>
  );
};
