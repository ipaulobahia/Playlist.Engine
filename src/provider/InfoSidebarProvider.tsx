import { IAllFilesTable } from '@/app/Archive/components/ArchiveTable/components/Columns';
import InfoSidebarContext from '@/contexts/InfoSidebarContext';
import React, { useState, ReactNode } from 'react';

interface InfoSidebarProviderProps {
  children: ReactNode;
}

const InfoSidebarProvider: React.FC<InfoSidebarProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [row, setRow] = useState<IAllFilesTable | null>(null)

  const toggleSidebar = () => {
    setIsOpen(prev => !prev);
  };

  const closeSidebar = () => {
    setIsOpen(false)
  }

  const selectRow = (newRow: IAllFilesTable) => {
    const isSameRow = newRow.id === row?.id
    setRow(isSameRow ? null : newRow)
  }

  return (
    <InfoSidebarContext.Provider value={{ isOpen, toggleSidebar, row, selectRow, closeSidebar }}>
      {children}
    </InfoSidebarContext.Provider>
  );
};

export default InfoSidebarProvider;
