import { createContext } from 'react';

interface UploadContextType {
  isVisible: boolean
  toggleElement: () => void
}

export const UploadContext = createContext<UploadContextType | undefined>(undefined);