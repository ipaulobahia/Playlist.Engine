import { InfoSidebarContext } from '@/contexts/InfoSidebarContext';
import { MediaFiles } from '@/service/api/playlist/query/getPlaylistList';
import React, { ReactNode, useState } from 'react';

interface InfoSidebarProviderProps {
  children: ReactNode;
}

const InfoSidebarProvider: React.FC<InfoSidebarProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [row, setRow] = useState<MediaFiles | null>(null)

  const toggleSidebar = () => {
    setIsOpen(prev => !prev);
  };

  const closeSidebar = () => {
    setIsOpen(false)
  }

  const selectRow = (newRow: MediaFiles) => {
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
