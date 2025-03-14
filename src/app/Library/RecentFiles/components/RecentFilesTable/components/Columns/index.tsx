import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { HeaderFilter } from "@/components/ui/header-filter";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { useTranslation } from "react-i18next";

interface RecentFilesTable {
  id: number
  title: string
  file: string
  duration: string
  size: string
  updatedDate: string
}

export const columns: ColumnDef<RecentFilesTable>[] = [
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
    header: ({ column }) => (<HeaderFilter column={column} title={useTranslation().t("Title")} />),
    cell: ({ row }) => (<div className="capitalize">{row.getValue("title")}</div>),
  },
  {
    accessorKey: "file",
    header: ({ column }) => (<HeaderFilter column={column} title={useTranslation().t("File")} />),
    cell: ({ row }) => (<div className="capitalize">{row.getValue("file")}</div>),
  },
  {
    accessorKey: "duration",
    header: ({ column }) => (<HeaderFilter column={column} title={useTranslation().t("Duration")} />),
    cell: ({ row }) => (<div className="capitalize">{row.getValue("duration")}</div>),
  },
  {
    accessorKey: "size",
    header: ({ column }) => (<HeaderFilter column={column} title={useTranslation().t("Size")} />),
    cell: ({ row }) => (<div className="capitalize">{row.getValue("size")}</div>),
  },
  {
    accessorKey: "updatedDate",
    header: ({ column }) => (<HeaderFilter column={column} title={useTranslation().t("Upload-Date")} />),
    cell: ({ row }) => (<div className="capitalize">{row.getValue("updatedDate")}</div>),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: () => {
      return (
        <div className="flex justify-end w-full">
          <Button variant="ghost" className="w-8 h-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal />
          </Button>
        </div>
      )
    },
  }
]