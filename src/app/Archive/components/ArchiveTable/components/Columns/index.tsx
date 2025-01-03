import { ColumnDef } from "@tanstack/react-table"
import dayjs from 'dayjs'
import clsx from "clsx"
import { DropdownMenuRowActions, HeaderFilter } from "./components"

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
    accessorKey: "file",
    header: ({ column }) => (<HeaderFilter column={column} title="Arquivo" />),
    cell: ({ row }) => {
      const { name }: File = row.getValue("file")

      return (
        <span className="text-xs font-medium">{name}</span>
      )
    },
    filterFn: (row, _, value) => {
      const file = row.original.file;
      const keys: (keyof File)[] = ['name'];

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
    accessorKey: "size",
    header: ({ column }) => (<HeaderFilter column={column} title="Tamanho" />),
    cell: ({ row }) => {
      const { size }: File = row.getValue("file")

      return (
        <span className="text-xs font-medium">{size}</span>
      )
    },
    filterFn: (row, _, value) => {
      const file = row.original.file;
      const keys: (keyof File)[] = ['size'];

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
    accessorKey: "type",
    header: ({ column }) => (<HeaderFilter column={column} title="Tipo" />),
    cell: ({ row }) => {
      const { type }: File = row.getValue("file")

      return (
        <span className="text-xs font-medium">{type}</span>
      )
    },
    filterFn: (row, _, value) => {
      const file = row.original.file;
      const keys: (keyof File)[] = ['type'];

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
    accessorKey: "duration",
    header: ({ column }) => (<HeaderFilter column={column} title="Duração" />),
  },
  {
    accessorKey: "folder",
    header: ({ column }) => (<HeaderFilter column={column} title="Pasta" />),
  },
  {
    accessorKey: "uploadedBy",
    header: ({ column }) => (<HeaderFilter column={column} title="Upload realizado por" />),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (<HeaderFilter column={column} title="Status" />),
    cell: ({ row }) => {
      const statusMap: Record<number, { color: string; label: string }> = {
        0: { color: 'bg-red-500', label: 'Inativo' },
        1: { color: 'bg-yellow-500', label: 'Pendente' },
        2: { color: 'bg-green-500', label: 'Ativo' },
      };

      const defaultStatus = { color: 'bg-gray-500', label: 'Indefinido' };
      const status = statusMap[row.getValue("status") as number] || defaultStatus;

      return (
        <div className="flex flex-row items-center gap-1 ">
          <span className={clsx('p-1 rounded-full animate-pulse', status.color)} />
          <span className="text-xs font-medium text-muted-foreground">
            {status.label}
          </span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "lastModified",
    header: ({ column }) => (<HeaderFilter column={column} title="Ultima atualização" />),
    cell: ({ row }) => {
      const lastModified: Date = row.getValue("lastModified")

      return (<div className="capitalize">{dayjs(lastModified).format('DD/MM/YYYY')}</div>)
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return (<DropdownMenuRowActions currentStatus={status} />)
    },
  },
]