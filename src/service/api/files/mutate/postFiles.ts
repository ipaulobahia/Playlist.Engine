import { http } from "@/config";
import { useMutation } from "@tanstack/react-query";

const getFiles = async (folderId: string): Promise<GetFilesResponse> => {
  const response = await http.get(`/files/${folderId}`).then((i) => i.data);
  return response;
};

export const useFiles = () => {
  return useMutation({
    mutationFn: getFiles,
  })
};