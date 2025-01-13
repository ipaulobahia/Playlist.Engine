import { http } from "@/config";
import { useQuery } from "@tanstack/react-query";

const getFile = async (fileId: string): Promise<GetFileResponse> => {
  const response = await http.get(`/file/${fileId}`).then((i) => i.data);
  return response;
};

export const useFile = (fileId: string | null) => {
  console.log("FILE ID =>",fileId)
  return useQuery<GetFileResponse, Error>({
    queryKey: ['file', fileId],
    queryFn: () => getFile(fileId!),
    enabled: fileId !== null,
  });
};