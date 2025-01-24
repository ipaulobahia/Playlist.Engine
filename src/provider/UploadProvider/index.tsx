import UploadContext from '@/contexts/UploadContext';
import { ReactNode, useState } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { UploadAccordion } from './components';

interface UploadProviderProps {
  children: ReactNode;
}

export const UploadProvider: React.FC<UploadProviderProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  function toggleElement() {
    setIsVisible(prev => !prev)
  };

  return (
    <UploadContext.Provider value={{ isVisible, toggleElement }}>
      {children}
      <UploadAccordion isVisible={isVisible} />
    </UploadContext.Provider>
  );
};