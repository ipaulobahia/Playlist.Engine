import { Table } from "@tanstack/react-table"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { CreateAffiliatesDialog } from "./components"

interface ToolbarProps<TData> {
  table: Table<TData>
}

export const Toolbar = <TData,>({ table }: ToolbarProps<TData>) => {
  return (
    <div className="flex flex-row items-center justify-between w-full bg-re">
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
      <Dialog>
        <DialogTrigger asChild>
          <Button size={'sm'}>
            Nova afiliada
          </Button>
        </DialogTrigger>
        <CreateAffiliatesDialog />
      </Dialog>
    </div>
  )
}