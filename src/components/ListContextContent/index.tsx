import { FolderOpen, Info, Pencil, Trash } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuSeparator, ContextMenuTrigger } from "../ui/context-menu"

interface ListContextContentProps {
  children: React.ReactNode
  folderId: number
}

export const ListContextContent = ({ children, folderId }: ListContextContentProps) => {
  const [_, setOpenDrawerDialogEditList] = useState(false)

  function handlerDrawerDialogEditList() {
    setOpenDrawerDialogEditList(true)
  }

  return (
    <>
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
          <ContextMenuItem onClick={handlerDrawerDialogEditList}>
            <Pencil size={16} />
            <span>
              Editar
            </span>
          </ContextMenuItem>
          <ContextMenuItem className="flex flex-row items-center gap-x-2">
            <Info size={16} />
            <span>
              Detalhes
            </span>
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem className="flex flex-row items-center gap-x-2">
            <Trash size={16} />
            <span>
              Remover
            </span>
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
      {/* <DialogEditList folderId={folderId} open={openDrawerDialogEditList} setOpen={setOpenDrawerDialogEditList} /> */}
    </>
  )
}