import { FolderOpen, Info, Pencil, Trash } from "lucide-react"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Link, useSearchParams } from "react-router-dom"
import { DialogDeleteList } from "../DialogDeleteList"
import { DialogEditList } from "../DialogEditList"
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuSeparator, ContextMenuTrigger } from "../ui/context-menu"
import { Dialog, DialogTrigger } from "../ui/dialog"

interface ListContextContentProps {
  children: React.ReactNode
  folderId: number
}

export const ListContextContent = ({ children, folderId }: ListContextContentProps) => {
  const { t } = useTranslation()

  const [searchParams] = useSearchParams();

  const categoryType = searchParams.get("categoryType");

  const [dialogType, setDialogType] = useState<"Edit" | "Delete">("Edit")
  const [open, setOpen] = useState(false)

  function handleDialogType(type: "Edit" | "Delete") {
    setDialogType(type)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <ContextMenu>
        <ContextMenuTrigger asChild>
          {children}
        </ContextMenuTrigger>
        <ContextMenuContent>
          <Link to={`/library/category/archive?categoryType=${categoryType}&folderId=${folderId}`}>
            <ContextMenuItem className="flex flex-row items-center gap-x-2">
              <FolderOpen size={14} />
              <span>
                {t("Open")}
              </span>
            </ContextMenuItem>
          </Link>
          <DialogTrigger onClick={() => handleDialogType("Edit")} className="w-full">
            <ContextMenuItem className="flex flex-row items-center gap-x-2">
              <Pencil size={14} />
              <span>
                {t("Edit")}
              </span>
            </ContextMenuItem>
          </DialogTrigger>
          <ContextMenuItem className="flex flex-row items-center gap-x-2">
            <Info size={14} />
            <span>
              Detalhes
            </span>
          </ContextMenuItem>
          <ContextMenuSeparator />
          <DialogTrigger onClick={() => handleDialogType("Delete")} className="w-full">
            <ContextMenuItem className="flex flex-row items-center gap-x-2 focus:bg-destructive/90">
              <Trash size={14} />
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