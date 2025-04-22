import React from 'react';
import { useBuilder } from '@/app/Builder/context';
import { BuilderComponent } from '@/app/Builder/types/builder';
import { ScrollArea } from '@/app/Builder/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { ChevronRight, Eye, EyeOff } from 'lucide-react';

export const LayerNavigator: React.FC = () => {
  const { currentPage, selectedComponent, setSelectedComponent } = useBuilder();

  if (!currentPage) {
    return (
      <div className="h-full flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center p-6">
          <p className="text-gray-500 dark:text-gray-400">
            No page selected
          </p>
        </div>
      </div>
    );
  }

  return (
    <ScrollArea className="h-full">
      <div className="p-4">
        <h2 className="text-sm font-semibold mb-3">Page Layers</h2>
        
        {currentPage.components.length === 0 ? (
          <div className="text-center p-6">
            <p className="text-gray-500 dark:text-gray-400">
              No components added
            </p>
          </div>
        ) : (
          <div className="space-y-1">
            {currentPage.components.map((component) => (
              <LayerItem
                key={component.id}
                component={component}
                isSelected={selectedComponent?.id === component.id}
                onClick={() => setSelectedComponent(component)}
              />
            ))}
          </div>
        )}
      </div>
    </ScrollArea>
  );
};

interface LayerItemProps {
  component: BuilderComponent;
  isSelected: boolean;
  onClick: () => void;
}

const LayerItem: React.FC<LayerItemProps> = ({ component, isSelected, onClick }) => {
  return (
    <div
      className={cn(
        'flex items-center py-1 px-2 rounded-md cursor-pointer',
        isSelected
          ? 'bg-primary text-primary-foreground'
          : 'hover:bg-gray-100 dark:hover:bg-gray-800'
      )}
      onClick={onClick}
    >
      <ChevronRight className="h-3 w-3 mr-1 flex-shrink-0" />
      <span className="text-xs truncate flex-1">
        {component.type.charAt(0).toUpperCase() + component.type.slice(1)}
        {component.props.headline ? `: ${component.props.headline}` : ''}
      </span>
    </div>
  );
};
