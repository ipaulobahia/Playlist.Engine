import InfoSidebarContext from '@/contexts/InfoSidebarContext';
import React, { useState, ReactNode } from 'react';

interface InfoSidebarProviderProps {
  children: ReactNode;
}

const InfoSidebarProvider: React.FC<InfoSidebarProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <InfoSidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </InfoSidebarContext.Provider>
  );
};

export default InfoSidebarProvider;
