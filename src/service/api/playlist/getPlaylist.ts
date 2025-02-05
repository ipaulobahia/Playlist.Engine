import { http } from "@/config";
import { useQuery } from "@tanstack/react-query";

interface Playlist {
  playlistType: number;
  playlistId: number;
  title: string
}

async function getPlaylist(playlistType: string): Promise<Playlist[]> {
  const response = await http.get(`/playlist/${playlistType}`).then((i) => i.data);
  return response
}

export const usePlaylist = (playlistType: string | null) => {
  return useQuery<Playlist[], Error>({
    queryKey: ["playlist", playlistType],
    queryFn: () => getPlaylist(playlistType!),
    enabled: playlistType !== null,
  })
}