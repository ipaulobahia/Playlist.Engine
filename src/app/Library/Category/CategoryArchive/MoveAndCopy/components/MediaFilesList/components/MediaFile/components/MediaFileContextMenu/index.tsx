import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuSeparator, ContextMenuTrigger } from "@/components/ui/context-menu"
import { useCopyPaste } from "@/provider/CopyPasteProvider"
import { ClipboardPaste, Copy, Play, ScissorsLineDashed, SquareMousePointer } from "lucide-react"

interface MediaFileContextMenuProps {
  children: React.ReactNode
  onSelectAllFiles: () => void
  onPasteFile: () => void
  onCutFiles: () => void
  onCopyFile: () => void
}

export const MediaFileContextMenu = ({ children, onSelectAllFiles, onCutFiles, onCopyFile, onPasteFile }: MediaFileContextMenuProps) => {
  const { isValidCopyData } = useCopyPaste()

  const isEnablePasteBtn = !isValidCopyData;

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
        <ContextMenuItem onClick={onCutFiles} className="flex flex-row items-center text-xs gap-x-1">
          <ScissorsLineDashed size={12} />
          <span>
            Recortar
          </span>
        </ContextMenuItem>
        <ContextMenuItem onClick={onCopyFile} className="flex flex-row items-center text-xs gap-x-1">
          <Copy size={12} />
          <span>
            Copiar
          </span>
        </ContextMenuItem>
        <ContextMenuItem onClick={onPasteFile} disabled={isEnablePasteBtn} className="flex flex-row items-center text-xs gap-x-1">
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