import { http } from "@/config";
import { useQuery } from "@tanstack/react-query";

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

async function getPlaylistList(playlistId: string | null): Promise<PlaylistList> {
  const response = await http.get(`/playlist/${playlistId}`).then((i) => i.data);
  return response
}

export const usePlaylistList = (playlistId: string | null) => {
  return useQuery<PlaylistList, Error>({
    queryKey: ["playlist-list", playlistId],
    queryFn: () => getPlaylistList(playlistId!),
    enabled: playlistId !== null && playlistId !== "",
  })
}