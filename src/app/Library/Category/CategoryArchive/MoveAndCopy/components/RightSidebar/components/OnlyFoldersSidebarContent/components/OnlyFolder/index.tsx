import { Folder } from "@/service/api/folders/getFolders";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { FolderIcon, GripVertical } from "lucide-react";

interface OnlyFolderProps {
  onClick: () => void
  folder: Folder
}

export const OnlyFolder = ({ onClick, folder }: OnlyFolderProps) => {
  const { folderName, folderId } = folder

  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id: `OnlyFolderDraggable-${folderId}`, data: folder });

  return (
    <div
      onClick={onClick}
      ref={setNodeRef}
      style={{ transform: CSS.Translate.toString(transform) }}
      className="flex flex-row items-center px-3 py-2 rounded cursor-pointer gap-x-1.5 group w-fit hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
      <div className="flex flex-row items-center gap-x-1">
        <FolderIcon size={16} />
        <span className="text-sm font-medium">
          {folderName}
        </span>
      </div>
      <div className="hidden cursor-grab group-hover:block aria-pressed:cursor-grabbing" {...attributes} {...listeners}>
        <GripVertical size={12} />
      </div>
    </div>
  )
}