import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger
} from "@/components/ui/context-menu"
import { DialogTrigger } from "@/components/ui/dialog"

interface FoldersContextMenuProps {
  children: React.ReactNode
  onOpenList(): void
  onEditContentList(): void
  onRemoveList(): void
  onRenameList(): void
}

export const FoldersContextMenu = ({ children, onEditContentList, onOpenList, onRemoveList, onRenameList }: FoldersContextMenuProps) => {
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        {children}
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem onClick={onOpenList} className="text-xs"  >
          Abrir
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem onClick={onEditContentList} className="text-xs">
          Editar conteúdo
        </ContextMenuItem>
        <DialogTrigger className="w-full">
          <ContextMenuItem onClick={onRemoveList} className="text-xs">
            Excluir
          </ContextMenuItem>
        </DialogTrigger>
        <DialogTrigger className="w-full">
          <ContextMenuItem onClick={onRenameList} className="text-xs">
            Renomear
          </ContextMenuItem>
        </DialogTrigger>
      </ContextMenuContent>
    </ContextMenu>
  )
}