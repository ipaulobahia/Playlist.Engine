import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu"
import { DialogTrigger } from "@/components/ui/dialog"
import { Plus } from "lucide-react"

interface MainFoldersContextMenuProps {
  children: React.ReactNode
  categoryName: string
  onCreateNewList: () => void
}

export const MainFoldersContextMenu = ({ children, categoryName, onCreateNewList }: MainFoldersContextMenuProps) => {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex-1">
        {children}
      </ContextMenuTrigger>
      <ContextMenuContent>
        <DialogTrigger className="w-full">
          <ContextMenuItem onClick={onCreateNewList} className="flex flex-row items-center text-xs gap-x-1">
            <Plus size={12} />
            <span>
              Novo {categoryName}
            </span>
          </ContextMenuItem>
        </DialogTrigger>
      </ContextMenuContent>
    </ContextMenu>
  )
}