import { ScrollList } from "@/components/ui/scroll-list";
import { useInfoSidebar } from "@/hooks/use-sidebar";
import { useFiles } from "@/service/api/files/getFiles";
import { File } from "lucide-react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Toolbar } from "./components";

export const ArchiveList = () => {
  const { selectRow } = useInfoSidebar()

  const [searchParams, setSearchParams] = useSearchParams();
  const folderId = searchParams.get("folderId");

  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const { data } = useFiles(folderId)

  function handleSelectedFile(newFile: File) {
    const fileId = newFile.fileId
    const isSameRow = newFile.fileId === selectedFile?.fileId
    setSelectedFile(isSameRow ? null : newFile)
    setSearchParams((params) => {
      params.set("fileId", fileId)
      return params
    })
    selectRow(newFile)
  }

  // const SetIconFile = ({ fileType }: { fileType: string }) => {
  //   switch (fileType) {
  //     case ".mp3":
  //       return <img src={MP3SVG} className="size-4" />
  //     case ".mp4":
  //       return <img src={MP4SVG} className="size-4" />
  //     case ".txt":
  //       return <img src={TXTSVG} className="size-4" />
  //     default:
  //       return <File size={16} />
  //   }
  // }

  return (
    <section>
      <Toolbar />
      {
        data && data.files.length <= 0
          ?
          <div className="flex items-center justify-center p-5 align-middle">
            <span className="font-medium">
              Sem resultados
            </span>
          </div>
          :
          <ScrollList>
            {
              data?.files.map((file) => {
                const { fileId: id, filename } = file
                return (
                  <div
                    key={id}
                    onClick={() => handleSelectedFile(file)}
                    className={`px-3 flex items-center gap-1.5 py-1.5 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground cursor-pointer rounded ${selectedFile?.fileId == id && 'bg-sidebar-accent'}`}
                  >
                    <File size={16} />
                    <span className="text-sm font-medium">
                      {filename}
                    </span>
                  </div>
                )
              })
            }
          </ScrollList>
      }
    </section>
  )
}