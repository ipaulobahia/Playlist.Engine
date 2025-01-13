import { Button } from "@/components/ui/button"
import { DropdownMenuContent, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePicker } from "@/components/ui/date-picker"

export const DropdownMenuContentFilter = () => {
  return (
    <DropdownMenuContent align="end" className="py-2.5 w-72">
      <div className="flex flex-col gap-y-2.5">
        <div className="flex items-center justify-between px-2">
          <Label className="text-xs font-normal text-muted-foreground">Tipo</Label>
          <Select>
            <SelectTrigger className="w-48 h-8 text-xs border bg-muted border-muted-foreground/10">
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
            <SelectTrigger className="w-48 h-8 text-xs border bg-muted border-muted-foreground/10">
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
        <div className="flex items-center justify-between px-2">
          <Label className="text-xs font-normal text-muted-foreground">Status</Label>
          <Select>
            <SelectTrigger className="w-48 h-8 text-xs border bg-muted border-muted-foreground/10">
              <SelectValue placeholder="Selecione o status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Status</SelectLabel>
                <SelectItem value="1">Inativo</SelectItem>
                <SelectItem value="2">Pendente</SelectItem>
                <SelectItem value="3">Ativo</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <DropdownMenuSeparator className="my-2.5" />
      <DatePicker />
      <DropdownMenuSeparator className="my-2.5" />
      <div className="flex flex-row justify-between px-2">
        <Button size={'sm'} variant={'outline'}>Cancelar</Button>
        <Button size={'sm'}>Filtrar</Button>
      </div>
    </DropdownMenuContent>
  )
}