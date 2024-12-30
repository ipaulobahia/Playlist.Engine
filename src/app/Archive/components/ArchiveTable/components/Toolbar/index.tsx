import { Table } from "@tanstack/react-table"
import { Input } from "@/components/ui/input"
import { Info, ListFilter, Search } from "lucide-react"
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ColumnFilter, DropdownMenuFilter } from "./components"
import { useInfoSidebar } from "@/hooks/use-sidebar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface ToolbarProps<TData> {
  table: Table<TData>
}

export const Toolbar = <TData,>({ table }: ToolbarProps<TData>) => {
  const { toggleSidebar, isOpen } = useInfoSidebar()
  const selectedRows = table.getSelectedRowModel().rows;
  const isSelectedRow = selectedRows.length === 0;

  return (
    <div className="flex flex-row items-center justify-between my-3">
      <div className="flex flex-row items-center gap-x-1">
        <div className="relative justify-between pl-4 border rounded dark:bg-black border-muted-foreground/25 w-fit">
          <span className="absolute inset-y-0 flex items-center left-2">
            <Search size={16} />
          </span>
          <Input
            placeholder="Pesquise"
            value={(table.getColumn("file")?.getFilterValue() as string) ?? ""}
            onChange={(event) => table.getColumn("file")?.setFilterValue(event.target.value)}
            className="h-8 border-0 dark:bg-black placeholder:text-xs"
          />
        </div>
      </div>
      <div className="flex flex-row items-center gap-x-1">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size={'sm'} variant={'outline'} className="rounded text-muted-foreground">
              <ListFilter />
              <span className="font-medium">
                Filtros
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuFilter />
        </DropdownMenu>
        <ColumnFilter table={table} />
        <TooltipProvider>
          <Tooltip delayDuration={150}>
            <TooltipTrigger>
              <Button disabled={isSelectedRow} onClick={toggleSidebar} variant={'ghost'} size={'sm'}>
                <Info />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left" className="text-black bg-white">
              {
                isSelectedRow
                  ?
                  <p className="text-xs font-semibold">
                    Selecione um item para ver os detalhes.
                  </p>
                  :
                  <p className="text-xs font-semibold">
                    {
                      isOpen
                        ?
                        "Ocultar detalhes"
                        :
                        "Mostrar detalhes"
                    }
                  </p>
              }
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div >
    </div >
  )
}