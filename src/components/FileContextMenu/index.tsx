import { AudioLines, Info, Pencil, PlayCircle } from "lucide-react"
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuSeparator, ContextMenuTrigger } from "../ui/context-menu"

interface FileContextMenuProps {
  children: React.ReactNode
}

export const FileContextMenu = ({ children }: FileContextMenuProps) => {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        {children}
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem className="flex flex-row items-center gap-x-2">
          <Pencil size={16} />
          <span>
            Editar
          </span>
        </ContextMenuItem>
        <ContextMenuItem className="flex flex-row items-center gap-x-2">
          <PlayCircle size={16} />
          <span>
            Escutar
          </span>
        </ContextMenuItem>
        <ContextMenuItem className="flex flex-row items-center gap-x-2">
          <AudioLines size={16} />
          <span>
            Mixagem
          </span>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem className="flex flex-row items-center gap-x-2">
          <Info size={16} />
          <span>
            Detalhes
          </span>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}