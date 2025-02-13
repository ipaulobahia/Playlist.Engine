import { Button } from "@/components/ui/button";
import { usePlaylistList } from "@/service/api/playlist/getPlaylistList";
import { ChevronLeft } from "lucide-react";
import { MediaFiles } from "./components";

interface FilesSidebarContentProps {
  list: { playlistType: number; playlistId: number; title: string; }
  onBack(): void
}

export const FilesSidebarContent = ({ list, onBack }: FilesSidebarContentProps) => {
  const { title, playlistId } = list

  const { data } = usePlaylistList(playlistId.toString())

  const emptyList = !data || !data.hasOwnProperty("mediaFiles")

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
        emptyList
          ?
          <div className="flex items-center justify-center p-5 align-middle">
            <span className="text-xs font-medium">
              Esta lista está vazia.
            </span>
          </div>
          :
          data.mediaFiles.map((mediaFile) => {
            const { fileId } = mediaFile
            return <MediaFiles key={fileId} mediaFile={mediaFile} />
          })
      }
    </div>
  )
}