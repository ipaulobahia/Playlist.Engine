import { DialogCreateList } from "@/components"
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { CategoryEnum, translateToPT } from "@/utils"
import { Plus } from "lucide-react"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"

interface MainListContextContentProps {
  children: React.ReactNode
}

export const MainListContextContent = ({ children }: MainListContextContentProps) => {
  const [searchParams] = useSearchParams();
  const categoryType = searchParams.get("categoryType");

  const [open, setOpen] = useState<boolean>(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <ContextMenu>
        <ContextMenuTrigger>
          {children}
        </ContextMenuTrigger>
        <ContextMenuContent>
          <DialogTrigger className="w-full">
            <ContextMenuItem className="flex flex-row items-center text-xs gap-x-1">
              <Plus size={12} />
              <span>
                {translateToPT(categoryType as CategoryEnum)}
              </span>
            </ContextMenuItem>
          </DialogTrigger>
        </ContextMenuContent>
      </ContextMenu>
      <DialogCreateList open={open} setOpen={setOpen} categoryValue={categoryType!} />
    </Dialog>
  )
}