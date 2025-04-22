import React from 'react';
import { BuilderComponent } from '@/app/Builder/types/builder';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/Builder/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useBuilder } from '@/app/Builder/context';
import { ContentItem } from './ContentItem';

interface ContentItemsEditorProps {
  component: BuilderComponent;
}

export const ContentItemsEditor: React.FC<ContentItemsEditorProps> = ({ component }) => {
  const { updateComponent } = useBuilder();

  // Check for array-type properties that can be edited as items
  const arrayProps = Object.entries(component.props).filter(
    ([_, value]) => Array.isArray(value)
  );
  
  if (arrayProps.length === 0) return null;

  const handleAddItem = (key: string, items: any[]) => {
    if (Array.isArray(items) && items.length > 0) {
      const templateItem = { ...items[0] };
      
      // Create a new ID or maintain existing structure
      if (templateItem.id) {
        templateItem.id = `${Date.now()}`;
      }
      
      // Clear content fields but keep structure
      Object.keys(templateItem).forEach(key => {
        if (key !== 'id' && typeof templateItem[key] === 'string') {
          templateItem[key] = '';
        }
      });
      
      const newItems = [...items, templateItem];
      updateComponent(component.id, { [key]: newItems });
    }
  };
  
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium">Content Items</h3>
      
      <Tabs defaultValue={arrayProps[0][0]}>
        <TabsList className="w-full">
          {arrayProps.map(([key]) => (
            <TabsTrigger key={key} value={key} className="flex-1">
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {arrayProps.map(([key, items]) => (
          <TabsContent key={key} value={key} className="pt-4 space-y-4">
            {Array.isArray(items) && items.map((item: any, index: number) => (
              <ContentItem 
                key={item.id || index}
                item={item}
                index={index}
                arrayKey={key}
                items={items}
                component={component}
              />
            ))}
            
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => handleAddItem(key, items as any[])}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add {key}
            </Button>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
