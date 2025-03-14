import { Input } from "@/components/ui/input"
import { Table } from "@tanstack/react-table"
import { Search } from "lucide-react"
import { useTranslation } from "react-i18next"
import { DrawerDialogCreateAffiliates } from "./components"

interface ToolbarProps<TData> {
  table: Table<TData>
}

export const Toolbar = <TData,>({ table }: ToolbarProps<TData>) => {
  const { t } = useTranslation()
  
  return (
    <div className="flex flex-row items-center justify-between w-full bg-re">
      <div className="relative justify-between pl-4 border rounded dark:bg-black border-muted-foreground/25 w-fit">
        <span className="absolute inset-y-0 flex items-center left-2">
          <Search size={16} />
        </span>
        <Input
          placeholder={t('Search')}
          value={(table.getColumn("file")?.getFilterValue() as string) ?? ""}
          onChange={(event) => table.getColumn("file")?.setFilterValue(event.target.value)}
          className="h-8 border-0 dark:bg-black placeholder:text-xs"
        />
      </div>
      <DrawerDialogCreateAffiliates />
    </div>
  )
}