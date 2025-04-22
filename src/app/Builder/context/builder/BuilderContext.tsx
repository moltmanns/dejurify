'use client'
import React, { createContext, useContext, useState } from 'react';
import { BuilderComponent, BuilderPage, DeviceType } from '@/app/Builder/types/builder';
import { BuilderContextProps } from './types';
import { useBuilderAuth } from '@/app/Builder/hooks/builder/useBuilderAuth';
import { useLoadPages } from '@/app/Builder/hooks/builder/useLoadPages';
import { useComponentOperations } from '@/app/Builder/hooks/builder/useComponentOperations';
import { usePageOperations } from '@/app/Builder/hooks/builder/usePageOperations';
import { usePublishSite } from '@/app/Builder/hooks/builder/usePublishSite';

// Explicitly export the context
export const BuilderContext = createContext<BuilderContextProps | undefined>(undefined);

export function BuilderProvider({ children }: { children: React.ReactNode }) {
  const [selectedComponent, setSelectedComponent] = useState<BuilderComponent | null>(null);
  const [previewDevice, setPreviewDevice] = useState<DeviceType>('desktop');
  
  const { user } = useBuilderAuth();
  const { pages, setPages, currentPage, setCurrentPage } = useLoadPages(user);
  
  const componentOps = useComponentOperations(
    currentPage,
    setCurrentPage,
    selectedComponent,
    setSelectedComponent
  );
  
  const pageOps = usePageOperations(
    pages,
    setPages,
    currentPage,
    setCurrentPage,
    user
  );
  
  const { publishSite } = usePublishSite(pages, user);
  
  const value: BuilderContextProps = {
    currentPage,
    setCurrentPage,
    selectedComponent,
    setSelectedComponent,
    previewDevice,
    setPreviewDevice,
    pages,
    ...componentOps,
    ...pageOps,
    publishSite,
  };
  
  return <BuilderContext.Provider value={value}>{children}</BuilderContext.Provider>;
}

export function useBuilder() {
  const context = useContext(BuilderContext);
  if (context === undefined) {
    throw new Error('useBuilder must be used within a BuilderProvider');
  }
  return context;
}
