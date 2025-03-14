import { HeaderFilter } from "@/components/ui/header-filter";
import { ColumnDef } from "@tanstack/react-table";
import { useTranslation } from "react-i18next";
import { DropdownMenuRowActions } from "./components";

interface CategoryArchiveTable {
  fileId: number;
  folderId: number;
  title: string;
  fileName: string;
  duration: string
}

export const columns: ColumnDef<CategoryArchiveTable>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => (<HeaderFilter column={column} title={useTranslation().t("Title")} />),
    cell: ({ row }) => {
      return (
        <span className="text-xs font-medium">{row.getValue("title")}</span>
      )
    },
  },
  {
    accessorKey: "fileName",
    header: ({ column }) => (<HeaderFilter column={column} title={useTranslation().t("File")} />),
    cell: ({ row }) => {
      return (
        <span className="text-xs font-medium">{row.getValue("fileName")}</span>
      )
    },
  },
  {
    accessorKey: "duration",
    header: ({ column }) => (<HeaderFilter column={column} title={useTranslation().t("Duration")} />),
    cell: ({ row }) => {
      return (
        <span className="text-xs font-medium">{row.getValue("duration")}</span>
      )
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
