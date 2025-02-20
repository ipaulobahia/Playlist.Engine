import { Button } from "@/components/ui/button"
import { useFiles } from "@/service/api/files/query/getFiles"
import { ChevronLeft } from "lucide-react"
import { useState } from "react"
import { OnlyFoldersFile } from "./components"

interface FilesOnlyFoldersSidebarContentProps {
  onBack: () => void
  folderId: number
}

export const FilesOnlyFoldersSidebarContent = ({ onBack, folderId }: FilesOnlyFoldersSidebarContentProps) => {
  const { data } = useFiles(folderId.toString())

  const isEmptyFolder = Boolean(data?.files?.length === 0);

  const [selectedFileIds, setSelectedFileIds] = useState<Array<number>>([])


  function handleSelectFile(fileId: number) {
    setSelectedFileIds((prev) => {
      if (prev.includes(fileId)) {
        return prev.filter((item) => item !== fileId);
      }
      else { return [...prev, fileId]; }
    });
  }

  return (
    <div className="flex-1 p-2">
      <div className="flex flex-row items-center mb-2 gap-x-2">
        <Button onClick={onBack} size={'icon'} variant={'ghost'} className="p-1.5 w-fit h-fit">
          <ChevronLeft size={12} />
        </Button>
        <span>
          {data?.folder.folderName}
        </span>
      </div>
      {
        isEmptyFolder
          ?
          <div className="flex items-center justify-center p-5 align-middle">
            <span className="text-xs font-medium">
              Esta pasta está vazia.
            </span>
          </div>
          :
          data?.files.map((file) => {
            const { fileId } = file

            return (
              <OnlyFoldersFile
                key={fileId}
                selectedFileIds={selectedFileIds}
                onSelectFile={() => handleSelectFile(parseInt(fileId))}
                file={file}
              />
            )
          })
      }
    </div>
  )
}