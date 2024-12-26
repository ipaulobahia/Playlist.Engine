import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { ColumnDef } from "@tanstack/react-table"
import { Dot, FileText, MoreVertical } from "lucide-react"
import dayjs from 'dayjs'

interface File {
  name: string
  size: string
  type: string
}

export interface IAllFilesTable {
  id: string
  file: File
  folder: string
  uploadedBy: string
  lastModified: Date
}

export const columns: ColumnDef<IAllFilesTable>[] = [
  {
    accessorKey: "id",
    header: ({ table }) => (
      <div className="flex w-0 mx-0.5">
        <Checkbox
          className="border-muted-foreground"
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Selecionar todos"
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex w-0 mx-0.5">
        <Checkbox
          className="border-muted-foreground"
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "file",
    header: "Arquivo",
    cell: ({ row }) => {
      const { name, size, type }: File = row.getValue("file")

      return (
        <div className="flex flex-row items-center gap-2">
          <div className="flex items-center justify-center rounded-md bg-accent-foreground/30 dark:bg-accent size-8">
            <FileText className="text-white dark:text-white size-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium">{name}</span>
            <div className="flex flex-row items-center">
              <span className="text-xs font-normal text-muted-foreground">{size}</span>
              <Dot className="text-xs font-normal text-muted-foreground" size={12} />
              <span className="text-xs font-normal text-muted-foreground">{type}</span>
            </div>
          </div>
        </div>
      )
    },
    filterFn: (row, _, value) => {
      const file = row.original.file;
      const keys: (keyof File)[] = ['name', 'size', 'type'];

      for (const key of keys) {
        console.log(value)
        if (file[key].toLowerCase().includes(value.toLowerCase())) {
          return true;
        }
      }

      return false;
    },
  },
  {
    accessorKey: "uploadedBy",
    header: "Upload realizado por",
  },
  {
    accessorKey: "lastModified",
    header: "Ultima atualização",
    cell: ({ row }) => {
      const lastModified: Date = row.getValue("lastModified")

      return (<div className="capitalize">{dayjs(lastModified).format('DD/MM/YYYY')}</div>)
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: () => {
      return (
        <div className="flex justify-end">
          <Button variant="ghost" className="p-0 size-8">
            <span className="sr-only">Abrir menu</span>
            <MoreVertical />
          </Button>
        </div>
      )
    },
  },
]