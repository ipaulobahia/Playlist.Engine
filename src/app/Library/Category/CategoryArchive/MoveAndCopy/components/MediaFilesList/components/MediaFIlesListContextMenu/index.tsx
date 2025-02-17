import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu"
import { ClipboardPaste, Play, SquareMousePointer } from "lucide-react"

interface MediaFilesListContextMenuProps {
  children: React.ReactNode
}

export const MediaFilesListContextMenu = ({ children }: MediaFilesListContextMenuProps) => {
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        {children}
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem className="flex flex-row items-center text-xs gap-x-1">
          <SquareMousePointer size={12} />
          <span>
            Selecionar tudo
          </span>
        </ContextMenuItem>
        <ContextMenuItem disabled className="flex flex-row items-center text-xs gap-x-1">
          <ClipboardPaste size={12} />
          <span>
            Colar
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