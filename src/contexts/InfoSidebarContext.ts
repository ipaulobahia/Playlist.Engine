import { createContext } from 'react';

interface InfoSidebarContextType {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const InfoSidebarContext = createContext<InfoSidebarContextType | undefined>(undefined);

export default InfoSidebarContext;
