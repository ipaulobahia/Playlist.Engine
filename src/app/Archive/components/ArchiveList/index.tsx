import { FAKE_DATA_ARCHIVE } from "@/utils/fakeData"
import { Toolbar } from "./components"
import { useRef, useState } from "react";
import { File } from "lucide-react";
import { IAllFilesTable } from "../ArchiveTable/components/Columns";
import { useInfoSidebar } from "@/hooks/use-sidebar";
import { MP3SVG, MP4SVG, TXTSVG } from "@/assets/svg"

export const ArchiveList = () => {
  const { selectRow } = useInfoSidebar()
  const [selectedFile, setSelectedFile] = useState<IAllFilesTable | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null);

  function handleWheel(e: React.WheelEvent<HTMLDivElement>) {
    if (e.deltaY !== 0) {
      e.preventDefault();
      if (containerRef.current) {
        containerRef.current.scrollLeft += e.deltaY;
      }
    }
  };

  function handleSelectedFile(newFile: IAllFilesTable) {
    const isSameRow = newFile.id === selectedFile?.id
    setSelectedFile(isSameRow ? null : newFile)
    selectRow(newFile)
  }

  const SetIconFile = ({ fileType }: { fileType: string }) => {
    switch (fileType) {
      case ".mp3":
        return <img src={MP3SVG} className="size-4" />
      case ".mp4":
        return <img src={MP4SVG} className="size-4" />
      case ".txt":
        return <img src={TXTSVG} className="size-4" />
      default:
        return <File size={16} />
    }
  }

  return (
    <section>
      <Toolbar />
      <div
        ref={containerRef}
        className="grid grid-flow-col gap-2 overflow-auto"
        style={{ gridTemplateRows: 'repeat(16, minmax(0, 1fr))' }}
        onWheel={handleWheel}
      >
        {
          FAKE_DATA_ARCHIVE.map((item) => {
            const { id, file } = item
            return (
              <div
                key={id}
                onClick={() => handleSelectedFile(item)}
                className={`px-3 flex items-center gap-1.5 py-1.5 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground cursor-pointer rounded ${selectedFile?.id == id && 'bg-sidebar-accent'}`}
              >
                <SetIconFile fileType={file.type} />
                <span className="text-sm font-medium">
                  {file.name}
                </span>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}