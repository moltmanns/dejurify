
import React from 'react';
import { ComponentCategoryProps } from './types';
import { ComponentLibraryItem } from './ComponentLibraryItem';

export const ComponentCategory: React.FC<ComponentCategoryProps> = ({ 
  title, 
  description, 
  items 
}) => {
  return (
    <div className="mb-6">
      <h3 className="font-semibold text-sm mb-1 text-gray-700 dark:text-gray-300">{title}</h3>
      {description && (
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{description}</p>
      )}
      <div className="grid grid-cols-2 gap-2">
        {items.map((item) => (
          <ComponentLibraryItem key={item.type + item.label} {...item} />
        ))}
      </div>
    </div>
  );
};
