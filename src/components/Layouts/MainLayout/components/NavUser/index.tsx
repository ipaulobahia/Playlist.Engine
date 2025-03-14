import { BRFlag, ESFlag, EUAFlag } from "@/assets/flags"
import { DrawerDialogLicense } from "@/components/DrawerDialogLicense"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { changeLanguage } from "@/utils/i18n"
import { Separator } from "@radix-ui/react-context-menu"
import { Cog, Copyright, Languages, LogOut } from "lucide-react"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

export const NavUser = () => {
  const { t } = useTranslation()

  const [open, setOpen] = useState(false)
  const [openSelectLanguage, setOpenSelectLanguage] = useState(false)
  const [language, setLanguage] = useState<"ptBR" | "enUS" | "es">()

  function handleDrawerDialogLicense() {
    setOpen(prev => !prev)
  }

  useEffect(() => {
    const lang = localStorage.getItem('@PlaylistEngine:Lang') as "ptBR" | "enUS" | "es";
    setLanguage(lang || 'ptBR')
  }, [])

  function handleSelectLanguage(lang: "ptBR" | "enUS" | "es") {
    changeLanguage(lang)
    setLanguage(lang)
  }

  function handleOpenSelectLanguage() {
    setOpenSelectLanguage(true)
  }

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button size="icon" variant={'ghost'} className="p-0 hover-visible:outline-0 hover-visible:ring-0 size-8" >
            <Avatar className="w-8 h-8 rounded-lg">
              <AvatarImage src='' alt="Usuário" />
              <AvatarFallback className="rounded-lg">US</AvatarFallback>
            </Avatar>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="p-1 rounded-lg w-52"
          side="bottom"
          align="end"
          sideOffset={4}
        >
          <div className="p-0 text-sm font-normal">
            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
              <Avatar className="w-8 h-8 rounded-lg">
                <AvatarImage src='' alt="Usuário" />
                <AvatarFallback className="rounded-lg">US</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-sm leading-tight text-left">
                <span className="font-semibold truncate">Usuário</span>
                <span className="text-xs truncate">user@gmail.com</span>
              </div>
            </div>
          </div>
          <Separator className="h-px my-1 -mx-1 bg-muted" />
          <div>
            <Link to={'/settings'}>
              <div className="cursor-pointer relative flex select-none items-center gap-2 rounded-sm px-2 py-1.5 text-xs transition-colors hover:bg-accent hover:text-accent-foreground [&>svg]:size-4">
                <Cog />
                {t("Settings")}
              </div>
            </Link>
            <div className="cursor-pointer relative flex select-none items-center gap-2 rounded-sm px-2 py-1.5 text-xs transition-colors hover:bg-accent hover:text-accent-foreground [&>svg]:size-4" onClick={() => handleDrawerDialogLicense()}>
              <Copyright />
              {t("License")}
            </div>
            <div className="cursor-pointer relative flex justify-between select-none items-center gap-2 rounded-sm px-2 py-1.5 text-xs transition-colors hover:bg-accent hover:text-accent-foreground [&>svg]:size-4" onClick={handleOpenSelectLanguage}>
              <div className="flex flex-row items-center gap-x-2">
                <Languages size={16} />
                {t("Language")}
              </div>
              <Select open={openSelectLanguage} onOpenChange={setOpenSelectLanguage} onValueChange={(value) => handleSelectLanguage(value as "ptBR" | "enUS" | "es")} value={language}>
                <SelectTrigger className="p-2 py-0 text-xs border-0 h-fit w-fit focus:ring-0 [&>svg]:hidden">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent side="bottom" alignOffset={-12} align="end" className="min-w-0 w-52">
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
          <Separator className="h-px my-1 -mx-1 bg-muted" />
          <Link to={'/'}>
            <div className="cursor-pointer relative flex select-none items-center gap-2 rounded-sm px-2 py-1.5 text-xs transition-colors hover:bg-destructive/90 hover:text-accent-foreground [&>svg]:size-4">
              <LogOut />
              {t("Log-Out")}
            </div>
          </Link>
        </PopoverContent>
      </Popover>
      <DrawerDialogLicense open={open} setOpen={setOpen} />
    </>
  )
}