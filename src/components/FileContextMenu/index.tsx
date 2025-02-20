import { AudioLines, Info, Pencil, Play } from "lucide-react"
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
          <Pencil size={12} />
          <span>
            Editar
          </span>
        </ContextMenuItem>
        <ContextMenuItem className="flex flex-row items-center gap-x-2">
          <Play className="fill-accent-foreground" size={12} />
          <span>
            Reproduzir
          </span>
        </ContextMenuItem>
        <ContextMenuItem className="flex flex-row items-center gap-x-2">
          <AudioLines size={12} />
          <span>
            Mixagem
          </span>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem className="flex flex-row items-center gap-x-2">
          <Info size={12} />
          <span>
            Detalhes
          </span>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}