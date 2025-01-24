import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export const XmlWeb = () => {
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
              <div className="flex flex-row items-center justify-between w-full gap-x-4">
                <Label className="flex flex-col text-sm font-medium leading-none gap-y-1 w-[65%]">
                  <span>Arquivo com informações do item atual</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Arquivo XML comm informações sobre o item em execução e sobre os próximos eventos.</span>
                </Label>
                <Input className="flex-1 dark:bg-black border-muted-foreground/25 placeholder:text-xs" />
              </div>
              <div className="flex flex-row items-center justify-between w-full gap-x-4">
                <Label className="flex flex-col text-sm font-medium leading-none gap-y-1 w-[65%]">
                  <span>Servidor FTP</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Servidor FTP para envio do XML com informações sobre a programaçã.o</span>
                </Label>
                <Input className="flex-1 dark:bg-black border-muted-foreground/25 placeholder:text-xs" />
              </div>
              <div className="flex flex-row items-center justify-between w-full gap-x-4">
                <Label className="flex flex-col text-sm font-medium leading-none gap-y-1 w-[65%]">
                  <span>Usuário FTP</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Nome do usuário paraa login no servidor FTP.</span>
                </Label>
                <Input className="flex-1 dark:bg-black border-muted-foreground/25 placeholder:text-xs" />
              </div>
              <div className="flex flex-row items-center justify-between w-full gap-x-4">
                <Label className="flex flex-col text-sm font-medium leading-none gap-y-1 w-[65%]">
                  <span>Senha FTP</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Senha do servidor FTP.</span>
                </Label>
                <Input className="flex-1 dark:bg-black border-muted-foreground/25 placeholder:text-xs" />
              </div>
              <div className="flex flex-row items-center justify-between w-full gap-x-4">
                <Label className="flex flex-col text-sm font-medium leading-none gap-y-1 w-[65%]">
                  <span>Arquivo no servidor FTP</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Arquivo deestino no servidor FTP. Pode conter o nome da pasta destino.</span>
                </Label>
                <Input className="flex-1 dark:bg-black border-muted-foreground/25 placeholder:text-xs" />
              </div>
              <div className="flex flex-row items-center justify-between w-full gap-x-4">
                <Label className="flex flex-col text-sm font-medium leading-none gap-y-1 w-[65%]">
                  <span>FTP Passivo</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Enviar o arquivo usando conexão FTP em modo passivo.</span>
                </Label>
                <Switch checked id="adm" />
              </div>
              <div className="flex flex-row items-center justify-between w-full gap-x-4">
                <Label className="flex flex-col text-sm font-medium leading-none gap-y-1 w-[65%]">
                  <span>Enviar XML para UDP</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Informe um endereço IP e porta UDP para o envio do XML.</span>
                </Label>
                <Input className="flex-1 dark:bg-black border-muted-foreground/25 placeholder:text-xs" />
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