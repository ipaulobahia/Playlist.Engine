import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { ptBR } from 'date-fns/locale/pt-BR'
import { CalendarIcon } from "lucide-react"
import { useState } from "react"
import { DateRange } from "react-day-picker"
import { Button } from "./button"
import { Label } from "./label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./select"

export const DatePicker = () => {
  const [showFilterDate, setShowFilterDate] = useState<boolean>(false)
  const [isCalendarOpen, setIsCapendarOpen] = useState<boolean>(false)
  const [range, setRange] = useState<string>()
  const [date, setDate] = useState<Date | undefined>()
  const [rangeDate, setRangeDate] = useState<DateRange | undefined>()

  function handleCalendar() {
    setIsCapendarOpen(prev => !prev)
  }

  const isRangeDate = range != "2"

  return (
    <div className="flex flex-col gap-3 px-2">
      <div className="flex items-center justify-between">
        <Label className="text-xs font-normal text-muted-foreground">Data</Label>
        <Switch checked={showFilterDate} onCheckedChange={setShowFilterDate} id="date" />
      </div>
      {
        showFilterDate &&
        <>
          <Select onValueChange={(value) => setRange(value)} defaultValue={range}>
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
                className={cn("w-full h-8 text-xs px-3 border bg-muted border-muted-foreground/10 justify-start text-left font-normal", (!date || !rangeDate) && "text-muted-foreground")}
              >
                <CalendarIcon />
                {
                  isRangeDate
                    ?
                    date ? format(date, "PPP", { locale: ptBR }) : <span>Selecione uma data</span>
                    :
                    rangeDate?.from
                      ?
                      (
                        rangeDate.to
                          ?
                          (<>{format(rangeDate.from, "LLL dd, y")} -{" "} {format(rangeDate.to, "LLL dd, y")}</>)
                          :
                          (format(rangeDate.from, "LLL dd, y"))
                      )
                      :
                      (<span>Selecione uma data</span>)
                }
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              {
                isRangeDate
                  ?
                  <Calendar
                    onDayClick={handleCalendar}
                    mode="single"
                    locale={ptBR}
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                  :
                  <Calendar
                    initialFocus
                    mode="range"
                    selected={rangeDate}
                    onSelect={setRangeDate}
                    numberOfMonths={2}
                    locale={ptBR}
                  />
              }
            </PopoverContent>
          </Popover>
        </>
      }
    </div>
  )
}