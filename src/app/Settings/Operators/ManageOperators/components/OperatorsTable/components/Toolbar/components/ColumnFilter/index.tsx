import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table } from "@tanstack/react-table"
import { Settings2 } from "lucide-react"

interface ColumnFilterProps<TData> {
  table: Table<TData>
}

type LabelColumns = {
  [key: string]: string;
};

export const columnsMapping: LabelColumns = {
  "name": "Nome",
  "profile": "Perfil",
  "pin": "Pin",
  "status": "Status",
}

export const ColumnFilter = <TData,>({ table }: ColumnFilterProps<TData>) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="hidden h-8 ml-auto lg:flex"
        >
          <Settings2 />
          Colunas
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel className="text-xs">Alterar colunas</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {
          table
            .getAllColumns()
            .filter((column) => typeof column.accessorFn !== "undefined" && column.getCanHide())
            .map((column) => {
              return (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                  className="text-xs"
                >
                  {columnsMapping[column.id as keyof typeof columnsMapping]}
                </DropdownMenuCheckboxItem>
              )
            })
        }
      </DropdownMenuContent>
    </DropdownMenu>
  )
}