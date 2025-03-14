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
          <Label className="text-xs font-normal text-muted-foreground">{t('Type')}</Label>
          <Select>
            <SelectTrigger className="w-48 h-8 text-xs border bg-muted border-muted-foreground/10">
              <SelectValue placeholder={t('Select-Type')} />
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
          <Label className="text-xs font-normal text-muted-foreground">{t('Operator')}</Label>
          <Select>
            <SelectTrigger className="w-48 h-8 text-xs border bg-muted border-muted-foreground/10">
              <SelectValue placeholder={t('Select-Operator')} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>{t('Operator')}</SelectLabel>
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
          <Label className="text-xs font-normal text-muted-foreground">{t('Status')}</Label>
          <Select>
            <SelectTrigger className="w-48 h-8 text-xs border bg-muted border-muted-foreground/10">
              <SelectValue placeholder={t('Select-Status')} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>{t('Status')}</SelectLabel>
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
        <Button size={'sm'} variant={'outline'}>{t('Cancel')}</Button>
        <Button size={'sm'}>{t('Filter')}</Button>
      </div>
    </DropdownMenuContent>
  )
}