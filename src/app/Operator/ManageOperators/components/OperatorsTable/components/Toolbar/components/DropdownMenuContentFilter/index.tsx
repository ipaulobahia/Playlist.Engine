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
          <Label className="text-xs font-normal text-muted-foreground">Perfils</Label>
          <Select>
            <SelectTrigger className="w-48 h-8 text-xs border bg-muted border-muted-foreground/10">
              <SelectValue placeholder="Selecione um operador" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Perfils</SelectLabel>
                <SelectItem value="1">Padrão</SelectItem>
                <SelectItem value="2">Locutor</SelectItem>
                <SelectItem value="3">Gestor</SelectItem>
                <SelectItem value="4">Administrador</SelectItem>
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
                <SelectItem value="2">Ativo</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center justify-between px-2">
          <Label className="text-xs font-normal text-muted-foreground">Segurança</Label>
          <Select>
            <SelectTrigger className="w-48 h-8 text-xs border bg-muted border-muted-foreground/10">
              <SelectValue placeholder="Selecione o formato" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Segurança</SelectLabel>
                <SelectItem value="1">Livre</SelectItem>
                <SelectItem value="2">Pin</SelectItem>
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