import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger
} from "@/components/ui/context-menu"
import { Copy, Play, Plus } from "lucide-react"
import { useTranslation } from "react-i18next"

interface FileContextMenuProps {
  children: React.ReactNode
  onAddFile: () => void
  onCopyFile: () => void
}

export const FileContextMenu = ({ children, onAddFile, onCopyFile }: FileContextMenuProps) => {
  const { t } = useTranslation()

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        {children}
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem onClick={onAddFile} className="flex flex-row items-center text-xs gap-x-1">
          <Plus size={12} />
          <span>
            {t("To-Add")}
          </span>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem onClick={onCopyFile} className="flex flex-row items-center text-xs gap-x-1">
          <Copy size={12} />
          <span>
            {t("Copy")}
          </span>
        </ContextMenuItem>
        <ContextMenuItem disabled className="flex flex-row items-center text-xs gap-x-1">
          <Play className="fill-accent-foreground" size={12} />
          <span>
            {t("Play")}
          </span>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}