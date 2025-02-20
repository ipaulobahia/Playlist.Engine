import { http } from "@/config";
import { useQuery } from "@tanstack/react-query";

export interface Folder {
  folderId: number;
  folderName: string;
  type: number;
  target: string;
  icon: string;
  hidden: boolean;
  autoClose: boolean;
  iconOnGrid: boolean;
  args: string;
  lnkFile: string;
}

export interface Folders {
  count: number;
  shared: {
    count: number;
    folders: never[];
  };
  folders: Folder[];
}

const getFolders = async (): Promise<Folders> => {
  const response = await http.get('/folders').then((i) => i.data);
  return response;
};

export const useFolders = () => {
  return useQuery<Folders, Error>({
    queryKey: ['folders'],
    queryFn: getFolders
  });
};