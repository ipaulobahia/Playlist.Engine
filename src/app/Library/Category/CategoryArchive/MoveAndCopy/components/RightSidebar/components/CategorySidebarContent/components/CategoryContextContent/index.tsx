import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu"
import { FolderOpen } from "lucide-react"
import { useTranslation } from "react-i18next"

interface CategoryContextContentProps {
  children: React.ReactNode
  onSelectCategory: () => void
}

export const CategoryContextContent = ({ children, onSelectCategory }: CategoryContextContentProps) => {
  const { t } = useTranslation()

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        {children}
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem onClick={onSelectCategory} className="flex flex-row items-center gap-x-2">
          <FolderOpen size={14} />
          <span>
            {t("Open")}
          </span>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}