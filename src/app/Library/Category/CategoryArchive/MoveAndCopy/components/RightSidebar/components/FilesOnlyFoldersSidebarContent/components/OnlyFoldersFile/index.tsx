import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { File, GripVertical } from "lucide-react";

interface OnlyFoldersFileProps {
  file: File
  selectedFileIds: number[]
  onSelectFile: () => void
}

export const OnlyFoldersFile = ({ file, onSelectFile, selectedFileIds }: OnlyFoldersFileProps) => {
  const { fileId, filename } = file

  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id: `OnlyFoldersFileDraggable-${fileId}`, data: file });

  return (
    <div
      onClick={onSelectFile}
      ref={setNodeRef}
      style={{ transform: CSS.Translate.toString(transform) }}
      className={`px-3 flex w-fit items-center gap-1.5 py-1.5 group hover:bg-sidebar-accent hover:text-sidebar-accent-foreground cursor-pointer rounded ${selectedFileIds.includes(parseInt(fileId)) && 'bg-sidebar-accent text-sidebar-accent-foreground'}`}>
      <File size={16} />
      <span className="text-sm font-medium">
        {filename}
      </span>
      {
        selectedFileIds.length <= 1 &&
        <div className="hidden cursor-grab group-hover:block aria-pressed:cursor-grabbing" {...attributes} {...listeners}>
          <GripVertical size={12} />
        </div>
      }
    </div>
  )
}