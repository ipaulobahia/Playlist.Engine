import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { TableBody, TableRow, TableCell, Table } from "@/components/ui/table"
import { useFile } from "@/service/api/files/getFile"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { format } from "date-fns"
import { ptBR } from 'date-fns/locale/pt-BR'
import { CollapsibleContentSkeleton } from "./components"

export const CollapsibleArchive = () => {
  const [searchParams] = useSearchParams();
  const fileId = searchParams.get("fileId");

  const { data, isLoading } = useFile(fileId)

  const [isOpen, setIsOpen] = useState<boolean>(true)

  const isLoadingContente = data && !isLoading

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="space-y-2"

    >
      <div className="flex items-center justify-between space-x-4">
        <h4 className={`text-sm font-medium text-foreground ${!isOpen && "text-muted-foreground"}`}>
          Arquivo
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="p-0 w-9 text-foreground [&[data-state=closed]>svg]:text-muted-foreground [&[data-state=open]>svg]:rotate-180">
            <ChevronDown className="transition-transform duration-200 size-4 text-foreground shrink-0" />
          </Button>
        </CollapsibleTrigger>
      </div>
      {
        !isLoadingContente
          ?
          <CollapsibleContentSkeleton />
          :
          <CollapsibleContent>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Arquivo</TableCell>
                  <TableCell className="text-left">{data.filename}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Pasta</TableCell>
                  <TableCell className="text-left">Sucessos 2023</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Duração</TableCell>
                  <TableCell className="text-left">{data.duration}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Criado</TableCell>
                  <TableCell className="text-left">{format(new Date(data.createdDate), "PPP", { locale: ptBR })}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Modificado</TableCell>
                  <TableCell className="text-left">{format(new Date(data.modifiedDate), "PPP", { locale: ptBR })}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Título</TableCell>
                  <TableCell className="text-left">{data.title}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CollapsibleContent>
      }
    </Collapsible>
  )
}