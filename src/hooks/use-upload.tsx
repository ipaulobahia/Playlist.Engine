import UploadContext from "@/contexts/UploadContext";
import { useContext } from "react";

export const useUpload = () => {
  const context = useContext(UploadContext);

  if (!context) {
    throw new Error("useUpload must be used within a UploadProvider");
  }

  return context;
};