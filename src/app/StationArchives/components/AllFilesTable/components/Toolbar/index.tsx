import { Table } from "@tanstack/react-table"
import { FilterButton } from "./components/FilterButton"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { ListFilter, Search } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

interface ToolbarProps<TData> {
  table: Table<TData>
}

export const Toolbar = <TData,>({ table }: ToolbarProps<TData>) => {
  const [typeFile, setTypeFile] = useState<string>("Todos")

  function handlerFilterType(type: string) {
    setTypeFile(type)
    table.getColumn("file")?.setFilterValue(type.toLowerCase())
  }

  return (
    <div className="flex flex-row items-center justify-between my-3">
      <div className="flex p-1 bg-white border rounded border-muted-foreground/25 dark:bg-black gap-x-1">
        <FilterButton typeFile={typeFile} currentType="" label="Todos" onFilter={handlerFilterType} />
        <FilterButton typeFile={typeFile} currentType="MP3" label="MP3" onFilter={handlerFilterType} />
        <FilterButton typeFile={typeFile} currentType="MP4" label="MP4" onFilter={handlerFilterType} />
        <FilterButton typeFile={typeFile} currentType="TXT" label="TXT" onFilter={handlerFilterType} />
      </div>
      <div className="flex flex-row items-center justify-between gap-2">
        <div className="relative w-full pl-4 bg-black">
          <span className="absolute inset-y-0 flex items-center left-2">
            <Search size={16} />
          </span>
          <Input
            placeholder="Pesquise"
            value={(table.getColumn("file")?.getFilterValue() as string) ?? ""}
            onChange={(event) => table.getColumn("file")?.setFilterValue(event.target.value)}
            className="h-8 dark:bg-black border-muted-foreground/25 placeholder:text-xs"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size={'sm'} variant={'outline'} className="rounded text-muted-foreground">
              <ListFilter />
              <span className="font-medium">
                Filtros
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="py-2 w-72">
            <div className="flex flex-col gap-y-2">
              <div className="flex items-center justify-between px-2">
                <Label className="text-xs font-normal text-muted-foreground">Tipo</Label>
                <Select>
                  <SelectTrigger className="h-8 text-xs w-fit">
                    <SelectValue placeholder="Selecione um tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Tipo do arquivo</SelectLabel>
                      <SelectItem value="apple">mp3</SelectItem>
                      <SelectItem value="banana">mp4</SelectItem>
                      <SelectItem value="blueberry">txt</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between px-2">
                <Label className="text-xs font-normal text-muted-foreground">Operador</Label>
                <Select>
                  <SelectTrigger className="h-8 text-xs w-fit">
                    <SelectValue placeholder="Selecione um operador" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Operador</SelectLabel>
                      <SelectItem value="1">Carlos Silva</SelectItem>
                      <SelectItem value="2">Ana Costa</SelectItem>
                      <SelectItem value="3">Ricardo Lima</SelectItem>
                      <SelectItem value="4">Mariana Souza</SelectItem>
                      <SelectItem value="5">Lucas Oliveira</SelectItem>
                      <SelectItem value="6">Fernanda Almeida</SelectItem>
                      <SelectItem value="7">Eduardo Pereira</SelectItem>
                      <SelectItem value="8">Raquel Santos</SelectItem>
                      <SelectItem value="9">João Martins</SelectItem>
                      <SelectItem value="10">Beatriz Costa</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DropdownMenuSeparator className="my-2" />
            <div className="flex items-center justify-between px-2">
              <Label className="text-xs font-normal text-muted-foreground">Data</Label>
              <Switch id="date" />
            </div>
            <DropdownMenuSeparator className="my-2" />
            <div className="flex flex-row justify-between px-2">
              <Button size={'sm'} variant={'outline'}>Cancelar</Button>
              <Button size={'sm'}>Filtrar</Button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}