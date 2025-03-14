import { CopyPasteProvider } from "@/provider/CopyPasteProvider";
import { PlaylistTabsProvider } from "@/provider/PlaylistTabsProvider";
import { useFiles } from "@/service/api/files/mutate/postFiles";
import { useEditPlaylistFiles } from "@/service/api/playlist/mutate/editPlaylistFiles";
import { usePlaylistList } from "@/service/api/playlist/mutate/postPlaylistList";
import { MediaFiles } from "@/service/api/playlist/query/getPlaylistList";
import { Box, boxesIntersect, useSelectionContainer } from '@air/react-drag-to-select';
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { MediaFilesList, NavigationTabs, RightSidebar } from "./components";

export const MoveAndCopy = () => {
  const { t } = useTranslation()

  const [searchParams] = useSearchParams();
  const folderId = searchParams.get("folderId");

  const selectableItems = useRef<Box[]>([]);
  const mediaFilesListRef = useRef<HTMLDivElement | null>(null);
  const isSelecting = useRef(false);

  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);
  const [enableDragSelection, setEnableDragSelection] = useState<boolean>(true)

  const { mutate } = useEditPlaylistFiles();
  const { mutateAsync } = usePlaylistList()
  const { mutateAsync: mutateAsyncFiles } = useFiles()

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
      requestAnimationFrame(() => {
        isSelecting.current = false;
      });
    },
    isEnabled: enableDragSelection,
  });

  async function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const activeIdSplit = active.id.toString().split('-')
      const draggableType = activeIdSplit[0]

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

      else if (draggableType == "OnlyFolderDraggable") {
        const draggedFolder = active.data.current;
        const targetData = over.data.current;

        if (!draggedFolder || !targetData) return;

        const folder = await mutateAsyncFiles(draggedFolder.folderId);

        if (folder.files.length === 0) return;

        const { playlistId, playlistType, title, mediaFiles = [] } = targetData;

        const updatedFiles = Array.from(new Set([...mediaFiles, ...folder.files].map((file: MediaFiles) => file.fileId)));

        if (updatedFiles.length !== mediaFiles.length) {
          mutate({ playlistId, title, playlistType, files: updatedFiles });
        }
      }

      else if (draggableType == "MediaFilesDraggable" || draggableType == "OnlyFoldersFileDraggable") {
        const draggedFile = active.data.current;
        const targetData = over.data.current;

        if (!draggedFile || !targetData) return;

        const { playlistId, playlistType, title } = targetData;
        const existingFiles = targetData.mediaFiles ?? [];

        if (existingFiles.length === 0) {
          mutate({ playlistId, title, playlistType, files: [draggedFile.fileId] });
          return;
        }

        if (existingFiles.some((file: MediaFiles) => file.fileId == draggedFile.fileId)) {
          return toast.error("Erro!", { description: t("Duplicate-Files-Error") });
        }

        const updatedFiles = [...existingFiles.map((file: MediaFiles) => file.fileId), draggedFile.fileId];

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

  function handleClearIndexes() {
    if (isSelecting.current) return;
    setSelectedIndexes([])
  }

  function handleSelectAllFiles(allIndexes: number[]) {
    isSelecting.current = true;
    setSelectedIndexes(allIndexes);

    requestAnimationFrame(() => {
      isSelecting.current = false;
    });
  }

  function handleSelectFile(index: number) {
    isSelecting.current = true;

    setSelectedIndexes((prev) => {
      if (prev.includes(index)) {
        return prev.filter((item) => item !== index);
      }
      else { return [...prev, index]; }
    });

    requestAnimationFrame(() => {
      isSelecting.current = false;
    });
  }

  return (
    <PlaylistTabsProvider folderId={folderId}>
      <DndContext
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}>
        <CopyPasteProvider>
          <div onClick={handleClearIndexes} className="flex h-screen flex-col fixed w-full pr-[24vw]">
            <NavigationTabs />
            <>
              <DragSelection />
              <MediaFilesList ref={mediaFilesListRef} selectedIndexes={selectedIndexes} onSelectAllFiles={handleSelectAllFiles} onSelectFile={handleSelectFile} />
            </>
          </div>
          <RightSidebar />
        </CopyPasteProvider>
      </DndContext>
    </PlaylistTabsProvider>
  );
};