import { EditPlaylistFiles } from "@/contracts/Playlist";
import { useCopyPaste } from "@/provider/CopyPasteProvider";
import { usePlaylistTabs } from "@/provider/PlaylistTabsProvider";
import { useEditPlaylistFiles } from "@/service/api/playlist/mutate/editPlaylistFiles";
import { usePlaylistList } from "@/service/api/playlist/query/getPlaylistList";
import { useDroppable } from "@dnd-kit/core";
import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { MediaFilesListContextMenu } from "./components";
import { MediaFiles } from "./components/MediaFile";

interface MediaFilesListProps {
  selectedIndexes: number[]
  onSelectAllFiles(filesIds: number[]): void
  onSelectFile(index: number): void
}

export const MediaFilesList = forwardRef<HTMLDivElement, MediaFilesListProps>(({ selectedIndexes, onSelectAllFiles, onSelectFile }, ref) => {
  const { t } = useTranslation()

  const { copyData, copy } = useCopyPaste()
  const { selectedTab } = usePlaylistTabs();

  const [searchParams] = useSearchParams();
  const folderId = searchParams.get("folderId");

  const { mutate } = useEditPlaylistFiles();
  const { data } = usePlaylistList(selectedTab ? selectedTab.playlistId.toString() : folderId)

  const emptyList = !data || !data.hasOwnProperty("mediaFiles")

  const { setNodeRef } = useDroppable({ id: "MediaFilesDroppable", data });

  function handleSelectAllFiles() {
    const countMediaFiles = data?.mediaFiles?.length ?? 0;

    if (countMediaFiles > 0) {
      onSelectAllFiles(Array.from({ length: countMediaFiles }, (_, index) => index))
    }
  }

  function handlePasteFile() {
    if (!data || !copyData) return;

    const { playlistId, playlistType, title } = data;
    const fileIds = copyData.value;

    const existingFiles = data.mediaFiles ?? [];

    if (existingFiles.length == 0) {
      mutate({ playlistId, title, playlistType: playlistType.toString() as EditPlaylistFiles["playlistType"], files: fileIds });
      return;
    }

    const existingFileIds = new Set(existingFiles.map((file) => file.fileId));
    const newFileIds = fileIds.filter((id) => !existingFileIds.has(id));

    if (newFileIds.length === 0 || newFileIds[0] === 0) { return toast.error("Erro!", { description: t("Duplicate-Files-Error") }); }

    newFileIds.forEach((id) => existingFileIds.add(id));

    mutate({ playlistId, title, playlistType: playlistType.toString() as EditPlaylistFiles["playlistType"], files: Array.from(existingFileIds), });
  }

  function handleCutFiles(uniqueIndex: number) {
    if (!data?.mediaFiles) return;

    const { playlistId, playlistType, title, mediaFiles } = data;

    const selectedSet = new Set(selectedIndexes);
    selectedSet.add(uniqueIndex);

    const updatedFiles: Array<number> = [];
    const indexesCutFiles: Array<number> = [];

    mediaFiles.forEach((file, index) => {
      const fileId = file.fileId;
      if (selectedSet.has(index)) { indexesCutFiles.push(fileId); }
      else { updatedFiles.push(fileId); }
    });

    mutate({
      playlistId,
      title,
      playlistType: playlistType.toString() as EditPlaylistFiles["playlistType"],
      files: updatedFiles,
    });

    copy({ command: "CopyFile", value: indexesCutFiles });
  }

  function handleCopyFile(fileId: number) {
    const selectedSet = new Set(selectedIndexes);
    selectedSet.add(fileId);

    copy({ command: "CopyFile", value: Array.from(selectedSet) })
  }

  return (
    <MediaFilesListContextMenu
      onSelectAllFiles={handleSelectAllFiles}
      onPasteFile={handlePasteFile}
    >
      <div className="h-screen" ref={setNodeRef} >
        {
          emptyList
            ?
            <div className="flex items-center justify-center p-5 align-middle">
              <span className="text-xs font-medium">
                Esta lista está vazia.
              </span>
            </div>
            :
            <div className="grid p-3 grid-flow-col gap-1.5 w-fit overflow-auto select-none grid-rows-18" ref={ref}>
              {data.mediaFiles.map((mediaFile, index) => {
                const { fileId } = mediaFile;
                return (
                  <MediaFiles
                    key={fileId}
                    mediaFile={mediaFile}
                    selectedFile={selectedIndexes.includes(index)}
                    onSelectFile={() => onSelectFile(index)}
                    onSelectAllFiles={handleSelectAllFiles}
                    onCutFiles={() => handleCutFiles(index)}
                    onCopyFile={() => handleCopyFile(fileId)}
                    onPasteFile={handlePasteFile}
                  />
                );
              })}
            </div>
        }
      </div>
    </MediaFilesListContextMenu>
  )
})