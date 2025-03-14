import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useTranslation } from "react-i18next"

export const Outputs = () => {
  const { t } = useTranslation()

  return (
    <main className="relative flex flex-1 p-5 pb-20">
      <div className="justify-center w-full max-w-full mx-auto lg:max-w-3xl">
        <div className="space-y-5">
          <div>
            <header className="justify-between px-4 py-6 mx-auto border rounded-md rounded-b-none border-muted-foreground/25 sm:flex sm:px-6">
              <div className="flex items-center w-full">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight">{t("Outputs")}</h1>
                  <p className="text-sm text-muted-foreground">[Descrição]</p>
                </div>
              </div>
            </header>
            <div className="flex flex-col items-center gap-4 px-4 py-8 border border-t-0 rounded-md rounded-t-none gap-x-4 border-muted-foreground/25 sm:px-6">
              <div className="grid items-center justify-between w-full grid-cols-3 gap-x-4">
                <Label className="flex flex-col col-span-2 text-sm font-medium leading-none gap-y-1">
                  <span>{t("Programming")}</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">{t("Programming-Description")}</span>
                </Label>
                <Select>
                  <SelectTrigger className="flex-1 h-8 text-xs border bg-muted border-muted-foreground/10">
                    <SelectValue placeholder={t("Select-Device")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>{t("Device")}</SelectLabel>
                      <SelectItem value="1">Padrão</SelectItem>
                      <SelectItem value="2">Fones de ouvidos (WH-1000XM5)</SelectItem>
                      <SelectItem value="3">Conector AUX Interno (DroidCam Audio)</SelectItem>
                      <SelectItem value="4">LU28R55 (HD Audio Driver for Display Audio)</SelectItem>
                      <SelectItem value="5">Conector AUX Interno (DroidCam Virtual Audio)</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid items-center justify-between w-full grid-cols-3 gap-x-4">
                <Label className="flex flex-col col-span-2 text-sm font-medium leading-none gap-y-1">
                  <span>{t("Pre-Listen")}</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">{t("Pre-Listen-Description")}</span>
                </Label>
                <Select>
                  <SelectTrigger className="flex-1 h-8 text-xs border bg-muted border-muted-foreground/10">
                    <SelectValue placeholder={t("Select-Device")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>{t("Device")}</SelectLabel>
                      <SelectItem value="1">Padrão</SelectItem>
                      <SelectItem value="2">Fones de ouvidos (WH-1000XM5)</SelectItem>
                      <SelectItem value="3">Conector AUX Interno (DroidCam Audio)</SelectItem>
                      <SelectItem value="4">LU28R55 (HD Audio Driver for Display Audio)</SelectItem>
                      <SelectItem value="5">Conector AUX Interno (DroidCam Virtual Audio)</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid items-center justify-between w-full grid-cols-3 gap-x-4">
                <Label className="flex flex-col col-span-2 text-sm font-medium leading-none gap-y-1">
                  <span>{t("Quickstart")}</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">{t("Quickstart-Description")}</span>
                </Label>
                <Select>
                  <SelectTrigger className="flex-1 h-8 text-xs border bg-muted border-muted-foreground/10">
                    <SelectValue placeholder={t("Select-Device")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>{t("Device")}</SelectLabel>
                      <SelectItem value="1">Padrão</SelectItem>
                      <SelectItem value="2">Fones de ouvidos (WH-1000XM5)</SelectItem>
                      <SelectItem value="3">Conector AUX Interno (DroidCam Audio)</SelectItem>
                      <SelectItem value="4">LU28R55 (HD Audio Driver for Display Audio)</SelectItem>
                      <SelectItem value="5">Conector AUX Interno (DroidCam Virtual Audio)</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid items-center justify-between w-full grid-cols-3 gap-x-4">
                <Label className="flex flex-col col-span-2 text-sm font-medium leading-none gap-y-1">
                  <span>{t("Play-Option")}</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">{t("Play-Option-Description")}</span>
                </Label>
                <Select>
                  <SelectTrigger className="flex-1 h-8 text-xs border bg-muted border-muted-foreground/10">
                    <SelectValue placeholder={t("Select-Device")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>{t("Device")}</SelectLabel>
                      <SelectItem value="1">Padrão</SelectItem>
                      <SelectItem value="2">Fones de ouvidos (WH-1000XM5)</SelectItem>
                      <SelectItem value="3">Conector AUX Interno (DroidCam Audio)</SelectItem>
                      <SelectItem value="4">LU28R55 (HD Audio Driver for Display Audio)</SelectItem>
                      <SelectItem value="5">Conector AUX Interno (DroidCam Virtual Audio)</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid items-center justify-between w-full grid-cols-3 gap-x-4">
                <Label className="flex flex-col col-span-2 text-sm font-medium leading-none gap-y-1">
                  <span>{t("Commercials")}</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">{t("Commercials-Description")}</span>
                </Label>
                <Select>
                  <SelectTrigger className="flex-1 h-8 text-xs border bg-muted border-muted-foreground/10">
                    <SelectValue placeholder={t("Select-Device")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>{t("Device")}</SelectLabel>
                      <SelectItem value="1">Padrão</SelectItem>
                      <SelectItem value="2">Fones de ouvidos (WH-1000XM5)</SelectItem>
                      <SelectItem value="3">Conector AUX Interno (DroidCam Audio)</SelectItem>
                      <SelectItem value="4">LU28R55 (HD Audio Driver for Display Audio)</SelectItem>
                      <SelectItem value="5">Conector AUX Interno (DroidCam Virtual Audio)</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid items-center justify-between w-full grid-cols-3 gap-x-4">
                <Label className="flex flex-col col-span-2 text-sm font-medium leading-none gap-y-1">
                  <span>{t("Songs")}</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">{t("Songs-Description")}</span>
                </Label>
                <Select>
                  <SelectTrigger className="flex-1 h-8 text-xs border bg-muted border-muted-foreground/10">
                    <SelectValue placeholder={t("Select-Device")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>{t("Device")}</SelectLabel>
                      <SelectItem value="1">Padrão</SelectItem>
                      <SelectItem value="2">Fones de ouvidos (WH-1000XM5)</SelectItem>
                      <SelectItem value="3">Conector AUX Interno (DroidCam Audio)</SelectItem>
                      <SelectItem value="4">LU28R55 (HD Audio Driver for Display Audio)</SelectItem>
                      <SelectItem value="5">Conector AUX Interno (DroidCam Virtual Audio)</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid items-center justify-between w-full grid-cols-3 gap-x-4">
                <Label className="flex flex-col col-span-2 text-sm font-medium leading-none gap-y-1">
                  <span>{t("Vignettes")}</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">{t("Vignettes-Description")}</span>
                </Label>
                <Select>
                  <SelectTrigger className="flex-1 h-8 text-xs border bg-muted border-muted-foreground/10">
                    <SelectValue placeholder={t("Select-Device")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>{t("Device")}</SelectLabel>
                      <SelectItem value="1">Padrão</SelectItem>
                      <SelectItem value="2">Fones de ouvidos (WH-1000XM5)</SelectItem>
                      <SelectItem value="3">Conector AUX Interno (DroidCam Audio)</SelectItem>
                      <SelectItem value="4">LU28R55 (HD Audio Driver for Display Audio)</SelectItem>
                      <SelectItem value="5">Conector AUX Interno (DroidCam Virtual Audio)</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div>
            <header className="justify-between px-4 py-6 mx-auto border rounded-md rounded-b-none border-muted-foreground/25 sm:flex sm:px-6">
              <div className="flex items-center w-full">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight">ID para Saídas</h1>
                  <p className="text-sm text-muted-foreground">[Descrição]</p>
                </div>
              </div>
            </header>
            <div className="flex flex-col items-center gap-4 px-4 py-8 border border-t-0 rounded-md rounded-t-none gap-x-4 border-muted-foreground/25 sm:px-6">
              <div className="grid items-center justify-between w-full grid-cols-3 gap-x-4">
                <Label className="flex flex-col col-span-2 text-sm font-medium leading-none gap-y-1">
                  <span>Fone de ouvido (WH-1000XM5)</span>
                </Label>
                <Input defaultValue="CH1" className="flex-1 dark:bg-black border-muted-foreground/25 placeholder:text-xs" />
              </div>
              <div className="grid items-center justify-between w-full grid-cols-3 gap-x-4">
                <Label className="flex flex-col col-span-2 text-sm font-medium leading-none gap-y-1">
                  <span>Conector AUX Interno (DroidCam Audio)</span>
                </Label>
                <Input defaultValue="CH2" className="flex-1 dark:bg-black border-muted-foreground/25 placeholder:text-xs" />
              </div>
              <div className="grid items-center justify-between w-full grid-cols-3 gap-x-4">
                <Label className="flex flex-col col-span-2 text-sm font-medium leading-none gap-y-1">
                  <span>LU28R55 (HD Audio Driver for Display Audio)</span>
                </Label>
                <Input defaultValue="CH3" className="flex-1 dark:bg-black border-muted-foreground/25 placeholder:text-xs" />
              </div>
              <div className="grid items-center justify-between w-full grid-cols-3 gap-x-4">
                <Label className="flex flex-col col-span-2 text-sm font-medium leading-none gap-y-1">
                  <span>Conector AUX Interno</span>
                </Label>
                <Input defaultValue="CH4" className="flex-1 dark:bg-black border-muted-foreground/25 placeholder:text-xs" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="fixed bottom-0 left-0 flex justify-end w-full p-4 border border-t shadow border-muted-foreground/25 bg-muted">
        <div className="flex flex-row items-center justify-between gap-x-2">
          <Button size={'sm'} variant={'ghost'} disabled>
            {t("Cancel")}
          </Button>
          <Button size={'sm'} disabled>
            {t("Save")}
          </Button>
        </div>
      </footer>
    </main>
  )
}