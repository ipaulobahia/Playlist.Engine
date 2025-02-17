import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger
} from "@/components/ui/context-menu"
import { CirclePlus, Copy, Play } from "lucide-react"

interface FileContextMenuProps {
  children: React.ReactNode
  onAddFile: () => void
}

export const FileContextMenu = ({ children, onAddFile }: FileContextMenuProps) => {
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        {children}
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem onClick={onAddFile} className="flex flex-row items-center text-xs gap-x-1">
          <CirclePlus size={12} />
          <span>
            Adicionar
          </span>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem className="flex flex-row items-center text-xs gap-x-1">
          <Copy size={12} />
          <span>
            Copiar
          </span>
        </ContextMenuItem>
        <ContextMenuItem disabled className="flex flex-row items-center text-xs gap-x-1">
          <Play className="fill-accent-foreground" size={12} />
          <span>
            Reproduzir
          </span>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}