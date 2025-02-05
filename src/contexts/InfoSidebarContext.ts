import { MediaFiles } from '@/service/api/playlist/getPlaylistList';
import { createContext } from 'react';

interface InfoSidebarContextType {
  isOpen: boolean;
  toggleSidebar: () => void;
  row: MediaFiles | null
  selectRow: (row: MediaFiles) => void
  closeSidebar: () => void;
}

const InfoSidebarContext = createContext<InfoSidebarContextType | undefined>(undefined);

export default InfoSidebarContext;
