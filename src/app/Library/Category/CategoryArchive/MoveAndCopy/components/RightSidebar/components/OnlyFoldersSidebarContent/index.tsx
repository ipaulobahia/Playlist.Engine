import { Button } from "@/components/ui/button"
import { useFolders } from "@/service/api/folders/getFolders"
import { ChevronLeft } from "lucide-react"
import { useTranslation } from "react-i18next"
import { OnlyFolder } from "./components"

interface OnlyFoldersSidebarContentProps {
  onBack: () => void
  onSelectOnlyFolder: (folderId: number) => void
}

export const OnlyFoldersSidebarContent = ({ onBack, onSelectOnlyFolder }: OnlyFoldersSidebarContentProps) => {
  const { t } = useTranslation()

  const { data } = useFolders()

  const emptyList = !data

  return (
    <div className="flex-1 w-full gap-0 p-2">
      <div className="flex flex-row items-center mb-2 gap-x-1">
        <Button onClick={onBack} size={'icon'} variant={'ghost'} className="p-1.5 w-fit h-fit">
          <ChevronLeft size={12} />
        </Button>
        <span className="font-semibold">
          {t("Folders")}
        </span>
      </div>
      {
        emptyList
          ?
          <div className="flex items-center justify-center p-5 align-middle">
            <span className="text-sm font-medium">
              {t('Empty-Categories')}
            </span>
          </div>
          :
          data.folders.map((folder) => {
            const { folderId } = folder
            return (
              <OnlyFolder
                key={folderId}
                onClick={() => onSelectOnlyFolder(folderId)}
                folder={folder}
              />
            )
          })
      }
    </div>
  )
}