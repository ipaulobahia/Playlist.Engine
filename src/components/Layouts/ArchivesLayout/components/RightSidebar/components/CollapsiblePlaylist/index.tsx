import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { TableBody, TableRow, TableCell, Table } from "@/components/ui/table"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export const CollapsiblePlaylist = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="space-y-2"

    >
      <div className="flex items-center justify-between space-x-4">
        <h4 className={`text-sm font-medium text-foreground ${!isOpen && "text-muted-foreground"}`}>
          Playlists
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
              <TableCell className="font-medium">Artista</TableCell>
              <TableCell className="text-left">10,000 Maniacs</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Compositor</TableCell>
              <TableCell className="text-left"></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Album</TableCell>
              <TableCell className="text-left">(How You've Grown) Los Angeles, CA 10-25-1993</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Ano</TableCell>
              <TableCell className="text-left">1993</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Gênero</TableCell>
              <TableCell className="text-left">Rock & Roll</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Ritmo</TableCell>
              <TableCell className="text-left"></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Gravadora</TableCell>
              <TableCell className="text-left"></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Idioma</TableCell>
              <TableCell className="text-left">Português</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Classificação</TableCell>
              <TableCell className="text-left"></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Vocal</TableCell>
              <TableCell className="text-left"></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Lista</TableCell>
              <TableCell className="text-left">Sucessos 2023</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CollapsibleContent>
    </Collapsible>
  )
}