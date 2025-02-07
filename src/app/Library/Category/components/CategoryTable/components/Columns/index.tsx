import { Button } from "@/components/ui/button";
import { HeaderFilter } from "@/components/ui/header-filter";
import { CategoryIndexList } from "@/utils";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

interface CategoryTable {
  playlistId: number;
  playlistType: number;
  title: string
}

export const columns: ColumnDef<CategoryTable>[] = [
  {
    accessorKey: "playlistId",
    header: ({ column }) => (<HeaderFilter column={column} title="Id" />),
    cell: ({ row }) => (<div>{row.getValue("playlistId")}</div>),
  },
  {
    accessorKey: "title",
    header: ({ column }) => (<HeaderFilter column={column} title="Título" />),
    cell: ({ row }) => (<div>{row.getValue("title")}</div>),
  },
  {
    accessorKey: "playlistType",
    header: ({ column }) => (<HeaderFilter column={column} title="Tipo" />),
    cell: ({ row }) => (<div>{CategoryIndexList[(row.getValue("playlistType") as number) - 1]}</div>),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: () => {
      return (
        <div className="text-right">
          <Button variant="ghost" className="w-8 h-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal />
          </Button>
        </div>
      )
    },
  }
]