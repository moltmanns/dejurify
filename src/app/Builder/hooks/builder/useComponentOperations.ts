
import { useState } from 'react';
import { BuilderComponent, BuilderPage } from '@/types/builder';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'sonner';

export function useComponentOperations(
  currentPage: BuilderPage | null,
  setCurrentPage: React.Dispatch<React.SetStateAction<BuilderPage | null>>,
  selectedComponent: BuilderComponent | null,
  setSelectedComponent: React.Dispatch<React.SetStateAction<BuilderComponent | null>>
) {
  const addComponent = (
    type: BuilderComponent['type'],
    defaultProps: Record<string, any> = {},
    index?: number
  ) => {
    if (!currentPage) return;
    
    console.log('Adding component:', type, defaultProps);
    
    const newComponent: BuilderComponent = {
      id: uuidv4(),
      type,
      props: defaultProps,
    };
    
    const newComponents = [...currentPage.components];
    
    if (index !== undefined) {
      newComponents.splice(index, 0, newComponent);
    } else {
      newComponents.push(newComponent);
    }
    
    setCurrentPage({
      ...currentPage,
      components: newComponents,
    });
    
    setSelectedComponent(newComponent);
    toast.success(`Added ${type} component`);
  };
  
  const updateComponent = (id: string, props: Partial<Record<string, any>>) => {
    if (!currentPage) return;
    
    const newComponents = currentPage.components.map((component) => {
      if (component.id === id) {
        return {
          ...component,
          props: {
            ...component.props,
            ...props,
          },
        };
      }
      return component;
    });
    
    setCurrentPage({
      ...currentPage,
      components: newComponents,
    });
    
    if (selectedComponent?.id === id) {
      setSelectedComponent({
        ...selectedComponent,
        props: {
          ...selectedComponent.props,
          ...props,
        },
      });
    }
  };
  
  const removeComponent = (id: string) => {
    if (!currentPage) return;
    
    const newComponents = currentPage.components.filter((component) => component.id !== id);
    
    setCurrentPage({
      ...currentPage,
      components: newComponents,
    });
    
    if (selectedComponent?.id === id) {
      setSelectedComponent(null);
    }
    
    toast.success('Component removed');
  };
  
  const duplicateComponent = (id: string) => {
    if (!currentPage) return;
    
    const componentToDuplicate = currentPage.components.find((component) => component.id === id);
    
    if (!componentToDuplicate) return;
    
    const newComponent: BuilderComponent = {
      ...componentToDuplicate,
      id: uuidv4(),
    };
    
    const indexToDuplicate = currentPage.components.findIndex((component) => component.id === id);
    const newComponents = [...currentPage.components];
    newComponents.splice(indexToDuplicate + 1, 0, newComponent);
    
    setCurrentPage({
      ...currentPage,
      components: newComponents,
    });
    
    setSelectedComponent(newComponent);
    toast.success('Component duplicated');
  };
  
  const moveComponent = (fromIndex: number, toIndex: number) => {
    if (!currentPage) return;
    
    const newComponents = [...currentPage.components];
    const [movedComponent] = newComponents.splice(fromIndex, 1);
    newComponents.splice(toIndex, 0, movedComponent);
    
    setCurrentPage({
      ...currentPage,
      components: newComponents,
    });
  };

  return {
    addComponent,
    updateComponent,
    removeComponent,
    duplicateComponent,
    moveComponent
  };
}
