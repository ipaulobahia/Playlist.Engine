import { BRFlag, ESFlag, EUAFlag } from "@/assets/flags"
import { DarkMode, LighMode, SystemMode } from "@/assets/images"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { changeLanguage } from "@/utils/i18n"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { DrawerDialogRemoveOperator } from "./components"

export const MyAccount = () => {
  const { t } = useTranslation()

  const { setTheme, theme } = useTheme()

  const [language, setLanguage] = useState<"ptBR" | "enUS" | "es">()

  useEffect(() => {
    const lang = localStorage.getItem('@PlaylistEngine:Lang') as "ptBR" | "enUS" | "es";
    setLanguage(lang || 'ptBR')
  }, [])

  function handleSelectLanguage(lang: "ptBR" | "enUS" | "es") {
    changeLanguage(lang)
    setLanguage(lang)
  }

  return (
    <main className="relative flex flex-1 p-5 pb-20">
      <div className="justify-center w-full max-w-full mx-auto lg:max-w-3xl">
        <div className="space-y-5">
          <div>
            <header className="justify-between px-4 py-6 mx-auto border rounded-md rounded-b-none border-muted-foreground/25 sm:flex sm:px-6">
              <div className="flex items-center w-full">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight">{t("Operator-Preference")}</h1>
                  <p className="text-sm text-muted-foreground">{t("Profile-Management-Description")}</p>
                </div>
              </div>
            </header>
            <div className="px-4 py-8 border border-t-0 rounded-md rounded-t-none border-muted-foreground/25 sm:px-6">
              <div className="flex flex-col items-center gap-4">
                <div className="flex flex-col w-full gap-3">
                  <Label htmlFor="name">{t("Name")}</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder={t("Operator")}
                    required
                    className="dark:bg-black border-muted-foreground/25 placeholder:text-xs"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="justify-between px-4 py-6 mx-auto border rounded-md rounded-b-none border-muted-foreground/25 sm:flex sm:px-6">
              <div className="flex items-center w-full">
                <div>
                  <h1 className="text-lg font-bold tracking-tight">{t("Application-Theme")}</h1>
                  <p className="text-xs text-muted-foreground">{t("Application-Theme-Description")}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between px-4 py-8 border-b gap-x-4 border-muted-foreground/25 border-x sm:px-6">
              <div className="flex flex-col items-start gap-2 cursor-pointer">
                <div onClick={() => setTheme("system")} className={`flex items-center justify-center flex-1 rounded-sm h-36 border-2 ${theme === "system" ? "border-blue-500" : "border-transparent"}`}>
                  <img src={SystemMode} />
                </div>
                <span className="text-sm font-semibold text-accent-foreground">
                  {t("System")}
                </span>
              </div>
              <div className="flex flex-col items-start gap-2 cursor-pointer">
                <div onClick={() => setTheme("light")} className={`flex items-center justify-center flex-1 rounded-sm h-36 border-2 ${theme === "light" ? "border-blue-500" : "border-transparent"}`}>
                  <img src={LighMode} />
                </div>
                <span className="text-sm font-semibold text-accent-foreground">
                  {t("Light-Mode")}
                </span>
              </div>
              <div className="flex flex-col items-start gap-2 cursor-pointer">
                <div onClick={() => setTheme("dark")} className={`flex items-center justify-center flex-1 rounded-sm h-36 border-2 ${theme === "dark" ? "border-blue-500" : "border-transparent"}`}>
                  <img src={DarkMode} />
                </div>
                <span className="text-sm font-semibold text-accent-foreground">
                  {t("Dark-Mode")}
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="justify-between px-4 py-6 mx-auto border rounded-b-none border-muted-foreground/25 sm:flex sm:px-6">
              <div className="flex items-center w-full">
                <div>
                  <h1 className="text-lg font-bold tracking-tight">{t("Language")}</h1>
                  <p className="text-xs text-muted-foreground">{t("Language-Description")}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between px-4 py-8 border-b gap-x-4 border-muted-foreground/25 border-x sm:px-6">
              <Select onValueChange={(value) => handleSelectLanguage(value as "ptBR" | "enUS" | "es")} value={language}>
                <SelectTrigger className="text-xs">
                  <SelectValue placeholder={t("Select-Language")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ptBR">
                    <div className="flex flex-row items-center gap-x-1">
                      <BRFlag />
                      <span>
                        Português
                      </span>
                    </div>
                  </SelectItem>
                  <SelectItem value="enUS">
                    <div className="flex flex-row items-center gap-x-1">
                      <EUAFlag />
                      <span>
                        Inglês
                      </span>
                    </div>
                  </SelectItem>
                  <SelectItem value="es">
                    <div className="flex flex-row items-center gap-x-1">
                      <ESFlag />
                      <span>
                        Espanhol
                      </span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
      <footer className="fixed bottom-0 left-0 flex justify-end w-full p-4 border border-t shadow border-muted-foreground/25 bg-muted">
        <div className="flex flex-row items-center justify-between gap-x-2">
          <DrawerDialogRemoveOperator />
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