import { LucideIcon } from "lucide-react";

interface FileActionCardProps {
  Icon: LucideIcon;
  title: string;
  description: string
  isSelected: boolean
  onSelectAddType: () => void
}

export const FileActionCard = ({ Icon, title, description, isSelected, onSelectAddType }: FileActionCardProps) => {
  return (
    <div onClick={onSelectAddType} className={`flex flex-col items-center justify-center flex-1 gap-3 px-3 py-10 text-center border rounded-md cursor-pointer hover:bg-muted/50 ${isSelected ? 'border-blue-500 border' : 'border-muted-foreground/25'}`}>
      <Icon size={48} />
      <div className="flex flex-col gap-0.5">
        <span className="text-sm font-semibold">{title}</span>
        <span className="text-xs font-normal text-muted-foreground" dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  )
}