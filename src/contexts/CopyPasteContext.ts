import { createContext } from 'react';

export interface CopyData {
  command: string;
  value: number[];
}

export interface CopyPasteContextType {
  copyData?: CopyData;
  copy: (data: CopyData) => void;
  isValidCopyData: boolean;
}

export const CopyPasteContext = createContext<CopyPasteContextType | undefined>(undefined);