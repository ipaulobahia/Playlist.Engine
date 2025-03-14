import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger
} from "@/components/ui/context-menu"
import { DialogTrigger } from "@/components/ui/dialog"
import { FilePenLine, FolderOpen, FolderPen, Trash2 } from "lucide-react"
import { useTranslation } from "react-i18next"

interface FoldersContextMenuProps {
  children: React.ReactNode
  onOpenList(): void
  onEditContentList(): void
  onRemoveList(): void
  onRenameList(): void
}

export const FoldersContextMenu = ({ children, onEditContentList, onOpenList, onRemoveList, onRenameList }: FoldersContextMenuProps) => {
  const { t } = useTranslation()

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        {children}
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem onClick={onOpenList} className="flex flex-row items-center text-xs gap-x-1">
          <FolderOpen size={12} />
          <span>
            {t("Open")}
          </span>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem onClick={onEditContentList} className="flex flex-row items-center text-xs gap-x-1">
          <FolderPen size={12} />
          <span>
            {t("Edit-Content")}
          </span>
        </ContextMenuItem>
        <DialogTrigger className="w-full">
          <ContextMenuItem onClick={onRemoveList} className="flex flex-row items-center text-xs gap-x-1">
            <Trash2 size={12} />
            <span>
              Excluir
            </span>
          </ContextMenuItem>
        </DialogTrigger>
        <DialogTrigger className="w-full">
          <ContextMenuItem onClick={onRenameList} className="flex flex-row items-center text-xs gap-x-1">
            <FilePenLine size={12} />
            <span>
              Renomear
            </span>
          </ContextMenuItem>
        </DialogTrigger>
      </ContextMenuContent>
    </ContextMenu>
  )
}