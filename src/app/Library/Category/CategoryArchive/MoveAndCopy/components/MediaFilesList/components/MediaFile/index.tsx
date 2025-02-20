import { File } from "lucide-react";
import { MediaFileContextMenu } from "./components/MediaFileContextMenu";

interface MediaFileProps {
  mediaFile: {
    fileId: number;
    folderId: number;
    title: string;
    fileName: string;
    duration: string;
  }
  selectedFile: boolean
  onSelectAllFiles(): void
  onCutFiles: () => void
  onSelectFile: () => void
  onCopyFile: () => void
  onPasteFile: () => void
}

export const MediaFiles = ({ mediaFile, selectedFile, onSelectAllFiles, onCutFiles, onSelectFile, onCopyFile, onPasteFile }: MediaFileProps) => {
  const { title } = mediaFile

  return (
    <MediaFileContextMenu onSelectAllFiles={onSelectAllFiles} onCutFiles={onCutFiles} onCopyFile={onCopyFile} onPasteFile={onPasteFile}>
      <div onClick={onSelectFile} className={`px-3 flex w-fit items-center gap-1.5 py-1.5 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground cursor-pointer rounded ${selectedFile && 'bg-sidebar-accent text-sidebar-accent-foreground'}`}>
        <File size={16} />
        <span className="text-sm font-medium">
          {title}
        </span>
      </div>
    </MediaFileContextMenu>
  )
}