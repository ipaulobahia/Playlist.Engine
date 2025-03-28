import { Button } from "@/components/ui/button";
import { EditPlaylistFiles } from "@/contracts/Playlist";
import { useCopyPaste } from "@/provider/CopyPasteProvider";
import { usePlaylistTabs } from "@/provider/PlaylistTabsProvider";
import { useEditPlaylistFiles } from "@/service/api/playlist/mutate/editPlaylistFiles";
import { usePlaylistList } from "@/service/api/playlist/query/getPlaylistList";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { FileContextMenu } from "./components";
import { MediaFiles } from "./components/MediaFile";

interface FilesSidebarContentProps {
  list: { playlistType: number; playlistId: number; title: string; }
  onBack(): void
}

export const FilesSidebarContent = ({ list, onBack }: FilesSidebarContentProps) => {
  const { t } = useTranslation()
  
  const { copy } = useCopyPaste()
  const { selectedTab } = usePlaylistTabs();
  const { mutate } = useEditPlaylistFiles();

  const { title, playlistId } = list;

  const { data: currentPlaylist } = usePlaylistList(playlistId.toString());
  const selectedPlaylistId = selectedTab?.playlistId.toString();
  const { data: targetPlaylist } = usePlaylistList(selectedPlaylistId ?? null);

  const [selectedFileIds, setSelectedFileIds] = useState<Array<number>>([])

  const isEmptyPlaylist = !currentPlaylist?.mediaFiles;

  function handleAddFile(fileId: number) {
    if (!targetPlaylist) return;

    const { playlistId, playlistType, title } = targetPlaylist;
    const existingFiles = targetPlaylist.mediaFiles ?? [];

    if (existingFiles.length === 0) {
      return mutate({ playlistId, title, playlistType: playlistType.toString() as EditPlaylistFiles["playlistType"], files: [fileId] });
    }

    if (existingFiles.some((file) => file.fileId === fileId)) {
      return toast.error("Erro!", { description: t("Duplicate-Files-Error") });
    }

    const updatedFiles = [...new Set([...existingFiles.map((file) => file.fileId), ...selectedFileIds, fileId]),];

    mutate({ playlistId, title, playlistType: playlistType.toString() as EditPlaylistFiles["playlistType"], files: updatedFiles });
  }

  function handleCopyFile(fileId: number) {
    copy({ command: "CopyFile", value: [fileId] })
  }

  function handleSelectFile(fileId: number) {
    setSelectedFileIds((prev) => {
      if (prev.includes(fileId)) {
        return prev.filter((item) => item !== fileId);
      }
      else { return [...prev, fileId]; }
    });
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
              <FileContextMenu
                key={fileId}
                onAddFile={() => handleAddFile(fileId)}
                onCopyFile={() => handleCopyFile(fileId)}
              >
                <MediaFiles
                  selectedFileIds={selectedFileIds}
                  onSelectFile={() => handleSelectFile(fileId)}
                  mediaFile={mediaFile}
                />
              </FileContextMenu>
            )
          })
      }
    </div>
  )
}