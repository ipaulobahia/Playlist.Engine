import { Button } from "@/components/ui/button";
import { HeaderFilter } from "@/components/ui/header-filter";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

interface AffiliatesTable {
  id: number
  name: string
  ip: string
}

export const columns: ColumnDef<AffiliatesTable>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (<HeaderFilter column={column} title="Id" />),
    cell: ({ row }) => (<div>{row.getValue("id")}</div>),
  },
  {
    accessorKey: "name",
    header: ({ column }) => (<HeaderFilter column={column} title="Nome" />),
    cell: ({ row }) => (<div>{row.getValue("name")}</div>),
  },
  {
    accessorKey: "ip",
    header: ({ column }) => (<HeaderFilter column={column} title="Ip" />),
    cell: ({ row }) => (<div>{row.getValue("ip")}</div>),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: () => {
      return (
        <Button variant="ghost" className="w-8 h-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal />
        </Button>
      )
    },
  }
]