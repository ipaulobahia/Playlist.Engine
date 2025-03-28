import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu"
import { useCopyPaste } from "@/provider/CopyPasteProvider"
import { ClipboardPaste, Play, SquareMousePointer } from "lucide-react"
import { useTranslation } from "react-i18next"

interface MediaFilesListContextMenuProps {
  children: React.ReactNode
  onSelectAllFiles(): void
  onPasteFile: () => void
}

export const MediaFilesListContextMenu = ({ children, onSelectAllFiles, onPasteFile }: MediaFilesListContextMenuProps) => {
  const { t } = useTranslation()

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
            {t("Select-All")}
          </span>
        </ContextMenuItem>
        <ContextMenuItem onClick={onPasteFile} disabled={isEnablePasteBtn} className="flex flex-row items-center text-xs gap-x-1">
          <ClipboardPaste size={12} />
          <span>
            {t("Paste")}
          </span>
        </ContextMenuItem>
        <ContextMenuItem disabled className="flex flex-row items-center text-xs gap-x-1">
          <Play className="fill-accent-foreground" size={12} />
          <span>
            {t("Play")}
          </span>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}