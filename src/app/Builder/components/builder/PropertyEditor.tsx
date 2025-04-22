
import React from 'react';
import { useBuilder } from '@/app/Builder/context';
import { ScrollArea } from '@/app/Builder/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Separator } from '@/app/Builder/components/ui/separator';
import { X } from 'lucide-react';
import { BasicPropertiesEditor } from './property-editors/BasicPropertiesEditor';
import { StylePropertiesEditor } from './property-editors/StylePropertiesEditor';
import { ContentItemsEditor } from './property-editors/ContentItemsEditor';

export const PropertyEditor: React.FC = () => {
  const { selectedComponent, removeComponent } = useBuilder();

  if (!selectedComponent) {
    return (
      <div className="h-full flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center p-6">
          <h3 className="text-lg font-semibold mb-2">No Component Selected</h3>
          <p className="text-gray-500 dark:text-gray-400">
            Select a component to edit its properties
          </p>
        </div>
      </div>
    );
  }

  return (
    <ScrollArea className="h-full">
      <div className="p-4 space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">
            Edit {selectedComponent.type.charAt(0).toUpperCase() + selectedComponent.type.slice(1)}
          </h2>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => removeComponent(selectedComponent.id)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <BasicPropertiesEditor component={selectedComponent} />
        
        {selectedComponent.props.style !== undefined && <Separator className="my-4" />}
        
        <StylePropertiesEditor component={selectedComponent} />
        
        {(selectedComponent.props.style !== undefined || 
          Object.entries(selectedComponent.props).some(([key, value]) => 
            typeof value === 'string' && (key === 'headline' || key === 'subheadline' || key === 'description')
          )) && 
          Object.entries(selectedComponent.props).some(([_, value]) => Array.isArray(value)) && 
          <Separator className="my-4" />
        }
        
        <ContentItemsEditor component={selectedComponent} />
      </div>
    </ScrollArea>
  );
};
