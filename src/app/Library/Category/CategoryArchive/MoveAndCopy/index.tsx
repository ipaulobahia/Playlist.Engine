import { PlaylistTabsProvider } from "@/provider/PlaylistTabsProvider";
import { useEditPlaylistFiles } from "@/service/api/playlist/mutate/editPlaylistFiles";
import { usePlaylistList } from "@/service/api/playlist/mutate/postPlaylistList";
import { MediaFiles } from "@/service/api/playlist/query/getPlaylistList";
import { Box, boxesIntersect, useSelectionContainer } from '@air/react-drag-to-select';
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { MediaFilesList, NavigationTabs, RightSidebar } from "./components";

export const MoveAndCopy = () => {
  const [searchParams] = useSearchParams();
  const folderId = searchParams.get("folderId");

  const selectableItems = useRef<Box[]>([]);
  const mediaFilesListRef = useRef<HTMLDivElement | null>(null);
  const isSelecting = useRef(false);

  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);
  const [enableDragSelection, setEnableDragSelection] = useState<boolean>(true)

  const { mutate } = useEditPlaylistFiles();
  const { mutateAsync } = usePlaylistList()

  const { DragSelection } = useSelectionContainer({
    eventsElement: document.getElementById("root"),
    selectionProps: {
      style: {
        border: '1.5px solid #3399FF',
        borderRadius: 4,
        backgroundColor: 'rgba(51, 153, 255, 0.3)',
        opacity: 0.6,
      },
    },
    onSelectionChange: (box) => {
      const scrollAwareBox: Box = {
        ...box,
        top: box.top + window.scrollY,
        left: box.left + window.scrollX,
      };

      const indexesToSelect: number[] = [];
      selectableItems.current.forEach((item, index) => {
        if (boxesIntersect(scrollAwareBox, item)) {
          indexesToSelect.push(index);
        }
      });

      setSelectedIndexes(indexesToSelect);
    },
    onSelectionStart: () => {
      isSelecting.current = true;
    },
    onSelectionEnd: () => {
      setTimeout(() => {
        isSelecting.current = false;
      }, 50);
    },
    isEnabled: enableDragSelection,
  });

  async function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const activeIdSplit = active.id.toString().split('-')
      const draggableType = activeIdSplit[0] as 'MediaFilesDraggable' | 'MediaFolderDraggable'

      if (draggableType == "MediaFolderDraggable") {
        const draggedFolder = active.data.current;
        const targetData = over.data.current;

        if (!draggedFolder || !targetData) return;

        if (draggedFolder.playlistId === targetData.playlistId) return;

        const folder = await mutateAsync(draggedFolder.playlistId);

        if (!folder?.mediaFiles) return;

        const { playlistId, playlistType, title, mediaFiles = [] } = targetData;

        const updatedFiles = Array.from(new Set([...mediaFiles, ...folder.mediaFiles].map((file: MediaFiles) => file.fileId)));

        if (updatedFiles.length !== mediaFiles.length) {
          mutate({ playlistId, title, playlistType, files: updatedFiles });
        }
      }

      else if (draggableType == "MediaFilesDraggable") {
        const draggedFile = active.data.current;
        const targetData = over.data.current;

        if (!draggedFile || !targetData) return;

        const fileAlreadyExists = targetData.mediaFiles.some((file: MediaFiles) => file.fileId === draggedFile.fileId);

        if (fileAlreadyExists) {
          return toast.error("Erro!", { description: "Você não pode adicionar arquivos duplicados à lista." });
        }

        const { playlistId, playlistType, title } = targetData;
        const updatedFiles = [...targetData.mediaFiles.map((file: MediaFiles) => file.fileId), draggedFile.fileId];
        mutate({ playlistId, title, playlistType, files: updatedFiles });
      }
    }
    setEnableDragSelection(true)
  }

  function handleDragStart() {
    setEnableDragSelection(false)
  }

  useEffect(() => {
    if (mediaFilesListRef.current) {
      selectableItems.current = [];
      Array.from(mediaFilesListRef.current.children).forEach((item) => {
        const { left, top, width, height } = item.getBoundingClientRect();
        selectableItems.current.push({ left, top, width, height });
      });
    }
  }, [selectedIndexes]);

  function handlerClearIndexes() {
    if (isSelecting.current) return;
    setSelectedIndexes([])
  }

  return (
    <PlaylistTabsProvider folderId={folderId}>
      <DndContext
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}>
        <div onClick={handlerClearIndexes} className="flex h-screen flex-col fixed w-full pr-[24vw]">
          <NavigationTabs />
          <>
            <DragSelection />
            <MediaFilesList ref={mediaFilesListRef} selectedIndexes={selectedIndexes} setSelectedIndexes={setSelectedIndexes} />
          </>
        </div>
        <RightSidebar />
      </DndContext>
    </PlaylistTabsProvider>
  );
};