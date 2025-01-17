import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { TableBody, TableRow, TableCell, Table } from "@/components/ui/table"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export const CollapsibleLastestBroadcasts = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="space-y-2"

    >
      <div className="flex items-center justify-between space-x-4">
        <h4 className={`text-sm font-medium text-foreground ${!isOpen && "text-muted-foreground"}`}>
          Últimas Veiculações
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="p-0 w-9 text-foreground [&[data-state=closed]>svg]:text-muted-foreground [&[data-state=open]>svg]:rotate-180">
            <ChevronDown className="transition-transform duration-200 size-4 text-foreground shrink-0" />
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">20/12/2024</TableCell>
              <TableCell className="text-left">09:33</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">19/12/2024</TableCell>
              <TableCell className="text-left">09:08</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">01/11/2024</TableCell>
              <TableCell className="text-left">14:03</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CollapsibleContent>
    </Collapsible>
  )
}