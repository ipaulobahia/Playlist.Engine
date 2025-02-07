import { z } from 'zod';

export const createPlaylistSchema = z.object({
  playlistId: z.number().int().default(0),
  title: z.string().min(1, "O título é obrigatório"),
  playlistType: z.enum(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], { required_error: "Informe uma categoria válida" })
})

export type CreatePlaylist = z.infer<typeof createPlaylistSchema>;