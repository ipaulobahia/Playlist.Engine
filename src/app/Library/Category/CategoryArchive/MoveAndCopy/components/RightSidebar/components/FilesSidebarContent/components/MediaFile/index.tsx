import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { File } from "lucide-react";

interface MediaFileProps {
  mediaFile: {
    fileId: number;
    folderId: number;
    title: string;
    fileName: string;
    duration: string;
  }
}

export const MediaFiles = ({ mediaFile }: MediaFileProps) => {
  const { title, fileId } = mediaFile

  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id: `MediaFilesDraggable-${fileId}`, data: mediaFile });

  return (
    <div
      ref={setNodeRef}
      style={{ transform: CSS.Translate.toString(transform) }}
      {...attributes}
      {...listeners}
      className="px-3 flex w-fit items-center gap-1.5 py-1.5 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground cursor-pointer rounded">
      <File size={16} />
      <span className="text-sm font-medium">
        {title}
      </span>
    </div>
  )
}