import { ScrollList } from "@/components/ui/scroll-list";
import { usePlaylistTabs } from "@/provider/PlaylistTabsProvider";
import { usePlaylistList } from "@/service/api/playlist/getPlaylistList";
import { useDroppable } from "@dnd-kit/core";
import { useSearchParams } from "react-router-dom";
import { MediaFiles } from "./components/MediaFile";

export const MediaFilesList = () => {
  const { selectedTab } = usePlaylistTabs();

  const [searchParams] = useSearchParams();
  const folderId = searchParams.get("folderId");

  const { data } = usePlaylistList(selectedTab ? selectedTab.playlistId.toString() : folderId)

  const emptyList = !data || !data.hasOwnProperty("mediaFiles")

  const { setNodeRef } = useDroppable({ id: "MediaFilesDroppable", data });

  return (
    <div className="p-3" ref={setNodeRef} >
      {
        emptyList
          ?
          <div className="flex items-center justify-center p-5 align-middle">
            <span className="text-xs font-medium">
              Esta lista está vazia.
            </span>
          </div>
          :
          <ScrollList>
            {
              data.mediaFiles.map((mediaFile) => {
                const { fileId } = mediaFile
                return <MediaFiles key={fileId} mediaFile={mediaFile} />
              })
            }
          </ScrollList>
      }
    </div >
  )
}