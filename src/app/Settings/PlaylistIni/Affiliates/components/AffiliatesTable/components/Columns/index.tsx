import { Button } from "@/components/ui/button";
import { HeaderFilter } from "@/components/ui/header-filter";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { useTranslation } from "react-i18next";

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
    header: ({ column }) => (<HeaderFilter column={column} title={useTranslation().t("Name")} />),
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

// export const useColumns = (): ColumnDef<AffiliatesTable, unknown>[] => {
//   const { t } = useTranslation();

//   const createColumn = <T extends keyof AffiliatesTable>(key: T, title: string): ColumnDef<AffiliatesTable, unknown> => ({
//     accessorKey: key,
//     header: ({ column }) => <HeaderFilter column={column} title={title} />,
//     cell: ({ row }) => row.getValue(key),
//   });

//   return [
//     createColumn("id", "Id"),
//     createColumn("name", t("Name")),
//     createColumn("ip", "Ip"),
//     {
//       id: "actions",
//       enableHiding: false,
//       cell: () => (
//         <Button variant="ghost" className="w-8 h-8 p-0">
//           <span className="sr-only">Open menu</span>
//           <MoreHorizontal />
//         </Button>
//       ),
//     },
//   ];
// };