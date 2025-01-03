import { IAllFilesTable } from '@/app/Archive/components/ArchiveTable/components/Columns';
import { createContext } from 'react';

interface InfoSidebarContextType {
  isOpen: boolean;
  toggleSidebar: () => void;
  row: IAllFilesTable | null
  selectRow: (row: IAllFilesTable) => void
  closeSidebar: () => void;
}

const InfoSidebarContext = createContext<InfoSidebarContextType | undefined>(undefined);

export default InfoSidebarContext;
