import { Button } from "@/components/ui/button"
import { DatePicker } from "@/components/ui/date-picker"
import { DropdownMenuContent, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useTranslation } from "react-i18next"

export const DropdownMenuContentFilter = () => {
  const { t } = useTranslation()

  return (
    <DropdownMenuContent align="end" className="py-2.5 w-72">
      <div className="flex flex-col gap-y-2.5">
        <div className="flex items-center justify-between px-2">
          <Label className="text-xs font-normal text-muted-foreground">{t('Filter')}</Label>
          <Select>
            <SelectTrigger className="w-48 h-8 text-xs border bg-muted border-muted-foreground/10">
              <SelectValue placeholder={t('Select-Status')} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>{t('Status')}</SelectLabel>
                <SelectItem value="1">Inativo</SelectItem>
                <SelectItem value="2">Ativo</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <DropdownMenuSeparator className="my-2.5" />
      <DatePicker />
      <DropdownMenuSeparator className="my-2.5" />
      <div className="flex flex-row justify-between px-2">
        <Button size={'sm'} variant={'outline'}>{t('Cancel')}</Button>
        <Button size={'sm'}>{t('Filter')}</Button>
      </div>
    </DropdownMenuContent>
  )
}