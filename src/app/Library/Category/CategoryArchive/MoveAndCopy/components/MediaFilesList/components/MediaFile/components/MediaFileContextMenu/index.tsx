import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuSeparator, ContextMenuTrigger } from "@/components/ui/context-menu"
import { ClipboardPaste, Copy, Play, ScissorsLineDashed, SquareMousePointer } from "lucide-react"

interface MediaFileContextMenuProps {
  children: React.ReactNode
  onSelectAllFiles: () => void
}

export const MediaFileContextMenu = ({ children, onSelectAllFiles }: MediaFileContextMenuProps) => {
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        {children}
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem onClick={onSelectAllFiles} className="flex flex-row items-center text-xs gap-x-1">
          <SquareMousePointer size={12} />
          <span>
            Selecionar tudo
          </span>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem className="flex flex-row items-center text-xs gap-x-1">
          <ScissorsLineDashed size={12} />
          <span>
            Recortar
          </span>
        </ContextMenuItem>
        <ContextMenuItem className="flex flex-row items-center text-xs gap-x-1">
          <Copy size={12} />
          <span>
            Copiar
          </span>
        </ContextMenuItem>
        <ContextMenuItem disabled className="flex flex-row items-center text-xs gap-x-1">
          <ClipboardPaste size={12} />
          <span>
            Colar
          </span>
        </ContextMenuItem>
        <ContextMenuSeparator />
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