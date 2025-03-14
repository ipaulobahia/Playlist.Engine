import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useTranslation } from "react-i18next"

export const GeneralPreference = () => {
  const { t } = useTranslation()

  return (
    <main className="relative flex flex-1 p-5 pb-20">
      <div className="justify-center w-full max-w-full mx-auto lg:max-w-3xl">
        <div className="space-y-5">
          <div>
            <header className="justify-between px-4 py-6 mx-auto border rounded-md rounded-b-none border-muted-foreground/25 sm:flex sm:px-6">
              <div className="flex items-center w-full">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight">Diversos</h1>
                  <p className="text-sm text-muted-foreground">[Descrição]</p>
                </div>
              </div>
            </header>
            <div className="flex flex-col items-center gap-4 px-4 py-8 border border-t-0 rounded-md rounded-t-none gap-x-4 border-muted-foreground/25 sm:px-6">
              <div className="grid items-center justify-between w-full grid-cols-3 gap-x-4">
                <Label className="flex flex-col col-span-2 text-sm font-medium leading-none gap-y-1">
                  <span>Tocar programação ao iniciar</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Começar a exibir o áudio assim que o programa for carregado</span>
                </Label>
                <Switch className="ml-auto" checked id="adm" />
              </div>
              <div className="grid items-center justify-between w-full grid-cols-3 gap-x-4">
                <Label className="flex flex-col col-span-2 text-sm font-medium leading-none gap-y-1">
                  <span>Dica do dia</span>
                </Label>
                <Switch className="ml-auto" checked id="adm" />
              </div>
              <div className="grid items-center justify-between w-full grid-cols-3 gap-x-4">
                <Label className="flex flex-col col-span-2 text-sm font-medium leading-none gap-y-1">
                  <span>Pasta de trilhas</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Pasta para trilhas de fundo automáticas para texto ao vivo</span>
                </Label>
                <Input className="flex-1 dark:bg-black border-muted-foreground/25 placeholder:text-xs" />
              </div>
              <div className="grid items-center justify-between w-full grid-cols-3 gap-x-4">
                <Label className="flex flex-col col-span-2 text-sm font-medium leading-none gap-y-1">
                  <span>Salvar montagem em TXT</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Salvar a montagem dos blocos adicionalmente em arquivo TXT.</span>
                </Label>
                <Switch className="ml-auto" checked id="adm" />
              </div>
              <div className="grid items-center justify-between w-full grid-cols-3 gap-x-4">
                <Label className="flex flex-col col-span-2 text-sm font-medium leading-none gap-y-1">
                  <span>Manter ordem da programação</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Ao ler um novo mapa, manter as inserções na ordem atual nos blocos. Se não, a ordem no mapa terá prioridade.</span>
                </Label>
                <Switch className="ml-auto" checked id="adm" />
              </div>
              <div className="grid items-center justify-between w-full grid-cols-3 gap-x-4">
                <Label className="flex flex-col col-span-2 text-sm font-medium leading-none gap-y-1">
                  <span>Ignorar atualizações em blocos bloqueados</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Os blocos bloqueados não recebem atualizações dos mapas.</span>
                </Label>
                <Switch className="ml-auto" checked id="adm" />
              </div>
              <div className="grid items-center justify-between w-full grid-cols-3 gap-x-4">
                <Label className="flex flex-col col-span-2 text-sm font-medium leading-none gap-y-1">
                  <span>Percentual mínimo para comprovação</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Percentual mínimo de execução de uma inserção em relação à duração para que a mesma seja comprovada</span>
                </Label>
                <Input placeholder="50" className="flex-1 dark:bg-black border-muted-foreground/25 placeholder:text-xs" />
              </div>
              <div className="grid items-center justify-between w-full grid-cols-3 gap-x-4">
                <Label className="flex flex-col col-span-2 text-sm font-medium leading-none gap-y-1">
                  <span>Desconsiderar o tempo de mixagem na comprovação</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Desligue esta opção se quiser considerar o tempo de mixagem como tempo executado para comprovação das inserções</span>
                </Label>
                <Switch className="ml-auto" checked id="adm" />
              </div>
              <div className="grid items-center justify-between w-full grid-cols-3 gap-x-4">
                <Label className="flex flex-col col-span-2 text-sm font-medium leading-none gap-y-1">
                  <span>Salvar duração da mídia na comprovação</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Com essa opção habilitada, a duração no comprovante desconsiderará os marcadores de ínicio e fim da mídia.</span>
                </Label>
                <Switch className="ml-auto" checked id="adm" />
              </div>
              <div className="grid items-center justify-between w-full grid-cols-3 gap-x-4">
                <Label className="flex flex-col col-span-2 text-sm font-medium leading-none gap-y-1">
                  <span>Ajuste do leitor de temperatura</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Diferença entre a temperatura real e a temperatura apontada pelo leitor HTU</span>
                </Label>
                <Input placeholder="0" className="flex-1 dark:bg-black border-muted-foreground/25 placeholder:text-xs" />
              </div>
              <div className="grid items-center justify-between w-full grid-cols-3 gap-x-4">
                <Label className="flex flex-col col-span-2 text-sm font-medium leading-none gap-y-1">
                  <span>Tempo entre atualizações</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Tempo de espera (em segundos) entre atualizações sucessivas no Ligação.dbf, mapas e em pastas de locuções. Também é usado como tempo de espera antes de salvar alterações em disco.</span>
                </Label>
                <Input placeholder="3" className="flex-1 dark:bg-black border-muted-foreground/25 placeholder:text-xs" />
              </div>
              <div className="grid items-center justify-between w-full grid-cols-3 gap-x-4">
                <Label className="flex flex-col col-span-2 text-sm font-medium leading-none gap-y-1">
                  <span>Disabilita MD5 no comprovante</span>
                </Label>
                <Switch className="ml-auto" checked id="adm" />
              </div>
            </div>
          </div>
          <div>
            <header className="justify-between px-4 py-6 mx-auto border rounded-md rounded-b-none border-muted-foreground/25 sm:flex sm:px-6">
              <div className="flex items-center w-full">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight">AVRA</h1>
                  <p className="text-sm text-muted-foreground">[Descrição]</p>
                </div>
              </div>
            </header>
            <div className="flex flex-col items-center gap-4 px-4 py-8 border border-t-0 rounded-md rounded-t-none gap-x-4 border-muted-foreground/25 sm:px-6">
              <div className="grid items-center justify-between w-full grid-cols-3 gap-x-4">
                <Label className="flex flex-col col-span-2 text-sm font-medium leading-none gap-y-1">
                  <span>Pasta de trilhas</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground ">Informe o endereço IP e porta do servidor AVRA <b>(IP:Porta)</b></span>
                </Label>
                <Input className="flex-1 dark:bg-black border-muted-foreground/25 placeholder:text-xs" />
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