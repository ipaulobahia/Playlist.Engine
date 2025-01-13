import { http } from "@/config"
import { useQuery } from "@tanstack/react-query"

interface Folder {
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

export interface IFolders {
  count: number;
  shared: {
    count: number;
    folders: never[];
  };
  folders: Folder[];
}

const getFolders = async (): Promise<IFolders> => {
  const response = await http.get('/folders').then((i) => i.data);
  return response;
};

export const useFolders = () => {
  return useQuery<IFolders, Error>({
    queryKey: ['folders'],
    queryFn: getFolders
  });
};