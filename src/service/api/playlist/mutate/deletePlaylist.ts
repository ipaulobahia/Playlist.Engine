import { http } from "@/config";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

async function deletePlaylist(playlistId: number) {
  const response = await http.delete(`/playlist/${playlistId}`).then((i) => i.data);
  return response
}

export function useDeletePlaylist() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletePlaylist,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['playlist'] })
      toast.success('Sucesso!', { description: 'Lista removida com sucesso!' })
    },
    onError: (error: AxiosError) => {
      toast.error('Ocorreu um erro!', { description: 'Erro ao remover a lista' })
      console.error('Erro ao remover a lista:', error);
    },
  });
}