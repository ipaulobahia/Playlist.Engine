import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

export const RdsRss = () => {
  return (
    <main className="relative flex flex-1 p-5 pb-20">
      <div className="justify-center w-full max-w-full mx-auto lg:max-w-3xl">
        <div className="space-y-5">
          <div>
            <header className="justify-between px-4 py-6 mx-auto border rounded-md rounded-b-none border-muted-foreground/25 sm:flex sm:px-6">
              <div className="flex items-center w-full">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight">RDS</h1>
                  <p className="text-sm text-muted-foreground">[Descrição]</p>
                </div>
              </div>
            </header>
            <div className="flex flex-col items-center gap-4 px-4 py-8 border border-t-0 rounded-md rounded-t-none gap-x-4 border-muted-foreground/25 sm:px-6">
              <div className="grid items-center justify-between w-full grid-cols-3 gap-x-4">
                <Label className="flex flex-col col-span-2 text-sm font-medium leading-none gap-y-1">
                  <span>Modelo</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Selecione o modelo a ser utilizado: <b>Arquivo,Acadia Biquad, Audemat, Audemat Enc. Silver ou Inovonics</b></span>
                </Label>
                <Select>
                  <SelectTrigger className="flex-1 h-8 text-xs border bg-muted border-muted-foreground/10">
                    <SelectValue placeholder="Selecione o modelo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Modelo</SelectLabel>
                      <SelectItem value="1">Arquivo</SelectItem>
                      <SelectItem value="2">Acadia (Biquad)</SelectItem>
                      <SelectItem value="3">Audemat</SelectItem>
                      <SelectItem value="4">Audemat (Enc. Silver)</SelectItem>
                      <SelectItem value="5">Inovonics</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid items-center justify-between w-full grid-cols-3 gap-x-4">
                <Label className="flex flex-col col-span-2 text-sm font-medium leading-none gap-y-1">
                  <span>Endereço do encoder RDS</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Informe o endereço IP e porta do encoder RDS <b>(IP:Porta)</b></span>
                </Label>
                <Input className="flex-1 dark:bg-black border-muted-foreground/25 placeholder:text-xs" />
              </div>
              <div className="grid items-center justify-between w-full grid-cols-3 gap-x-4">
                <Label className="flex flex-col col-span-2 text-sm font-medium leading-none gap-y-1">
                  <span>Texto padrão</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Informe o texto que será enviado quando não estiver executando música e nos blocos comerciais sem título</span>
                </Label>
                <Input className="flex-1 dark:bg-black border-muted-foreground/25 placeholder:text-xs" />
              </div>
              <div className="grid items-center justify-between w-full grid-cols-3 gap-x-4">
                <Label className="flex flex-col col-span-2 text-sm font-medium leading-none gap-y-1">
                  <span>Enviar comerciais</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Enviar o nome das inserções comerciais em execução</span>
                </Label>
                <Switch className="ml-auto" checked id="adm" />
              </div>
              <div className="grid items-center justify-between w-full grid-cols-3 gap-x-4">
                <Label className="flex flex-col col-span-2 text-sm font-medium leading-none gap-y-1">
                  <span>Remover carecteres especiais</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Remove caracteres especiais do nome da inserção</span>
                </Label>
                <Switch className="ml-auto" checked id="adm" />
              </div>
            </div>
          </div>
          <div>
            <header className="justify-between px-4 py-6 mx-auto border rounded-md rounded-b-none border-muted-foreground/25 sm:flex sm:px-6">
              <div className="flex items-center w-full">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight">RSS</h1>
                  <p className="text-sm text-muted-foreground">[Descrição]</p>
                </div>
              </div>
            </header>
            <div className="flex flex-col items-center gap-4 px-4 py-8 border border-t-0 rounded-md rounded-t-none gap-x-4 border-muted-foreground/25 sm:px-6">
              <div className="grid items-center justify-between w-full grid-cols-3 gap-x-4">
                <Label className="flex flex-col col-span-2 text-sm font-medium leading-none gap-y-1">
                  <span>Endereço de Feed</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Adicione as URLS separadas por <b>;</b></span>
                </Label>
                <Input className="flex-1 dark:bg-black border-muted-foreground/25 placeholder:text-xs" />
              </div>
              <div className="grid items-center justify-between w-full grid-cols-3 gap-x-4">
                <Label className="flex flex-col col-span-2 text-sm font-medium leading-none gap-y-1">
                  <span>Intervalo em segundos para envio de RDS</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Configure quantos segundos a aplicação deve esperar deve esperar antes de enviar outro titulo de notícia para o RDS</span>
                </Label>
                <Input placeholder="180" className="flex-1 dark:bg-black border-muted-foreground/25 placeholder:text-xs" />
              </div>
              <div className="grid items-center justify-between w-full grid-cols-3 gap-x-4">
                <Label className="flex flex-col col-span-2 text-sm font-medium leading-none gap-y-1">
                  <span>Tamanho do campo PS do RDS</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Verificar documentação do RDS <b>(Padrão: 64)</b></span>
                </Label>
                <Input placeholder="64" className="flex-1 dark:bg-black border-muted-foreground/25 placeholder:text-xs" />
              </div>
              <div className="grid items-center justify-between w-full grid-cols-3 gap-x-4">
                <Label className="flex flex-col col-span-2 text-sm font-medium leading-none gap-y-1">
                  <span>Tamanho do campo RT do RDS</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Verificar documentação do RDS <b>(Padrão: 64)</b></span>
                </Label>
                <Input placeholder="64" className="flex-1 dark:bg-black border-muted-foreground/25 placeholder:text-xs" />
              </div>
              <div className="grid items-center justify-between w-full grid-cols-3 gap-x-4">
                <Label className="flex flex-col col-span-2 text-sm font-medium leading-none gap-y-1">
                  <span>Enviar o mesmo para o campo RT e PS</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Enviar o título da notícia para os campos <b>PS</b> e <b>RT</b> do <b>RDS</b></span>
                </Label>
                <Switch className="ml-auto" checked id="adm" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="fixed bottom-0 left-0 flex justify-end w-full p-4 border border-t shadow border-muted-foreground/25 bg-muted">
        <div className="flex flex-row items-center justify-between gap-x-2">
          <Button size={'sm'} variant={'ghost'} disabled>
            Cancelar
          </Button>
          <Button size={'sm'} disabled>
            Salvar
          </Button>
        </div>
      </footer>
    </main>
  )
}