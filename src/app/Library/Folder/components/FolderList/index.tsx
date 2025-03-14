import { ScrollList } from "@/components/ui/scroll-list"
import { useFolders } from "@/service/api/folders/getFolders"
import { Folder } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { Toolbar } from "./components"

export const FolderList = () => {
  const { t } = useTranslation()

  const { data } = useFolders()

  const emptyList = !data

  return (
    <div>
      <Toolbar />
      {
        emptyList
          ?
          <div className="flex items-center justify-center p-5 align-middle">
            <span className="text-sm font-medium">
              {t('Empty-Categories')}
            </span>
          </div>
          :
          <ScrollList>
            {
              data && data.folders.map(({ folderName, folderId }) => {
                return (
                  <Link key={folderId} className="w-fit" to={`/library/folder/archive?folderId=${folderId}`}>
                    <div className="px-3 flex items-center gap-1.5 py-1.5 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground cursor-pointer rounded">
                      <Folder size={16} />
                      <span className="text-sm font-medium">
                        {folderName}
                      </span>
                    </div>
                  </Link>
                )
              })
            }
          </ScrollList>
      }
    </div>
  )
}