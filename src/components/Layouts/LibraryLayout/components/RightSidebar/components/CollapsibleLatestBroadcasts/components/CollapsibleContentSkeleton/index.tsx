import { CollapsibleContent } from "@/components/ui/collapsible"
import { Skeleton } from "@/components/ui/skeleton"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"

export const CollapsibleContentSkeleton = () => {
  return (
    <CollapsibleContent>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">20/12/2024</TableCell>
            <TableCell className="flex items-center justify-end"><Skeleton className="w-[150px] h-4" /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">19/12/2024</TableCell>
            <TableCell className="flex items-center justify-end"><Skeleton className="w-[150px] h-4" /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">01/11/2024</TableCell>
            <TableCell className="flex items-center justify-end"><Skeleton className="w-[150px] h-4" /></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </CollapsibleContent>
  )
}