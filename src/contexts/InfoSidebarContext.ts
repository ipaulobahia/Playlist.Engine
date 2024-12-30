import { IAllFilesTable } from '@/app/StationArchives/components/AllFilesTable/Columns';
import { Row } from '@tanstack/react-table';
import { createContext } from 'react';

interface InfoSidebarContextType {
  isOpen: boolean;
  toggleSidebar: () => void;
  row: Row<IAllFilesTable> | undefined
  selectRow: (row: Row<IAllFilesTable>) => void
}

const InfoSidebarContext = createContext<InfoSidebarContextType | undefined>(undefined);

export default InfoSidebarContext;
