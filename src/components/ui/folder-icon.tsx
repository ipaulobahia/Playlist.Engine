import { useIcon } from "@/service/api/icons/getIcon"
import { Folder } from "lucide-react"

interface FolderIconProps {
  iconName: string
}

export const FolderIcon = ({ iconName }: FolderIconProps) => {
  const { data: icon, error } = useIcon(iconName)

  if (error) return <Folder size={16} />

  return <img src={icon} className="size-4" />
}