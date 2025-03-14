import { AudioLines, Info, Pencil, Play } from "lucide-react"
import { useTranslation } from "react-i18next"
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuSeparator, ContextMenuTrigger } from "../ui/context-menu"

interface FileContextMenuProps {
  children: React.ReactNode
  onOpenDetailFile: () => void
}

export const FileContextMenu = ({ children, onOpenDetailFile }: FileContextMenuProps) => {
  const { t } = useTranslation()

  return (
    <ContextMenu>
      <ContextMenuTrigger className="text-ellipsis whitespace-nowrap">
        {children}
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem className="flex flex-row items-center gap-x-2">
          <Pencil size={14} />
          <span>
            {t("Edit")}
          </span>
        </ContextMenuItem>
        <ContextMenuItem className="flex flex-row items-center gap-x-2">
          <Play className="fill-accent-foreground" size={14} />
          <span>
            {t("Play")}
          </span>
        </ContextMenuItem>
        <ContextMenuItem className="flex flex-row items-center gap-x-2">
          <AudioLines size={14} />
          <span>
            Mixagem
          </span>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem
          onClick={onOpenDetailFile}
          className="flex flex-row items-center gap-x-2">
          <Info size={14} />
          <span>
            Detalhes
          </span>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}