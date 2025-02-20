import { CopyData, CopyPasteContext, CopyPasteContextType } from "@/contexts/CopyPasteContext";
import { ReactNode, useCallback, useContext, useMemo, useState } from "react";

interface CopyPasteProviderProps {
  children: ReactNode;
}

export const CopyPasteProvider: React.FC<CopyPasteProviderProps> = ({ children }) => {
  const [copyData, setCopyData] = useState<CopyData | undefined>(undefined);

  const copy = useCallback((data: CopyData) => {
    setCopyData(data);
  }, []);

  const isValidCopyData = useMemo(() => copyData?.command === 'CopyFile', [copyData]);

  return (
    <CopyPasteContext.Provider value={{ copy, copyData, isValidCopyData }}>
      {children}
    </CopyPasteContext.Provider>
  );
};

export const useCopyPaste = (): CopyPasteContextType => {
  const context = useContext(CopyPasteContext);
  if (!context) {
    throw new Error('useCopyPaste deve ser usado dentro de um CopyPasteProvider');
  }
  return context;
};