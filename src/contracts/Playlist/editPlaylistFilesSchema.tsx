import { z } from 'zod';

export const editPlaylistFilesSchema = z.object({
  playlistId: z.number().int().positive(),
  title: z.string().min(1, "O título é obrigatório"),
  playlistType: z.enum(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], { required_error: "Informe uma categoria válida" }),
  files: z.array(z.number())
})

export type EditPlaylistFiles = z.infer<typeof editPlaylistFilesSchema>;