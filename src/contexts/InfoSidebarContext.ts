import { IFile } from '@/service/api/files/getFiles';
import { createContext } from 'react';

interface InfoSidebarContextType {
  isOpen: boolean;
  toggleSidebar: () => void;
  row: IFile | null
  selectRow: (row: IFile) => void
  closeSidebar: () => void;
}

const InfoSidebarContext = createContext<InfoSidebarContextType | undefined>(undefined);

export default InfoSidebarContext;
