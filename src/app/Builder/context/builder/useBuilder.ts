
import { useContext } from 'react';
import { BuilderContext } from './BuilderContext';

export const useBuilder = () => {
  const context = useContext(BuilderContext);
  
  if (!context) {
    throw new Error('useBuilder must be used within a BuilderProvider');
  }
  
  return context;
};
