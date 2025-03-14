import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface CellTooltipProps {
  children: React.ReactNode
  description: string
}

export const CellTooltip = ({ children, description }: CellTooltipProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent side="left" className="font-medium text-white bg-black dark:text-black dark:bg-white">
          {description}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}