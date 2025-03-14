import { HeaderFilter } from "@/components/ui/header-filter";
import { ColumnDef } from "@tanstack/react-table";
import { useTranslation } from "react-i18next";
import { DropdownMenuRowActions } from "./components";

interface ProfileTable {
  name: string
  description: string
  status: string
}

export const columns: ColumnDef<ProfileTable>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (<HeaderFilter column={column} title={useTranslation().t("Name")} />),
    cell: ({ row }) => (<div>{row.getValue("name")}</div>),
  },
  {
    accessorKey: "description",
    header: ({ column }) => (<HeaderFilter column={column} title={useTranslation().t("Description")} />),
    cell: ({ row }) => (<div>{row.getValue("description")}</div>),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (<HeaderFilter column={column} title={useTranslation().t("Status")} />),
    cell: ({ row }) => (<div>{row.getValue("status")}</div>),
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