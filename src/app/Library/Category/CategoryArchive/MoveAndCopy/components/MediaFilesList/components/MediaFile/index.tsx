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
  const { title } = mediaFile

  return (
    <div className="px-3 flex w-fit items-center gap-1.5 py-1.5 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground cursor-pointer rounded">
      <File size={16} />
      <span className="text-sm font-medium">
        {title}
      </span>
    </div>
  )
}