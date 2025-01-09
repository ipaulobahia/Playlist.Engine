import InfoSidebarContext from '@/contexts/InfoSidebarContext';
import { IFile } from '@/service/api/files/getFiles';
import React, { useState, ReactNode } from 'react';

interface InfoSidebarProviderProps {
  children: ReactNode;
}

const InfoSidebarProvider: React.FC<InfoSidebarProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [row, setRow] = useState<IFile | null>(null)

  const toggleSidebar = () => {
    setIsOpen(prev => !prev);
  };

  const closeSidebar = () => {
    setIsOpen(false)
  }

  const selectRow = (newRow: IFile) => {
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
