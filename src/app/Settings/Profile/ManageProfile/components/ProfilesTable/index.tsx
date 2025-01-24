import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ColumnFiltersState, flexRender, getCoreRowModel, getFacetedRowModel, getFacetedUniqueValues, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, SortingState, useReactTable, VisibilityState } from "@tanstack/react-table"
import { useState } from "react"
import { columns, Toolbar } from './components'
import { Pagination } from "@/components/ui/pagination"

export const ProfilesTable = () => {
  const [rowSelection, setRowSelection] = useState({})
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [sorting, setSorting] = useState<SortingState>([])

  const table = useReactTable({
    data: [],
    columns,
    state: { sorting, columnVisibility, rowSelection, columnFilters },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    initialState: { pagination: { pageSize: 15 } },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  })

  return (
    <div>
      <Toolbar table={table} />
      <Table className="border-0">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {
                headerGroup.headers.map((header) => {
                  return (
                    <TableHead className="px-5 font-medium bg-white border border-muted-foreground/25 border-x-0 last:border-r first:border-l dark:hover:bg-black dark:bg-black" key={header.id}>
                      {
                        header.isPlaceholder
                          ?
                          null
                          :
                          flexRender(header.column.columnDef.header, header.getContext())
                      }
                    </TableHead>
                  )
                }
                )
              }
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length
            ?
            (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  className="cursor-pointer" key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {
                    row.getVisibleCells().map((cell) => (
                      <TableCell className="px-3 py-1 text-xs font-medium " key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))
                  }
                </TableRow>
              ))
            )
            :
            (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  Sem resultados
                </TableCell>
              </TableRow>
            )
          }
        </TableBody>
      </Table>
      <Pagination table={table} />
    </div>
  )
}