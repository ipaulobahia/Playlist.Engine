import { FolderOpen, Info } from "lucide-react"
import { Link } from "react-router-dom"
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "../ui/context-menu"

interface CategoryContextContentProps {
  categoryType: string
  children: React.ReactNode
}

export const CategoryContextContent = ({ children, categoryType }: CategoryContextContentProps) => {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        {children}
      </ContextMenuTrigger>
      <ContextMenuContent>
        <Link to={`/library/category?categoryType=${categoryType}`}>
          <ContextMenuItem className="flex flex-row items-center gap-x-2">
            <FolderOpen size={16} />
            <span>
              Abrir
            </span>
          </ContextMenuItem>
        </Link>
        <ContextMenuItem className="flex flex-row items-center gap-x-2">
          <Info size={16} />
          <span>
            Detalhes
          </span>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}