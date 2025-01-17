import { CollapsibleContent } from "@/components/ui/collapsible"
import { Skeleton } from "@/components/ui/skeleton"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"

export const CollapsibleContentSkeleton = () => {
  return (
    <CollapsibleContent>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Arquivo</TableCell>
            <TableCell className="flex items-center justify-end"><Skeleton className="w-[150px] h-4" /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Pasta</TableCell>
            <TableCell className="flex items-center justify-end"><Skeleton className="w-[150px] h-4" /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Duração</TableCell>
            <TableCell className="flex items-center justify-end"><Skeleton className="w-[150px] h-4" /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Criado</TableCell>
            <TableCell className="flex items-center justify-end"><Skeleton className="w-[150px] h-4" /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Modificado</TableCell>
            <TableCell className="flex items-center justify-end"><Skeleton className="w-[150px] h-4" /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Título</TableCell>
            <TableCell className="flex items-center justify-end"><Skeleton className="w-[150px] h-4" /></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </CollapsibleContent>
  )
}