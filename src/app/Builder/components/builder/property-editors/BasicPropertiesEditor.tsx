
import React from 'react';
import { BuilderComponent } from '@/app/Builder/types/builder';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/app/Builder/components/ui/label';
import { useBuilder } from '@/app/Builder/context';

interface BasicPropertiesEditorProps {
  component: BuilderComponent;
}

export const BasicPropertiesEditor: React.FC<BasicPropertiesEditorProps> = ({ component }) => {
  const { updateComponent } = useBuilder();

  const handleChange = (key: string, value: any) => {
    updateComponent(component.id, { [key]: value });
  };

  const commonProps = [
    { key: 'headline', label: 'Headline', type: 'text' },
    { key: 'subheadline', label: 'Subheadline', type: 'textarea' },
    { key: 'description', label: 'Description', type: 'textarea' },
  ];

  const availableProps = commonProps.filter(prop => component.props[prop.key] !== undefined);

  if (availableProps.length === 0) return null;

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium">Basic Properties</h3>
      
      {availableProps.map((prop) => (
        <div key={prop.key} className="space-y-2">
          <Label htmlFor={prop.key}>{prop.label}</Label>
          {prop.type === 'text' ? (
            <Input
              id={prop.key}
              value={component.props[prop.key] || ''}
              onChange={(e) => handleChange(prop.key, e.target.value)}
            />
          ) : prop.type === 'textarea' ? (
            <Textarea
              id={prop.key}
              value={component.props[prop.key] || ''}
              onChange={(e) => handleChange(prop.key, e.target.value)}
              rows={3}
            />
          ) : null}
        </div>
      ))}
    </div>
  );
};
