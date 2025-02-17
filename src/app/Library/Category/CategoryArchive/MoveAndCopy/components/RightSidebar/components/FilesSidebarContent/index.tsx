import { Button } from "@/components/ui/button";
import { EditPlaylistFiles } from "@/contracts/Playlist";
import { usePlaylistTabs } from "@/provider/PlaylistTabsProvider";
import { useEditPlaylistFiles } from "@/service/api/playlist/editPlaylistFiles";
import { MediaFiles as MediaFilesType, usePlaylistList } from "@/service/api/playlist/getPlaylistList";
import { ChevronLeft } from "lucide-react";
import { toast } from "sonner";
import { FileContextMenu, MediaFiles } from "./components";

interface FilesSidebarContentProps {
  list: { playlistType: number; playlistId: number; title: string; }
  onBack(): void
}

export const FilesSidebarContent = ({ list, onBack }: FilesSidebarContentProps) => {
  const { selectedTab } = usePlaylistTabs();
  const { mutate } = useEditPlaylistFiles();

  const { title, playlistId } = list;

  const { data: currentPlaylist } = usePlaylistList(playlistId.toString());
  const selectedPlaylistId = selectedTab?.playlistId.toString();
  const { data: targetPlaylist } = usePlaylistList(selectedPlaylistId ?? null);

  const isEmptyPlaylist = !currentPlaylist?.mediaFiles;

  function handleAddFile(fileId: number) {
    if (!targetPlaylist) return;

    const { playlistId, playlistType, title, mediaFiles } = targetPlaylist;

    const fileExists = mediaFiles.some((file: MediaFilesType) => file.fileId === fileId);

    if (fileExists) return toast.error("Erro!", { description: "Você não pode adicionar arquivos duplicados à lista." });

    const updatedFiles = [...mediaFiles.map((file) => file.fileId), fileId];

    mutate({ playlistId, title, playlistType: playlistType.toString() as EditPlaylistFiles["playlistType"], files: updatedFiles });
  }

  return (
    <div className="flex-1 p-2">
      <div className="flex flex-row items-center mb-2 gap-x-2">
        <Button onClick={onBack} size={'icon'} variant={'ghost'} className="p-1.5 w-fit h-fit">
          <ChevronLeft size={12} />
        </Button>
        <span>
          {title}
        </span>
      </div>
      {
        isEmptyPlaylist
          ?
          <div className="flex items-center justify-center p-5 align-middle">
            <span className="text-xs font-medium">
              Esta lista está vazia.
            </span>
          </div>
          :
          currentPlaylist.mediaFiles.map((mediaFile) => {
            const { fileId } = mediaFile
            return (
              <FileContextMenu key={fileId} onAddFile={() => handleAddFile(fileId)}>
                <MediaFiles mediaFile={mediaFile} />
              </FileContextMenu>
            )
          })
      }
    </div>
  )
}