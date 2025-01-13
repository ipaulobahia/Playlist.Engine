import { ColumnDef } from "@tanstack/react-table";
import { DropdownMenuRowActions } from "./components";
import { HeaderFilter } from "@/components/ui/header-filter";

interface Profile {
  name: string
  description: string
  status: string
}

export const columns: ColumnDef<Profile>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (<HeaderFilter column={column} title="Nome" />),
    cell: ({ row }) => (
      <div>{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "description",
    header: ({ column }) => (<HeaderFilter column={column} title="Descrição" />),
    cell: ({ row }) => (
      <div>{row.getValue("description")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (<HeaderFilter column={column} title="Status" />),
    cell: ({ row }) => (
      <div>{row.getValue("status")}</div>
    ),
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