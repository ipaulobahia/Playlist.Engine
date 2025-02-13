import { FolderOpen, Info, Pencil, Trash } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { DialogDeleteList } from "../DialogDeleteList"
import { DialogEditList } from "../DialogEditList"
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuSeparator, ContextMenuTrigger } from "../ui/context-menu"
import { Dialog, DialogTrigger } from "../ui/dialog"

interface ListContextContentProps {
  children: React.ReactNode
  folderId: number
}

export const ListContextContent = ({ children, folderId }: ListContextContentProps) => {
  const [dialogType, setDialogType] = useState<"Edit" | "Delete">("Edit")
  const [open, setOpen] = useState(false)

  function handlerDialogType(type: "Edit" | "Delete") {
    setDialogType(type)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <ContextMenu>
        <ContextMenuTrigger asChild>
          {children}
        </ContextMenuTrigger>
        <ContextMenuContent>
          <Link to={`/library/category/archive?folderId=${folderId}`}>
            <ContextMenuItem className="flex flex-row items-center gap-x-2">
              <FolderOpen size={16} />
              <span>
                Abrir
              </span>
            </ContextMenuItem>
          </Link>
          <DialogTrigger onClick={() => handlerDialogType("Edit")} className="w-full">
            <ContextMenuItem className="flex flex-row items-center gap-x-2">
              <Pencil size={16} />
              <span>
                Editar
              </span>
            </ContextMenuItem>
          </DialogTrigger>
          <ContextMenuItem className="flex flex-row items-center gap-x-2">
            <Info size={16} />
            <span>
              Detalhes
            </span>
          </ContextMenuItem>
          <ContextMenuSeparator />
          <DialogTrigger onClick={() => handlerDialogType("Delete")} className="w-full">
            <ContextMenuItem className="flex flex-row items-center gap-x-2">
              <Trash size={16} />
              <span>
                Remover
              </span>
            </ContextMenuItem>
          </DialogTrigger>
        </ContextMenuContent>
      </ContextMenu>
      {dialogType == "Edit" && <DialogEditList folderId={folderId} open={open} setOpen={setOpen} />}
      {dialogType == "Delete" && <DialogDeleteList folderId={folderId} setOpen={setOpen} />}
    </Dialog>
  )
}