import { PlaylistTabsProvider } from "@/provider/PlaylistTabsProvider";
import { useEditPlaylistFiles } from "@/service/api/playlist/editPlaylistFiles";
import { MediaFiles } from "@/service/api/playlist/getPlaylistList";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { MediaFilesList, NavigationTabs, RightSidebar } from "./components";

export const MoveAndCopy = () => {
  const [searchParams] = useSearchParams();
  const folderId = searchParams.get("folderId");

  const { mutate } = useEditPlaylistFiles();

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const draggedFile = active.data.current;
      const targetData = over.data.current;
      if (!draggedFile || !targetData) return;

      const fileAlreadyExists = targetData.mediaFiles.some(
        (file: MediaFiles) => file.fileId === draggedFile.fileId
      );

      if (fileAlreadyExists) {
        return toast.error("Erro!", {
          description: "Você não pode adicionar arquivos duplicados à lista.",
        });
      }

      const { playlistId, playlistType, title } = targetData;
      const updatedFiles = [...targetData.mediaFiles.map((file: MediaFiles) => file.fileId), draggedFile.fileId];
      mutate({ playlistId, title, playlistType, files: updatedFiles });
    }
  }

  return (
    <PlaylistTabsProvider folderId={folderId}>
      <DndContext onDragEnd={handleDragEnd}>
        <div className="flex h-screen flex-col fixed w-full pr-[24vw]">
          <NavigationTabs />
          <MediaFilesList />
        </div>
        <RightSidebar />
      </DndContext>
    </PlaylistTabsProvider>
  );
};