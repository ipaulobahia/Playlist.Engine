import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useTranslation } from "react-i18next"

export const RemoteTriggering = () => {
  const { t } = useTranslation()

  return (
    <main className="relative flex flex-1 p-5 pb-20">
      <div className="justify-center w-full max-w-full mx-auto lg:max-w-3xl">
        <div className="space-y-5">
          <div>
            <header className="justify-between px-4 py-6 mx-auto border rounded-md rounded-b-none border-muted-foreground/25 sm:flex sm:px-6">
              <div className="flex items-center w-full">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight">Disparo Remoto</h1>
                  <p className="text-sm text-muted-foreground">[Descrição]</p>
                </div>
              </div>
            </header>
            <div className="flex flex-col items-center gap-4 px-4 py-8 border border-t-0 rounded-md rounded-t-none gap-x-4 border-muted-foreground/25 sm:px-6">
              <div className="grid items-center justify-between w-full grid-cols-3 gap-x-4">
                <Label className="flex flex-col col-span-2 text-sm font-medium leading-none gap-y-1">
                  <span>Aceitar comando em blocos locais</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Normalmmente os comandos remotos PLAY/STOP são ignorados nos blocos locais e aceitos apenas nos blocos 'Sat'</span>
                </Label>
                <Switch checked id="adm" className="ml-auto" />
              </div>
              <div className="grid items-center justify-between w-full grid-cols-3 gap-x-4">
                <Label className="flex flex-col col-span-2 text-sm font-medium leading-none gap-y-1">
                  <span>Aceita comando remoto 'PLAY'</span>
                </Label>
                <Switch checked id="adm" className="ml-auto" />
              </div>
              <div className="grid items-center justify-between w-full grid-cols-3 gap-x-4">
                <Label className="flex flex-col col-span-2 text-sm font-medium leading-none gap-y-1">
                  <span>Aceita comendo remoto 'STOP'</span>
                </Label>
                <Switch checked id="adm" className="ml-auto" />
              </div>
              <div className="grid items-center justify-between w-full grid-cols-3 gap-x-4">
                <Label className="flex flex-col col-span-2 text-sm font-medium leading-none gap-y-1">
                  <span>Ignora comando remoto 'STOP' em bloco comercial</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Dois comenados em menos de 2 segundos será acatado.</span>
                </Label>
                <Switch checked id="adm" className="ml-auto" />
              </div>
              <div className="grid items-center justify-between w-full grid-cols-3 gap-x-4">
                <Label className="flex flex-col col-span-2 text-sm font-medium leading-none gap-y-1">
                  <span>Se exibindo, 'PLAY' passa para o próximo áudio</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Ao receber o comando remoto 'PLAY' em um bloco em execução (Local ou Sat), passar para o próximoo áudio.</span>
                </Label>
                <Switch checked id="adm" className="ml-auto" />
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