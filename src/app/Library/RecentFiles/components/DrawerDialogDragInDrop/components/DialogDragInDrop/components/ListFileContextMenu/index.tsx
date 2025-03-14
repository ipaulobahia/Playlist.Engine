import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { Info, Trash } from "lucide-react"
import { DialogFileDetails } from "./components"

interface ListFileContextMenuProps {
  children: React.ReactNode
  file: FileInfo
  onRemove: () => void
}

export const ListFileContextMenu = ({ children, onRemove, file }: ListFileContextMenuProps) => {
  return (
    <Dialog>
      <ContextMenu>
        <ContextMenuTrigger>
          {children}
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem onClick={onRemove} className="flex flex-row items-center text-xs gap-x-2">
            <Trash size={12} />
            <span>
              Remover
            </span>
          </ContextMenuItem>
          <DialogTrigger asChild>
            <ContextMenuItem className="flex flex-row items-center text-xs gap-x-2">
              <Info size={12} />
              <span>
                Detalhes
              </span>
            </ContextMenuItem>
          </DialogTrigger>
        </ContextMenuContent>
      </ContextMenu>
      <DialogFileDetails file={file}/>
    </Dialog>
  )
}