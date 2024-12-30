import { IAllFilesTable } from '@/app/StationArchives/components/AllFilesTable/Columns';
import InfoSidebarContext from '@/contexts/InfoSidebarContext';
import { Row } from '@tanstack/react-table';
import React, { useState, ReactNode } from 'react';

interface InfoSidebarProviderProps {
  children: ReactNode;
}

const InfoSidebarProvider: React.FC<InfoSidebarProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [row, setRow] = useState<Row<IAllFilesTable>>()

  const toggleSidebar = () => {
    setIsOpen(prev => !prev);
  };

  const selectRow = (row: Row<IAllFilesTable>) => {
    setRow(row)
  }

  return (
    <InfoSidebarContext.Provider value={{ isOpen, toggleSidebar, row, selectRow }}>
      {children}
    </InfoSidebarContext.Provider>
  );
};

export default InfoSidebarProvider;
