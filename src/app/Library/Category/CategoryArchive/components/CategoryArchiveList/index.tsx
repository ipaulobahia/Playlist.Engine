import { FileContextMenu } from "@/components";
import { ScrollList } from "@/components/ui/scroll-list";
import { useInfoSidebar } from "@/hooks/use-sidebar";
import { MediaFiles, usePlaylistList } from "@/service/api/playlist/query/getPlaylistList";
import { File } from "lucide-react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Toolbar } from "./components";

export const CategoryArchiveList = () => {
  const { selectRow, toggleSidebar } = useInfoSidebar()

  const [searchParams, setSearchParams] = useSearchParams();
  const folderId = searchParams.get("folderId");

  const [selectedFile, setSelectedFile] = useState<MediaFiles | null>(null)

  const { data } = usePlaylistList(folderId)

  function handleSelectedFile(newFile: MediaFiles) {
    const fileId = newFile.fileId
    const isSameRow = newFile.fileId === selectedFile?.fileId
    setSelectedFile(isSameRow ? null : newFile)
    setSearchParams((params) => {
      params.set("fileId", fileId.toString())
      return params
    })
    selectRow(newFile)
  }

  const emptyList = !data || !data.hasOwnProperty("mediaFiles")

  function handleOpenDetailFile(mediaFile: MediaFiles) {
    handleSelectedFile(mediaFile)
    toggleSidebar()
  }

  return (
    <section>
      <Toolbar />
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
                const { fileId, title } = mediaFile
                return (
                  <FileContextMenu
                    onOpenDetailFile={() => handleOpenDetailFile(mediaFile)}
                    key={fileId}>
                    <div onClick={() => handleSelectedFile(mediaFile)} className={`px-3 flex items-center w-fit gap-1.5 py-1.5 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground cursor-pointer rounded ${selectedFile?.fileId == fileId && 'bg-sidebar-accent'}`}>
                      <File size={16} />
                      <span className="text-sm font-medium">
                        {title}
                      </span>
                    </div>
                  </FileContextMenu>
                )
              })
            }
          </ScrollList>
      }
    </section>
  )
}