import { Button } from "@/components/ui/button";
import { Table } from "@tanstack/react-table";
import { ChevronLeftIcon, ChevronRightIcon, MoreHorizontal } from "lucide-react";

interface PaginationProps<TData> {
  table: Table<TData>;
}

export const Pagination = <TData,>({ table }: PaginationProps<TData>) => {
  const currentPagination = table.getState().pagination.pageIndex;
  const pageCount = table.getPageCount();

  const renderPageButton = (pageIndex: number) => (
    <Button
      variant={currentPagination === pageIndex ? "outline" : "ghost"}
      className="w-8 h-8 p-0"
      onClick={() => table.setPageIndex(pageIndex)}
    >
      {pageIndex + 1}
    </Button>
  );

  return (
    <div className="flex items-center justify-end px-6 py-3">
      <div className="flex items-center space-x-2">
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Página {currentPagination + 1} de {pageCount}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            className="w-8 h-8 p-0"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeftIcon className="w-4 h-4" />
          </Button>
          {
            currentPagination > 1 &&
            renderPageButton(0)
          }
          {
            currentPagination > 2 &&
            (
              <Button variant="ghost" className="w-8 h-8 p-0" disabled>
                <MoreHorizontal />
              </Button>
            )
          }
          {
            currentPagination > 0 &&
            renderPageButton(currentPagination - 1)
          }
          {renderPageButton(currentPagination)}
          {
            currentPagination < pageCount - 1 &&
            renderPageButton(currentPagination + 1)
          }
          {
            currentPagination < pageCount - 3 &&
            (
              <Button variant="ghost" className="w-8 h-8 p-0" disabled>
                <MoreHorizontal />
              </Button>
            )
          }
          {
            currentPagination < pageCount - 2 &&
            renderPageButton(pageCount - 1)
          }
          <Button
            variant="ghost"
            className="w-8 h-8 p-0"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronRightIcon className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
