import { http } from "@/config";
import { EditPlaylistFiles } from "@/contracts/Playlist";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

async function editPlaylistFiles(payload: EditPlaylistFiles) {
  const { playlistId } = payload

  const response = await http.post(`/playlist/${playlistId}`, payload).then((i) => i.data);
  return response
}

export function useEditPlaylistFiles() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editPlaylistFiles,
    onSuccess: (_, { playlistId }) => {
      queryClient.invalidateQueries({ queryKey: ["playlist-list", playlistId.toString()] })
      toast.success('Sucesso!', { description: 'Lista atualizada com sucesso!' })
    },
    onError: (error: AxiosError) => {
      toast.error('Ocorreu um erro!', { description: 'Erro ao atualizar a lista' })
      console.error('Erro ao atualizar a lista:', error);
    },
  });
}