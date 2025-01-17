import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { TableBody, TableRow, TableCell, Table } from "@/components/ui/table"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export const CollapsibleMoreData = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="space-y-2"

    >
      <div className="flex items-center justify-between space-x-4">
        <h4 className={`text-sm font-medium text-foreground ${!isOpen && "text-muted-foreground"}`}>
          Mais dados
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
              <TableCell className="font-medium">ISRC</TableCell>
              <TableCell className="text-left"></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Comentário</TableCell>
              <TableCell className="text-left"></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">BPM</TableCell>
              <TableCell className="text-left"></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Faixa</TableCell>
              <TableCell className="text-left"></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Url do artista</TableCell>
              <TableCell className="text-left"></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Url para compra</TableCell>
              <TableCell className="text-left"></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Ringtone</TableCell>
              <TableCell className="text-left"></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Foto</TableCell>
              <TableCell className="text-left"></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CollapsibleContent>
    </Collapsible>
  )
}