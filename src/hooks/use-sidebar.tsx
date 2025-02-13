import { InfoSidebarContext } from '@/contexts/InfoSidebarContext';
import { useContext } from 'react';

export const useInfoSidebar = () => {
  const context = useContext(InfoSidebarContext);

  if (!context) {
    throw new Error("useInfoSidebar must be used within a SidebarProvider");
  }

  return context;
};
