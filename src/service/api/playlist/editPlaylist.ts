import { http } from "@/config";
import { EditPlaylist } from "@/contracts/Playlist";
import { CategoryIndexList, translateToEN } from "@/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

async function editPlaylist(payload: EditPlaylist) {
  const response = await http.post('/playlist', payload).then((i) => i.data);
  return response
}

export function useEditPlaylist() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editPlaylist,
    onSuccess: (_, { playlistType }) => {
      const category = translateToEN(CategoryIndexList[(parseInt(playlistType)) - 1])
      queryClient.invalidateQueries({ queryKey: ['playlist', category] })
      toast.success('Sucesso!', { description: 'Lista editada com sucesso!' })
    },
    onError: (error: AxiosError) => {
      const { status, response } = error

      if (status == 409) {
        toast.error('Ocorreu um erro!', { description: response?.data as string })
        return
      }

      toast.error('Ocorreu um erro!', { description: 'Erro ao editar uma nova lista' })
      console.error('Erro ao editar playlist:', error);
    },
  });
}