import { createContext } from 'react';

interface UploadContextType {
  isVisible: boolean
  toggleElement: () => void
}

const UploadContext = createContext<UploadContextType | undefined>(undefined);

export default UploadContext;
