import { Table as TableUI, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ColumnFiltersState, flexRender, getCoreRowModel, getFacetedRowModel, getFacetedUniqueValues, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, Row, SortingState, Table, useReactTable, VisibilityState } from "@tanstack/react-table"
import { useState } from "react"
import { FAKE_DATA_ALL_FILES_TALBE } from "@/utils/fakeData"
import { Pagination, Toolbar } from "./components"
import { columns, IAllFilesTable } from './Columns'

export const AllFilesTable = () => {
  const [rowSelection, setRowSelection] = useState({})
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({ uploadedBy: false, folder: false, type: false, size: false })
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [sorting, setSorting] = useState<SortingState>([])

  const table = useReactTable({
    data: FAKE_DATA_ALL_FILES_TALBE,
    columns,
    state: { sorting, columnVisibility: { ...columnVisibility }, rowSelection, columnFilters },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  })

  function handlerSelectedRow(row: Row<IAllFilesTable>, table: Table<IAllFilesTable>) {
    table.toggleAllPageRowsSelected(false)
    row.toggleSelected()
  }

  return (
    <div>
      <Toolbar table={table} />
      <TableUI className="border dark:border-transparent dark:border-none border-muted-foreground/25">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead className="font-medium bg-white first:rounded-tl-md last:rounded-tr-md dark:hover:bg-black dark:border-none dark:bg-black" key={header.id}>
                    {
                      header.isPlaceholder
                        ?
                        null
                        :
                        flexRender(header.column.columnDef.header, header.getContext())
                    }
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length
            ?
            (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  onClick={() => handlerSelectedRow(row, table)}
                  key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {
                    row.getVisibleCells().map((cell) => (
                      <TableCell className="p-1 text-xs font-medium" key={cell.id}>
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
      </TableUI>
      <Pagination table={table} />
    </div >
  )
}