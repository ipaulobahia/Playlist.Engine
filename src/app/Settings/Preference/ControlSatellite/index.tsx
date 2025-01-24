import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export const ControlSatellite = () => {
  return (
    <main className="relative flex flex-1 p-5 pb-20">
      <div className="justify-center w-full max-w-full mx-auto lg:max-w-3xl">
        <div className="space-y-5">
          <div>
            <header className="justify-between px-4 py-6 mx-auto border rounded-md rounded-b-none border-muted-foreground/25 sm:flex sm:px-6">
              <div className="flex items-center w-full">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight">Afiliada de rede</h1>
                  <p className="text-sm text-muted-foreground">[Descrição]</p>
                </div>
              </div>
            </header>
            <div className="flex flex-col items-center gap-4 px-4 py-8 border border-t-0 rounded-md rounded-t-none gap-x-4 border-muted-foreground/25 sm:px-6">
              <div className="flex flex-row items-center justify-between w-full gap-x-4">
                <Label className="flex flex-col text-sm font-medium leading-none gap-y-1 w-[65%]">
                  <span>Afiliada de rede</span>
                </Label>
                <Switch checked id="adm" />
              </div>
              <div className="flex flex-row items-center justify-between w-full gap-x-4">
                <Label className="flex flex-col text-sm font-medium leading-none gap-y-1 w-[65%]">
                  <span>Se exibindo bloco local, iniciar próximo blco 'Sat'</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Ao receber o comando remoto 'PLAY' interromper o bloco em exibição e iniciar o próximo bloco sat.</span>
                </Label>
                <Switch checked id="adm" />
              </div>
              <div className="flex flex-row items-center justify-between w-full gap-x-4">
                <Label className="flex flex-col text-sm font-medium leading-none gap-y-1 w-[65%]">
                  <span>Aceitar disparo somente no horário</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Ignorar o comando remoto 'PLAY' se o bloco posicionado estiver fora da faixa de horária (minutos) definida abaixo.</span>
                </Label>
                <Switch checked id="adm" />
              </div>
              <div className="flex flex-row items-center justify-between w-full gap-x-4">
                <Label className="flex flex-col text-sm font-medium leading-none gap-y-1 w-[65%]">
                  <span>Posicionar automaticamente os blocos</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Posiccionamento automático dos blocos, quandoo parado.</span>
                </Label>
                <Switch checked id="adm" />
              </div>
              <div className="flex flex-row items-center justify-between w-full gap-x-4">
                <Label className="flex flex-col text-sm font-medium leading-none gap-y-1 w-[65%]">
                  <span>Minutos para posicionar os blocos e para aceitar disparo</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Tempo de tolerância para posicionamento automático dos blocos e para recebimento do comando remoto 'PLAY', quando parado.  </span>
                </Label>
                <Input type="number" placeholder="3" className="flex-1 dark:bg-black border-muted-foreground/25 placeholder:text-xs" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="fixed bottom-0 left-0 flex justify-end w-full p-4 border border-t shadow border-muted-foreground/25 bg-muted">
        <div className="flex flex-row items-center justify-between gap-x-2">
          <Button variant={'ghost'} disabled>
            Cancelar
          </Button>
          <Button disabled>
            Salvar
          </Button>
        </div>
      </footer>
    </main>
  )
}