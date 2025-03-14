import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { useFile } from "@/service/api/files/query/getFile"
import { format } from "date-fns"
import { ptBR } from 'date-fns/locale/pt-BR'
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { useSearchParams } from "react-router-dom"
import { CollapsibleContentSkeleton } from "./components"
import { CellTooltip } from "./components/CellTooltip"

export const CollapsibleArchive = () => {
  const { t } = useTranslation()

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
          {t("File")}
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
                  <TableCell className="font-medium">{t("File")}</TableCell>
                  <CellTooltip description={data.filename}>
                    <TableCell className="overflow-hidden text-left max-w-0 text-ellipsis whitespace-nowrap">{data.filename}</TableCell>
                  </CellTooltip>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">{t("Folder")}</TableCell>
                  <TableCell className="text-left">Sucessos 2023</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">{t("Duration")}</TableCell>
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
                  <TableCell className="font-medium">{t("Title")}</TableCell>
                  <CellTooltip description={data.title}>
                    <TableCell className="overflow-hidden text-left max-w-0 text-ellipsis whitespace-nowrap">{data.title}</TableCell>
                  </CellTooltip>
                </TableRow>
              </TableBody>
            </Table>
          </CollapsibleContent>
      }
    </Collapsible>
  )
}