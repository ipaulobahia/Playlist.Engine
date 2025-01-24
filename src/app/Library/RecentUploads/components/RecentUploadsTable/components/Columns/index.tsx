import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { HeaderFilter } from "@/components/ui/header-filter";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

export interface IRecentUploadsTable {
  id: number
  title: string
  file: string
  duration: string
  size: string
  updatedDate: string
}

export const columns: ColumnDef<IRecentUploadsTable>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => (<HeaderFilter column={column} title="Título" />),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("title")}</div>
    ),
  },
  {
    accessorKey: "file",
    header: ({ column }) => (<HeaderFilter column={column} title="Arquivo" />),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("file")}</div>
    ),
  },
  {
    accessorKey: "duration",
    header: ({ column }) => (<HeaderFilter column={column} title="Duração" />),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("duration")}</div>
    ),
  },
  {
    accessorKey: "size",
    header: ({ column }) => (<HeaderFilter column={column} title="Tamanho" />),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("size")}</div>
    ),
  },
  {
    accessorKey: "updatedDate",
    header: ({ column }) => (<HeaderFilter column={column} title="Data de Upload" />),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("updatedDate")}</div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: () => {
      return (
        <div className="flex justify-center w-full">
          <Button variant="ghost" className="w-8 h-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal />
          </Button>
        </div>
      )
    },
  }
]