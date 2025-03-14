import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale/pt-BR"
import { useTranslation } from "react-i18next"

interface DialogFileDetailsProps {
  file: FileInfo
}

export const DialogFileDetails = ({ file }: DialogFileDetailsProps) => {
  const { t } = useTranslation()

  const { name, size, type, duration, artist, album, genre, title, year, lastModified } = file

  return (
    <DialogContent className="sm:max-w-[600px] gap-y-3">
      <DialogHeader>
        <DialogTitle>
          Detalhes do arquivo
        </DialogTitle>
        <DialogDescription>
          Visualize os detalhes do arquivo selecionado
        </DialogDescription>
      </DialogHeader>
      <div className="w-full rounded-md min-h-[220px] bg-muted" />
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">{t("Name")}</TableCell>
            <TableCell className="text-left">{name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">{t("Title")}</TableCell>
            <TableCell className="text-left">{title}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Artista</TableCell>
            <TableCell className="text-left">{artist}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Album</TableCell>
            <TableCell className="text-left">{album}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">{("Duration")}</TableCell>
            <TableCell className="text-left">{duration}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Tipo</TableCell>
            <TableCell className="text-left">{type}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Gênero</TableCell>
            <TableCell className="text-left">{genre}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">{t("Size")}</TableCell>
            <TableCell className="text-left">{size} KB</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Ano</TableCell>
            <TableCell className="text-left">{year}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Ultima Modificação</TableCell>
            <TableCell className="text-left">{format(new Date(lastModified), "Pp", { locale: ptBR })}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </DialogContent>
  )
}