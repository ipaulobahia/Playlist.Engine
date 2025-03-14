import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Cog } from "lucide-react"
import { useTranslation } from "react-i18next"

export const MusicalBlock = () => {
  const { t } = useTranslation()

  return (
    <div>
      <div className="justify-between px-4 py-6 mx-auto border rounded-md rounded-b-none border-muted-foreground/25 sm:flex sm:px-6">
        <div className="flex items-center w-full">
          <div>
            <h1 className="text-lg font-bold tracking-tight">{t("Musical-Block")}</h1>
            <p className="text-xs text-muted-foreground">[Descrição]</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-6 border-b gap-y-1 border-muted-foreground/25 border-x">
        <div className="flex flex-col gap-y-2.5">
          <Label className="text-sm">{t("Format")}</Label>
          <Select>
            <SelectTrigger className="h-8 text-xs border bg-muted border-muted-foreground/10">
              <SelectValue placeholder={t("Select-Format")} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>{t("Format")}</SelectLabel>
                <SelectItem value="AUTO">Auto</SelectItem>
                <SelectItem value="TXT1">TXT</SelectItem>
                <SelectItem value="DBF">DBF</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Label className="my-3">{t("File")}</Label>
        <div className="flex flex-row items-start p-2 rounded-md cursor-pointer gap-x-2 hover:bg-accent hover:text-accent-foreground">
          <Checkbox className="mt-1" />
          <div className="flex flex-col gap-y-0.5">
            <Label className="text-sm">Padrão</Label>
            <span className="text-xs text-muted-foreground">[Descrição]</span>
          </div>
        </div>
        <div className="flex flex-row items-start p-2 rounded-md cursor-pointer gap-x-2 hover:bg-accent hover:text-accent-foreground">
          <Checkbox className="mt-1" />
          <div className="flex flex-col gap-y-0.5">
            <Label className="text-sm">Padrão 2</Label>
            <span className="text-xs text-muted-foreground">[Descrição]</span>
          </div>
        </div>
        <div className="flex flex-row items-start p-2 rounded-md cursor-pointer gap-x-2 hover:bg-accent hover:text-accent-foreground">
          <Checkbox className="mt-1" />
          <div className="flex flex-col gap-y-0.5">
            <Label className="text-sm">Personalizado</Label>
            <span className="text-xs text-muted-foreground">[Descrição]</span>
          </div>
          <Button size={'icon'} variant={'ghost'} className="ml-auto hover:bg-transparent">
            <Cog />
          </Button>
        </div>
      </div>
    </div>
  )
}