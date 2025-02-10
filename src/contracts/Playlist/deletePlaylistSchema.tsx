import { z } from 'zod';

export const deletePlaylistSchema = z.object({
  playlistId: z.number().int().positive(),
})

export type DeletePlaylist = z.infer<typeof deletePlaylistSchema>;