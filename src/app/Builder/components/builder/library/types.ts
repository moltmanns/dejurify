
import { BuilderComponentType } from '@/types/builder';

export interface ComponentLibraryItemProps {
  type: BuilderComponentType;
  label: string;
  icon: React.ReactNode;
  defaultProps?: Record<string, any>;
  variant?: string;
}

export interface ComponentCategoryProps {
  title: string;
  description?: string;
  items: ComponentLibraryItemProps[];
}
