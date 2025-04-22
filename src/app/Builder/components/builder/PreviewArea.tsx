import React from 'react';
import { useBuilder } from '@/app/Builder/context';
import { cn } from '@/lib/utils';
import { BuilderComponent } from '@/app/Builder/types/builder';
import { ComponentRenderer } from './ComponentRenderer';
import { useDrop } from 'react-dnd';
import { ScrollArea } from '@/app/Builder/components/ui/scroll-area';

export const PreviewArea: React.FC = () => {
  const { 
    currentPage, 
    previewDevice, 
    selectedComponent, 
    setSelectedComponent,
    addComponent,
    setPreviewDevice
  } = useBuilder();

  // Fix for drag and drop - specify the correct item type
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'component',
    drop: (item: { type: BuilderComponent['type']; defaultProps: Record<string, any> }) => {
      console.log('Item dropped:', item);
      addComponent(item.type, item.defaultProps);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  if (!currentPage) {
    return (
      <div className="h-full flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center p-6">
          <h3 className="text-lg font-semibold mb-2">No Page Selected</h3>
          <p className="text-gray-500 dark:text-gray-400">
            Create or select a page to start building
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-800 p-2">
        <h3 className="font-medium text-sm">
          Preview: {currentPage?.name}
        </h3>
        <div className="flex gap-2">
          <button
            className={cn(
              "p-1 rounded-md text-xs",
              previewDevice === "desktop"
                ? "bg-gray-200 dark:bg-gray-700"
                : "hover:bg-gray-100 dark:hover:bg-gray-800"
            )}
            onClick={() => setPreviewDevice("desktop")}
          >
            Desktop
          </button>
          <button
            className={cn(
              "p-1 rounded-md text-xs",
              previewDevice === "tablet"
                ? "bg-gray-200 dark:bg-gray-700"
                : "hover:bg-gray-100 dark:hover:bg-gray-800"
            )}
            onClick={() => setPreviewDevice("tablet")}
          >
            Tablet
          </button>
          <button
            className={cn(
              "p-1 rounded-md text-xs",
              previewDevice === "mobile"
                ? "bg-gray-200 dark:bg-gray-700"
                : "hover:bg-gray-100 dark:hover:bg-gray-800"
            )}
            onClick={() => setPreviewDevice("mobile")}
          >
            Mobile
          </button>
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div 
          ref={drop} 
          className={cn(
            "preview-container", 
            previewDevice,
            isOver && "bg-blue-50 dark:bg-blue-900/20"
          )}
          style={{ minHeight: '300px' }} // Add min-height to make drop area visible
        >
          {currentPage.components.length === 0 ? (
            <div className="py-12 flex flex-col items-center justify-center text-center">
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Drag components here to build your page
              </p>
              <div className="w-64 h-0.5 bg-dashed bg-gray-200 dark:bg-gray-700" />
            </div>
          ) : (
            currentPage.components.map((component, index) => (
              <ComponentRenderer
                key={component.id}
                component={component}
                isSelected={selectedComponent?.id === component.id}
                onClick={() => setSelectedComponent(component)}
                index={index}
              />
            ))
          )}
          
          {isOver && (
            <div className="drop-indicator">
              <p className="text-blue-500">Drop here to add component</p>
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};
