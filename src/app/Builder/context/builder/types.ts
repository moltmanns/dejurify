
import { BuilderComponent, BuilderPage, DeviceType } from '@/types/builder';

export interface BuilderContextProps {
  currentPage: BuilderPage | null;
  setCurrentPage: React.Dispatch<React.SetStateAction<BuilderPage | null>>;
  selectedComponent: BuilderComponent | null;
  setSelectedComponent: React.Dispatch<React.SetStateAction<BuilderComponent | null>>;
  previewDevice: DeviceType;
  setPreviewDevice: React.Dispatch<React.SetStateAction<DeviceType>>;
  pages: BuilderPage[];
  addComponent: (type: BuilderComponent['type'], defaultProps?: Record<string, any>, index?: number) => void;
  updateComponent: (id: string, props: Partial<Record<string, any>>) => void;
  removeComponent: (id: string) => void;
  duplicateComponent: (id: string) => void;
  moveComponent: (fromIndex: number, toIndex: number) => void;
  savePage: () => void;
  createNewPage: (name: string, slug: string) => void;
  deletePage: (id: string) => void;
  updatePage: (id: string, data: Partial<BuilderPage>) => void;
  previewPage: (id: string) => void;
  publishSite: () => void;
}
