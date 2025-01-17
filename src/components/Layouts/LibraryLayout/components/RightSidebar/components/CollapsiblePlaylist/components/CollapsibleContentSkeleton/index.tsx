import { CollapsibleContent } from "@/components/ui/collapsible"
import { Skeleton } from "@/components/ui/skeleton"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"

export const CollapsibleContentSkeleton = () => {
  return (
    <CollapsibleContent>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Artista</TableCell>
            <TableCell className="flex items-center justify-end"><Skeleton className="w-[150px] h-4" /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Compositor</TableCell>
            <TableCell className="flex items-center justify-end"><Skeleton className="w-[150px] h-4" /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Album</TableCell>
            <TableCell className="flex items-center justify-end"><Skeleton className="w-[150px] h-4" /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Ano</TableCell>
            <TableCell className="flex items-center justify-end"><Skeleton className="w-[150px] h-4" /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Gênero</TableCell>
            <TableCell className="flex items-center justify-end"><Skeleton className="w-[150px] h-4" /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Ritmo</TableCell>
            <TableCell className="flex items-center justify-end"><Skeleton className="w-[150px] h-4" /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Gravadora</TableCell>
            <TableCell className="flex items-center justify-end"><Skeleton className="w-[150px] h-4" /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Idioma</TableCell>
            <TableCell className="flex items-center justify-end"><Skeleton className="w-[150px] h-4" /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Classificação</TableCell>
            <TableCell className="flex items-center justify-end"><Skeleton className="w-[150px] h-4" /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Vocal</TableCell>
            <TableCell className="flex items-center justify-end"><Skeleton className="w-[150px] h-4" /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Lista</TableCell>
            <TableCell className="flex items-center justify-end"><Skeleton className="w-[150px] h-4" /></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </CollapsibleContent>
  )
}