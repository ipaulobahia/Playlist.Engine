import { createContext } from 'react';

interface InfoSidebarContextType {
  isOpen: boolean;
  toggleSidebar: () => void;
  row: File | null
  selectRow: (row: File) => void
  closeSidebar: () => void;
}

const InfoSidebarContext = createContext<InfoSidebarContextType | undefined>(undefined);

export default InfoSidebarContext;
