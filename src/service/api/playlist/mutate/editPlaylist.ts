import { http } from "@/config";
import { EditPlaylist } from "@/contracts/Playlist";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useSearchParams } from "react-router-dom";
import { toast } from "sonner";

async function editPlaylist(payload: EditPlaylist) {
  const response = await http.put(`/playlist/${payload.playlistId}`, payload).then((i) => i.data);
  return response
}

export function useEditPlaylist() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("categoryType");

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editPlaylist,
    onSuccess: () => {
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