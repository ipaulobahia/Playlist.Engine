import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useTranslation } from "react-i18next"

export const PlaylistServer = () => {
  const { t } = useTranslation()

  return (
    <main className="relative flex flex-1 p-5 pb-20">
      <div className="justify-center w-full max-w-full mx-auto lg:max-w-3xl">
        <div className="space-y-5">
          <div>
            <header className="justify-between px-4 py-6 mx-auto border rounded-md rounded-b-none border-muted-foreground/25 sm:flex sm:px-6">
              <div className="flex items-center w-full">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight">Playlist Server</h1>
                  <p className="text-sm text-muted-foreground">Gerencie as configurações referente ao Playlist Server</p>
                </div>
              </div>
            </header>
            <div className="flex flex-col items-center gap-4 px-4 py-8 border border-t-0 rounded-md rounded-t-none gap-x-4 border-muted-foreground/25 sm:px-6">
              <div className="grid items-center justify-between w-full grid-cols-3 gap-x-4">
                <Label className="flex flex-col col-span-2 text-sm font-medium leading-none gap-y-1">
                  <span>Servidor</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">[Descrição]</span>
                </Label>
                <Input placeholder="Seu servidor" className="w-full dark:bg-black border-muted-foreground/25 placeholder:text-xs" />
              </div>
              <div className="grid items-center justify-between w-full grid-cols-3 gap-x-4">
                <Label className="flex flex-col col-span-2 text-sm font-medium leading-none gap-y-1">
                  <span>Porta</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">[Descrição]</span>
                </Label>
                <Input placeholder="0" className="w-full dark:bg-black border-muted-foreground/25 placeholder:text-xs" />
              </div>
              <div className="grid items-center justify-between w-full grid-cols-3 gap-x-4">
                <Label className="flex flex-col col-span-2 text-sm font-medium leading-none gap-y-1">
                  <span>Usuário</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">[Descrição]</span>
                </Label>
                <Input placeholder="Admin" className="w-full dark:bg-black border-muted-foreground/25 placeholder:text-xs" />
              </div>
              <div className="grid items-center justify-between w-full grid-cols-3 gap-x-4">
                <Label className="flex flex-col col-span-2 text-sm font-medium leading-none gap-y-1">
                  <span>{t("Password")}</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">[Descrição]</span>
                </Label>
                <Input placeholder="************" type="password" className="w-full dark:bg-black border-muted-foreground/25 placeholder:text-xs" />
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