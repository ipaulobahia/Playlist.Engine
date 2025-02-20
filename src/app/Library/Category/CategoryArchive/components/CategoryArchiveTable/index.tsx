import { Pagination } from "@/components/ui/pagination"
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Table as TableUI
} from "@/components/ui/table"
import { useInfoSidebar } from "@/hooks/use-sidebar"
import { useFiles } from "@/service/api/files/query/getFiles"
import { MediaFiles } from "@/service/api/playlist/query/getPlaylistList"
import {
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  Row,
  SortingState,
  Table,
  useReactTable,
  VisibilityState
} from "@tanstack/react-table"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { columns, Toolbar } from './components'

export const CategoryArchiveTable = () => {
  const { selectRow } = useInfoSidebar()
  const [searchParams, setSearchParams] = useSearchParams();

  const [rowSelection, setRowSelection] = useState({})
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({ uploadedBy: false, folder: false, type: false, size: false })
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [sorting, setSorting] = useState<SortingState>([])

  const folderId = searchParams.get("folderId");
  const { data: files } = useFiles(folderId)

  const table = useReactTable({
    data: files ? files.files : [],
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

  function handleSelectedRow(row: Row<MediaFiles>, table: Table<MediaFiles>) {
    const fileId = row.original.folderId
    table.toggleAllPageRowsSelected(false)
    row.toggleSelected()
    setSearchParams((params) => {
      params.set("fileId", fileId.toString())
      return params
    })
    selectRow(row.original)
  }

  return (
    <div>
      <Toolbar table={table} />
      <TableUI className="border dark:border-transparent dark:border-none border-muted-foreground/25">
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
                  onClick={() => handleSelectedRow(row, table)}
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
                  Esta lista está vazia.
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