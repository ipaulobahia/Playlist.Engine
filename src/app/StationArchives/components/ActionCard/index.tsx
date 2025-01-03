import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface IActionCardProps {
  title: string
  MainIcon: LucideIcon
  SubIcon: LucideIcon
  className?: string
}

export const ActionCard = ({ title, MainIcon, SubIcon, className }: IActionCardProps) => {
  return (
    <Card className={cn("flex flex-col gap-3 p-3 bg-transparent rounded cursor-pointer border-muted-foreground/25 dark:hover:bg-muted/50 hover:bg-muted", className)}>
      <div className="flex flex-row justify-between w-full">
        <div className="flex items-center justify-center rounded bg-accent-foreground size-8">
          <MainIcon className="text-white dark:text-black size-5" />
        </div>
        <SubIcon size={16} />
      </div>
      <span className="text-sm font-medium">
        {title}
      </span>
    </Card>
  )
}