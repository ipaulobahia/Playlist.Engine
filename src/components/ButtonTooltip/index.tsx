import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "../ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"

interface ButtonTooltipProps extends Pick<ButtonProps, "variant" | "size" | "className"> {
  icon: React.ReactNode
  message: string
}

export const ButtonTooltip = ({ icon: Icon, message, className, size = 'icon', variant = 'ghost' }: ButtonTooltipProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span tabIndex={0}>
          <Button size={size} variant={variant} className={cn(className)}>
            {Icon}
          </Button>
        </span>
      </TooltipTrigger>
      <TooltipContent side="bottom" className="font-medium text-white bg-black dark:text-black dark:bg-white">
        <p>{message}</p>
      </TooltipContent>
    </Tooltip>
  )
}