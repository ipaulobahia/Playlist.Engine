import { MediaFiles } from '@/service/api/playlist/query/getPlaylistList';
import { createContext } from 'react';

interface InfoSidebarContextType {
  isOpen: boolean;
  toggleSidebar: () => void;
  row: MediaFiles | null
  selectRow: (row: MediaFiles) => void
  closeSidebar: () => void;
}

export const InfoSidebarContext = createContext<InfoSidebarContextType | undefined>(undefined);