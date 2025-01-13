import { http } from "@/config";
import { useQuery } from "@tanstack/react-query";

const getFiles = async (folderId: string): Promise<GetFilesResponse> => {
  const response = await http.get(`/files/${folderId}`).then((i) => i.data);
  return response;
};

export const useFiles = (folderId: string | null) => {
  return useQuery<GetFilesResponse, Error>({
    queryKey: ['files', folderId],
    queryFn: () => getFiles(folderId!),
    enabled: folderId !== null,
  });
};