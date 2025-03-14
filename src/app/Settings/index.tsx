import { ButtonTooltip, DrawerDialogLicense } from "@/components"
import { Button } from "@/components/ui/button"
import { Cable, ChevronRight, CircleCheck, Clock, Cog, Copy, Copyright, FileType2, MonitorCog } from "lucide-react"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { ResumedAffiliatesTable } from "./components"

export const Settings = () => {
  const { t } = useTranslation()

  const [open, setOpen] = useState(false)

  function handleDrawerDialogLicense() {
    setOpen(prev => !prev)
  }

  return (
    <main className="relative flex flex-1 p-5 pb-20">
      <div className="flex flex-col items-center justify-center w-full gap-y-5">
        <div className="flex flex-col items-start w-full gap-y-1">
          <span className="text-3xl font-semibold text-accent-foreground">{t("Settings")}</span>
          <span className="text-base font-normal text-muted-foreground">{t("Settings-Description")}</span>
        </div>
        <div className="grid grid-cols-1 gap-3 xl:grid-cols-2">
          <div className="flex flex-col items-center w-full gap-y-3">
            <span className="w-full text-base font-medium text-left">
              Geral
            </span>
            <Link className="w-full" to={'/settings/preference/playlist-server'}>
              <div className="flex flex-col w-full border rounded-lg shadow cursor-pointer border-muted-foreground/25">
                <div className="grid w-full grid-cols-3 p-4">
                  <div className="flex flex-col justify-center col-span-2 gap-y-1">
                    <span className="text-base font-medium">Playlist Server</span>
                    <span className="text-xs font-normal text-muted-foreground">{t("Playlist-Server-Description")}</span>
                  </div>
                  <div className="flex items-center justify-center ml-auto rounded-full size-24 bg-muted-foreground/10">
                    <Cog className="size-[55%]" />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between flex-1 px-4 py-3 border-t hover:bg-muted-foreground/10 border-muted-foreground/25">
                  <span className="text-xs font-medium text-accent-foreground">{t("See-More")}</span>
                  <ChevronRight size={16} />
                </div>
              </div>
            </Link>
            <div className="grid items-center w-full grid-cols-1 lg:grid-cols-2 gap-x-3">
              <Link to={'/settings/preference/advanced'}>
                <div className="flex flex-col flex-1 border rounded-lg shadow cursor-pointer border-muted-foreground/25">
                  <div className="grid items-center w-full grid-cols-3 p-4">
                    <div className="flex flex-col col-span-2 gap-y-1">
                      <span className="text-sm font-medium">{t("Advanced")}</span>
                      <span className="text-xs font-normal text-muted-foreground">{t("Advanced-Description")}</span>
                    </div>
                    <div className="flex items-center justify-center ml-auto rounded-full size-24 bg-muted-foreground/10">
                      <MonitorCog className="size-[55%]" />
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between flex-1 px-4 py-3 border-t hover:bg-muted-foreground/10 border-muted-foreground/25">
                    <span className="text-xs font-medium text-accent-foreground">{t("See-More")}</span>
                    <ChevronRight size={16} />
                  </div>
                </div>
              </Link>
              <Link to={'/settings/preference/outputs'}>
                <div className="flex flex-col flex-1 border rounded-lg shadow cursor-pointer border-muted-foreground/25">
                  <div className="grid items-center w-full grid-cols-3 p-4">
                    <div className="flex flex-col col-span-2 gap-y-1">
                      <span className="text-sm font-medium">{t("Outputs")}</span>
                      <span className="text-xs font-normal text-muted-foreground">{t("Outputs-Description")}</span>
                    </div>
                    <div className="flex items-center justify-center ml-auto rounded-full size-24 bg-muted-foreground/10">
                      <Cable className="size-[55%]" />
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between flex-1 px-4 py-3 border-t hover:bg-muted-foreground/10 border-muted-foreground/25 ">
                    <span className="text-xs font-medium text-accent-foreground">{t("See-More")}</span>
                    <ChevronRight size={16} />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center w-full gap-y-3">
            <span className="w-full text-base font-medium text-left">
              Playlist.Ini
            </span>
            <div className="grid items-center w-full grid-cols-1 gap-3 lg:grid-cols-2">
              <div className="flex flex-col w-full border rounded-lg shadow border-muted-foreground/25">
                <div className="flex flex-col items-start w-full p-4 gap-y-3">
                  <div className="flex flex-row items-center justify-between w-full">
                    <span className="text-base font-medium text-accent-foreground">{t("Musical-Block")}</span>
                    <Link to={'/settings/playlist-ini/basic-settings'}>
                      <Button size={'sm'} variant={'link'}>
                        {t("See-More")}
                      </Button>
                    </Link>
                  </div>
                  <Link className="grid items-center justify-between w-full grid-cols-3 px-1 py-1 rounded-lg cursor-pointer hover:bg-muted" to={'/settings/playlist-ini/basic-settings'}>
                    <div className="flex flex-row items-center gap-x-1">
                      <FileType2 size={16} />
                      <span className="text-sm font-medium text-accent-foreground">{t("Format")}</span>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-x-1.5">
                      <CircleCheck className="text-white fill-blue-600" size={18} />
                      <div className="flex flex-col">
                        <span className="text-xs font-medium text-accent-foreground">TXT1</span>
                        <span className="text-xs font-medium text-muted-foreground">Padrão</span>
                      </div>
                    </div>
                    <ChevronRight size={16} className="ml-auto" />
                  </Link>
                  <div className="grid items-center justify-between w-full grid-cols-3 px-1 py-1 rounded-lg cursor-pointer hover:bg-muted">
                    <div className="flex flex-row items-center gap-x-1">
                      <Clock size={16} />
                      <span className="text-sm font-medium text-accent-foreground">{t("Clock")}</span>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-x-1.5">
                      <CircleCheck className="text-white fill-blue-600" size={18} />
                      <div className="flex flex-col">
                        <span className="text-xs font-medium text-accent-foreground">TXT1</span>
                        <span className="text-xs font-medium text-muted-foreground">Padrão</span>
                      </div>
                    </div>
                    <ChevronRight size={16} className="ml-auto" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full border rounded-lg shadow gap-y-3 border-muted-foreground/25">
                <div className="flex flex-col items-start w-full p-4 gap-y-3">
                  <div className="flex flex-row items-center justify-between w-full">
                    <span className="text-base font-medium text-accent-foreground">{t("Commercial-Block")}</span>
                    <Link to={'/settings/playlist-ini/basic-settings'}>
                      <Button size={'sm'} variant={'link'}>
                        {t("See-More")}
                      </Button>
                    </Link>
                  </div>
                  <Link className="grid items-center justify-between w-full grid-cols-3 px-1 py-1 rounded-lg cursor-pointer hover:bg-muted" to={'/settings/playlist-ini/basic-settings'}>
                    <div className="flex flex-row items-center gap-x-1">
                      <FileType2 size={16} />
                      <span className="text-sm font-medium text-accent-foreground">{t("Format")}</span>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-x-1.5">
                      <CircleCheck className="text-white fill-blue-600" size={18} />
                      <div className="flex flex-col">
                        <span className="text-xs font-medium text-accent-foreground">TXT1</span>
                        <span className="text-xs font-medium text-muted-foreground">Personalizado</span>
                      </div>
                    </div>
                    <ChevronRight size={16} className="ml-auto" />
                  </Link>
                  <Link className="grid items-center justify-between w-full grid-cols-3 px-1 py-1 rounded-lg cursor-pointer hover:bg-muted" to={'/settings/playlist-ini/basic-settings'}>
                    <div className="flex flex-row items-center gap-x-1">
                      <Clock size={16} />
                      <span className="text-sm font-medium text-accent-foreground">Relógio</span>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-x-1.5">
                      <CircleCheck className="text-white fill-blue-600" size={18} />
                      <div className="flex flex-col">
                        <span className="text-xs font-medium text-accent-foreground">TXT1</span>
                        <span className="text-xs font-medium text-muted-foreground">Personalizado</span>
                      </div>
                    </div>
                    <ChevronRight size={16} className="ml-auto" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full h-full border rounded-lg shadow border-muted-foreground/25">
              <div className="flex flex-col items-start w-full p-4 gap-y-3">
                <div className="flex flex-row items-center justify-between w-full">
                  <span className="text-base font-medium text-accent-foreground">Station Office</span>
                  <Link to={'/settings/preference/station-office'}>
                    <Button size={'sm'} variant={'link'}>
                      {t("See-More")}
                    </Button>
                  </Link>
                </div>
                <Link to={'/settings/preference/station-office'} className="grid items-center justify-between w-full grid-cols-3 p-1 py-1.5 rounded-lg cursor-pointer hover:bg-muted">
                  <div className="flex flex-row items-center gap-x-1">
                    <span className="text-sm font-medium text-accent-foreground">{t("Submit-Placement")}</span>
                  </div>
                  <div className="flex mx-auto flex-row items-center justify-start gap-x-1.5">
                    <CircleCheck className="text-white fill-blue-600" size={18} />
                    <span className="text-xs font-medium text-accent-foreground">{t("Activated")}</span>
                  </div>
                  <ChevronRight size={16} className="ml-auto" />
                </Link>
                <div className="grid items-center justify-between w-full grid-cols-3 p-1 rounded-lg">
                  <div className="flex flex-row items-center col-span-2 gap-x-1">
                    <span className="text-sm font-medium text-accent-foreground">{t("CSO-Code")}</span>
                  </div>
                  <div className="flex flex-row items-center gap-x-1.5">
                    <span className="ml-auto text-xs font-medium select-none text-accent-foreground">000</span>
                    <ButtonTooltip size={'sm'} icon={<Copy />} message={t("Copy-CSO")} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between w-full p-4 border rounded-lg shadow gap-y-3 border-muted-foreground/25">
          <div className="flex flex-row items-center justify-between w-full">
            <span className="text-base font-medium text-accent-foreground">{t("Affiliates")}</span>
            <Link to={'/settings/playlist-ini/affiliates'}>
              <Button size={'sm'} variant={'link'}>
                {t("See-More")}
              </Button>
            </Link>
          </div>
          <ResumedAffiliatesTable />
        </div>
        <div className="flex flex-col w-full gap-y-3">
          <div className="w-full">
            <span className="text-base font-medium text-left">
              {t("Others")}
            </span>
          </div>
          <div onClick={handleDrawerDialogLicense} className="flex flex-row items-center justify-between w-full p-4 border rounded-lg shadow cursor-pointer hover:bg-muted border-muted-foreground/25">
            <div className="flex flex-row items-center gap-x-1">
              <Copyright size={16} />
              <span className="text-sm font-medium text-accent-foreground">
                {t("License")}
              </span>
            </div>
            <ChevronRight size={16} />
          </div>
        </div>
      </div>
      <DrawerDialogLicense open={open} setOpen={setOpen} />
    </main>
  )
}