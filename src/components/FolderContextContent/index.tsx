import { FolderOpen, Info } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "../ui/context-menu"

interface FolderContextContentProps {
  children: React.ReactNode
}

export const FolderContextContent = ({ children }: FolderContextContentProps) => {
  const { t } = useTranslation()
  
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        {children}
      </ContextMenuTrigger>
      <ContextMenuContent>
        <Link to={`/library/folder`}>
          <ContextMenuItem className="flex flex-row items-center gap-x-2">
            <FolderOpen size={14} />
            <span>
              {t("Open")}
            </span>
          </ContextMenuItem>
        </Link>
        <ContextMenuItem className="flex flex-row items-center gap-x-2">
          <Info size={14} />
          <span>
            Detalhes
          </span>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}