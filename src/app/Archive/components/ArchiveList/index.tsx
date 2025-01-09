import { Toolbar } from "./components";
import { useRef, useState } from "react";
import { File } from "lucide-react";
import { useInfoSidebar } from "@/hooks/use-sidebar";
import { IFile, useFiles } from "@/service/api/files/getFiles";
import { useSearchParams } from "react-router-dom";

export const ArchiveList = () => {
  const { selectRow } = useInfoSidebar()

  const [searchParams] = useSearchParams();
  const folderId = searchParams.get("folderId");

  const [selectedFile, setSelectedFile] = useState<IFile | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { data: files } = useFiles(folderId)

  function handleWheel(e: React.WheelEvent<HTMLDivElement>) {
    if (e.deltaY !== 0) {
      e.preventDefault();
      if (containerRef.current) {
        containerRef.current.scrollLeft += e.deltaY;
      }
    }
  };

  function handleSelectedFile(newFile: IFile) {
    const isSameRow = newFile.fileId === selectedFile?.fileId
    setSelectedFile(isSameRow ? null : newFile)
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
        files.length <= 0
          ?
          <div className="flex items-center justify-center p-5 align-middle">
            <span className="font-medium">
              Sem resultados
            </span>
          </div>
          :
          <div
            ref={containerRef}
            className="grid grid-flow-col gap-2 overflow-auto"
            style={{ gridTemplateRows: 'repeat(16, minmax(0, 1fr))' }}
            onWheel={handleWheel}
          >
            {
              files.map((file) => {
                const { fileId, filename } = file
                return (
                  <div
                    key={fileId}
                    onClick={() => handleSelectedFile(file)}
                    className={`px-3 flex items-center gap-1.5 py-1.5 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground cursor-pointer rounded ${selectedFile?.fileId == fileId && 'bg-sidebar-accent'}`}
                  >
                    <File size={16} />
                    <span className="text-sm font-medium">
                      {filename}
                    </span>
                  </div>
                )
              })
            }
          </div>
      }
    </section>
  )
}