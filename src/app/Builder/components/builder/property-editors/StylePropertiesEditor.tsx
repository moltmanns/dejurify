
import React from 'react';
import { BuilderComponent } from '@/app/Builder/types/builder';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/Builder/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/app/Builder/components/ui/label';
import { useBuilder } from '@/app/Builder/context';
import { getStyleOptions } from '../utils/componentStyleOptions';

interface StylePropertiesEditorProps {
  component: BuilderComponent;
}

export const StylePropertiesEditor: React.FC<StylePropertiesEditorProps> = ({ component }) => {
  const { updateComponent } = useBuilder();

  // Check if the component has style options
  if (component.props.style === undefined) return null;

  const handleChange = (key: string, value: any) => {
    updateComponent(component.id, { [key]: value });
  };

  const { styleOptions, alignmentOptions } = getStyleOptions(component.type);

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium">Style & Layout</h3>
      
      {styleOptions.length > 0 && (
        <div className="space-y-2">
          <Label htmlFor="style">Style</Label>
          <Select
            value={component.props.style}
            onValueChange={(value) => handleChange('style', value)}
          >
            <SelectTrigger id="style">
              <SelectValue placeholder="Select style" />
            </SelectTrigger>
            <SelectContent>
              {styleOptions.map((style) => (
                <SelectItem key={style.value} value={style.value}>
                  {style.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
      
      {component.props.alignment !== undefined && (
        <div className="space-y-2">
          <Label htmlFor="alignment">Alignment</Label>
          <Select
            value={component.props.alignment}
            onValueChange={(value) => handleChange('alignment', value)}
          >
            <SelectTrigger id="alignment">
              <SelectValue placeholder="Select alignment" />
            </SelectTrigger>
            <SelectContent>
              {alignmentOptions.map((align) => (
                <SelectItem key={align.value} value={align.value}>
                  {align.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
      
      {component.props.backgroundColor !== undefined && (
        <div className="space-y-2">
          <Label htmlFor="backgroundColor">Background Color</Label>
          <div className="flex items-center gap-2">
            <input
              type="color"
              id="backgroundColor"
              value={component.props.backgroundColor}
              onChange={(e) => handleChange('backgroundColor', e.target.value)}
              className="w-10 h-10 rounded-md border border-gray-300"
            />
            <Input
              value={component.props.backgroundColor}
              onChange={(e) => handleChange('backgroundColor', e.target.value)}
              className="flex-1"
            />
          </div>
        </div>
      )}
      
      {component.props.textColor !== undefined && (
        <div className="space-y-2">
          <Label htmlFor="textColor">Text Color</Label>
          <div className="flex items-center gap-2">
            <input
              type="color"
              id="textColor"
              value={component.props.textColor}
              onChange={(e) => handleChange('textColor', e.target.value)}
              className="w-10 h-10 rounded-md border border-gray-300"
            />
            <Input
              value={component.props.textColor}
              onChange={(e) => handleChange('textColor', e.target.value)}
              className="flex-1"
            />
          </div>
        </div>
      )}
    </div>
  );
};
