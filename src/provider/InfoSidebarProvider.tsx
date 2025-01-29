import InfoSidebarContext from '@/contexts/InfoSidebarContext';
import React, { ReactNode, useState } from 'react';

interface InfoSidebarProviderProps {
  children: ReactNode;
}

const InfoSidebarProvider: React.FC<InfoSidebarProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [row, setRow] = useState<File | null>(null)

  const toggleSidebar = () => {
    setIsOpen(prev => !prev);
  };

  const closeSidebar = () => {
    setIsOpen(false)
  }

  const selectRow = (newRow: File) => {
    const isSameRow = newRow.fileId === row?.fileId
    setRow(isSameRow ? null : newRow)
  }

  return (
    <InfoSidebarContext.Provider value={{ isOpen, toggleSidebar, row, selectRow, closeSidebar }}>
      {children}
    </InfoSidebarContext.Provider>
  );
};

export default InfoSidebarProvider;
