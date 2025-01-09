import { http } from "@/config";
import { useQuery } from "@tanstack/react-query";

export interface IFile {
  fileId: string,
  folderId: number,
  title: string,
  filename: string,
  modifiedDate: string,
  fileFormat: string,
  mimeType: string,
  createdDate: string,
  size: number,
  duration: number,
  fileType: number,
  uploadStatus: number
}

const getFiles = async (folderId: string): Promise<IFile[]> => {
  const response = await http.get(`/files/${folderId}`).then((i) => i.data.files);
  return response;
};

export const useFiles = (folderId: string | null) => {
  return useQuery<IFile[], Error>({
    queryKey: ['file', folderId],
    queryFn: () => getFiles(folderId!),
    enabled: folderId !== null,
    initialData: []
  });
};