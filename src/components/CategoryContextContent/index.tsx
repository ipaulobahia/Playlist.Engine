import { FolderOpen, Info, Star } from "lucide-react"
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "../ui/context-menu"
import { Link } from "react-router-dom"

interface CategoryContextContentProps {
  categoryId: number
  children: React.ReactNode
}

export const CategoryContextContent = ({ children, categoryId }: CategoryContextContentProps) => {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        {children}
      </ContextMenuTrigger>
      <ContextMenuContent>
        <Link to={`/library/category?categoryId=${categoryId}`}>
          <ContextMenuItem className="flex flex-row items-center gap-x-2">
            <FolderOpen size={16} />
            <span>
              Abrir
            </span>
          </ContextMenuItem>
        </Link>
        <ContextMenuItem className="flex flex-row items-center gap-x-2">
          <Star size={16} />
          <span>
            Favoritar
          </span>
        </ContextMenuItem>
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