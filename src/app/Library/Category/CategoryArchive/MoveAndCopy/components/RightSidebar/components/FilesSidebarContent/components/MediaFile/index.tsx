import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { File, GripVertical } from "lucide-react";

interface MediaFileProps {
  selectedFileIds: number[]
  mediaFile: {
    fileId: number;
    folderId: number;
    title: string;
    fileName: string;
    duration: string;
  }
  onSelectFile: () => void
}

export const MediaFiles = ({ selectedFileIds, mediaFile, onSelectFile }: MediaFileProps) => {
  const { title, fileId } = mediaFile

  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id: `MediaFilesDraggable-${fileId}`, data: mediaFile });

  return (
    <div
      onClick={onSelectFile}
      ref={setNodeRef}
      style={{ transform: CSS.Translate.toString(transform) }}
      className={`px-3 flex w-fit items-center gap-1.5 py-1.5 group hover:bg-sidebar-accent hover:text-sidebar-accent-foreground cursor-pointer rounded ${selectedFileIds.includes(fileId) && 'bg-sidebar-accent text-sidebar-accent-foreground'}`}>
      <File size={16} />
      <span className="text-sm font-medium">
        {title}
      </span>
      <div className="hidden cursor-grab group-hover:block aria-pressed:cursor-grabbing" {...attributes} {...listeners}>
        <GripVertical size={12} />
      </div>
    </div>
  )
}