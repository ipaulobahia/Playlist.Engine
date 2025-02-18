import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { Folder, GripVertical } from "lucide-react";

interface MediaFolderProps {
  list: { title: string; playlistId: number; playlistType: number }
  onClick: () => void
}

export const MediaFolder = ({ list, onClick }: MediaFolderProps) => {
  const { title, playlistId } = list

  const { listeners, setNodeRef, transform } = useDraggable({ id: `MediaFolderDraggable-${playlistId}`, data: list });

  return (
    <div
      onClick={onClick}
      ref={setNodeRef}
      style={{ transform: CSS.Translate.toString(transform) }}
      className="flex flex-row items-center px-3 py-2 rounded cursor-pointer gap-x-1.5 group w-fit hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
      <div className="flex flex-row items-center gap-x-1">
        <Folder size={16} />
        <span className="text-sm font-medium">
          {title}
        </span>
      </div>
      <GripVertical  {...listeners} className="hidden border-0 cursor-grab group-hover:block ring-0" size={12} />
    </div>
  )
}