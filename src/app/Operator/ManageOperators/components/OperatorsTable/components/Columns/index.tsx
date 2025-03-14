import { HeaderFilter } from "@/components/ui/header-filter";
import { ColumnDef } from "@tanstack/react-table";
import { useTranslation } from "react-i18next";
import { DropdownMenuRowActions } from "./components";

interface OperatorTable {
  name: string
  profile: string
  pin: boolean
  status: string
}

export const columns: ColumnDef<OperatorTable>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (<HeaderFilter column={column} title={useTranslation().t("Name")} />),
    cell: ({ row }) => (<div>{row.getValue("name")}</div>),
  },
  {
    accessorKey: "profile",
    header: ({ column }) => (<HeaderFilter column={column} title={useTranslation().t("Profile")} />),
    cell: ({ row }) => (<div>{row.getValue("profile")}</div>),
  },
  {
    accessorKey: "pin",
    header: ({ column }) => (<HeaderFilter column={column} title="Pin" />),
    cell: ({ row }) => (<div>{row.getValue("pin")}</div>),
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