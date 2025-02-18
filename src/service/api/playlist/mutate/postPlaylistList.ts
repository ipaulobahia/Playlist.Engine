import { http } from "@/config";
import { useMutation } from "@tanstack/react-query";

interface PlaylistList {
  playlistType: number;
  playlistId: number;
  title: string
  mediaFiles: MediaFiles[]
}

export interface MediaFiles {
  fileId: number;
  folderId: number;
  title: string;
  fileName: string;
  duration: string
}

async function postPlaylistList(playlistId: string): Promise<PlaylistList> {
  const response = await http.get(`/playlist/${playlistId}`).then((i) => i.data);
  return response
}

export const usePlaylistList = () => {
  return useMutation({
    mutationFn: postPlaylistList,
  })
}