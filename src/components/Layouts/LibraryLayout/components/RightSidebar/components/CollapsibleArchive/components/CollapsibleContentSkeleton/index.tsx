import { CollapsibleContent } from "@/components/ui/collapsible"
import { Skeleton } from "@/components/ui/skeleton"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { useTranslation } from "react-i18next"

export const CollapsibleContentSkeleton = () => {
  const { t } = useTranslation()

  return (
    <CollapsibleContent>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">{t("File")}</TableCell>
            <TableCell className="flex items-center justify-end"><Skeleton className="w-[150px] h-4" /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">{t("Folders")}</TableCell>
            <TableCell className="flex items-center justify-end"><Skeleton className="w-[150px] h-4" /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">{t("Duration")}</TableCell>
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
            <TableCell className="font-medium">{t("Title")}</TableCell>
            <TableCell className="flex items-center justify-end"><Skeleton className="w-[150px] h-4" /></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </CollapsibleContent>
  )
}