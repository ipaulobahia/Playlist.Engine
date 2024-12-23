import { Card } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"

interface IActionCardProps {
  title: string
  MainIcon: LucideIcon
  SubIcon: LucideIcon
}

export const ActionCard = ({ title, MainIcon, SubIcon }: IActionCardProps) => {
  return (
    <Card className="flex flex-col gap-3 p-3 bg-transparent rounded cursor-pointer dark:hover:bg-muted/50 hover:bg-muted">
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