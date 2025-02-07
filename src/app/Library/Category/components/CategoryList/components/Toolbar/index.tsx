import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { ListFilter, Search } from "lucide-react"
import { DropdownMenuContentFilter } from "./components"

export const Toolbar = () => {
  return (
    <div className="flex flex-row items-center justify-between my-3">
      <div className="flex flex-row items-center gap-x-1">
        <div className="relative justify-between pl-4 border rounded dark:bg-black border-muted-foreground/25 w-fit">
          <span className="absolute inset-y-0 flex items-center left-2">
            <Search size={16} />
          </span>
          <Input
            placeholder="Pesquise"
            className="h-8 border-0 dark:bg-black placeholder:text-xs"
          />
        </div>
      </div>
      <div className="flex flex-row items-center gap-x-1">
        <DropdownMenu>
          <DropdownMenuTrigger disabled asChild>
            <Button size={'sm'} variant={'outline'} className="rounded text-muted-foreground">
              <ListFilter />
              <span className="font-medium">
                Filtros
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContentFilter />
        </DropdownMenu>
      </div >
    </div>
  )
}