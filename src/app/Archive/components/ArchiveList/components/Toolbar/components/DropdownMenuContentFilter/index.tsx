import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { DropdownMenuContent, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useState } from "react"
import { ptBR } from 'date-fns/locale/pt-BR'

export const DropdownMenuContentFilter = () => {
  const [showFilterDate, setShowFilterDate] = useState<boolean>(false)
  const [isCalendarOpen, setIsCapendarOpen] = useState<boolean>(false)
  const [date, setDate] = useState<Date>()

  function handlerCalendar() {
    setIsCapendarOpen(prev => !prev)
  }

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
      <div className="flex flex-col gap-3 px-2">
        <div className="flex items-center justify-between">
          <Label className="text-xs font-normal text-muted-foreground">Data</Label>
          <Switch checked={showFilterDate} onCheckedChange={setShowFilterDate} id="date" />
        </div>
        {
          showFilterDate &&
          <>
            <Select>
              <SelectTrigger className="w-full h-8 text-xs border bg-muted border-muted-foreground/10">
                <SelectValue placeholder="Intervalo" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Intervalo</SelectLabel>
                  <SelectItem value="1">Antes</SelectItem>
                  <SelectItem value="2">Entre</SelectItem>
                  <SelectItem value="3">Depois</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Popover open={isCalendarOpen} onOpenChange={setIsCapendarOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn("w-full h-8 text-xs px-3 border bg-muted border-muted-foreground/10 justify-start text-left font-normal", !date && "text-muted-foreground")}
                >
                  <CalendarIcon />
                  {date ? format(date, "PPP", { locale: ptBR }) : <span>Selecione uma data</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  onDayClick={handlerCalendar}
                  mode="single"
                  locale={ptBR}
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </>
        }
      </div>
      <DropdownMenuSeparator className="my-2.5" />
      <div className="flex flex-row justify-between px-2">
        <Button size={'sm'} variant={'outline'}>Cancelar</Button>
        <Button size={'sm'}>Filtrar</Button>
      </div>
    </DropdownMenuContent>
  )
}