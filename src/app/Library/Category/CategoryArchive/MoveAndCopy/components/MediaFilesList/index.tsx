import { usePlaylistTabs } from "@/provider/PlaylistTabsProvider";
import { usePlaylistList } from "@/service/api/playlist/query/getPlaylistList";
import { useDroppable } from "@dnd-kit/core";
import { forwardRef } from "react";
import { useSearchParams } from "react-router-dom";
import { MediaFilesListContextMenu } from "./components";
import { MediaFiles } from "./components/MediaFile";

interface MediaFilesListProps {
  selectedIndexes: number[]
  setSelectedIndexes: React.Dispatch<React.SetStateAction<number[]>>
}

export const MediaFilesList = forwardRef<HTMLDivElement, MediaFilesListProps>(({ selectedIndexes, setSelectedIndexes }, ref) => {
  const { selectedTab } = usePlaylistTabs();

  const [searchParams] = useSearchParams();
  const folderId = searchParams.get("folderId");

  const { data } = usePlaylistList(selectedTab ? selectedTab.playlistId.toString() : folderId)

  const emptyList = !data || !data.hasOwnProperty("mediaFiles")

  const { setNodeRef } = useDroppable({ id: "MediaFilesDroppable", data });

  function handleSelectAllFiles() {
    const countMediaFiles = data?.mediaFiles?.length ?? 0;

    if (countMediaFiles > 0) {
      setSelectedIndexes(Array.from({ length: countMediaFiles }, (_, index) => index));
    }
  }

  return (
    <MediaFilesListContextMenu
      onSelectAllFiles={handleSelectAllFiles}
    >
      <div className="h-full p-3" ref={setNodeRef} >
        {
          emptyList
            ?
            <div className="flex items-center justify-center p-5 align-middle">
              <span className="text-xs font-medium">
                Esta lista está vazia.
              </span>
            </div>
            :
            <div className="grid grid-flow-col gap-1.5 w-fit overflow-auto select-none grid-rows-18" ref={ref}>
              {data.mediaFiles.map((mediaFile, index) => {
                const { fileId } = mediaFile;
                return (<MediaFiles key={fileId} mediaFile={mediaFile} selectedFile={selectedIndexes.includes(index)} onSelectAllFiles={handleSelectAllFiles} />);
              })}
            </div>
        }
      </div>
    </MediaFilesListContextMenu>
  )
})