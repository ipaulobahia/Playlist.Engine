import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { DialogClose } from "@radix-ui/react-dialog"
import { Trash2 } from "lucide-react"

export const Operator = () => {
  return (
    <main className="relative flex flex-1 p-5 pb-20">
      <div className="justify-center w-full max-w-full mx-auto lg:max-w-3xl">
        <header className="justify-between px-4 py-6 mx-auto border rounded-md rounded-b-none border-muted-foreground/25 sm:flex sm:px-6">
          <div className="flex items-center w-full">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Operador</h1>
              <p className="text-sm text-muted-foreground">Gerencie as configurações do seu operador</p>
            </div>
          </div>
        </header>
        <div className="px-4 py-8 border border-t-0 rounded-md rounded-t-none border-muted-foreground/25 sm:px-6">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col w-full gap-3">
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                type="text"
                placeholder="Operador"
                required
                className="dark:bg-black border-muted-foreground/25 placeholder:text-xs"
              />
            </div>
            <div className="flex flex-col w-full gap-3">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="text"
                placeholder="********"
                required
                className="dark:bg-black border-muted-foreground/25 placeholder:text-xs"
              />
            </div>
            <div className="flex flex-row items-center justify-between w-full gap-x-4">
              <Label className="flex flex-col text-sm font-medium leading-none gap-y-1 w-[65%]">
                <span>Administrador</span>
                <span className="text-xs font-normal leading-snug text-muted-foreground">Accesso total ao painel de configurações</span>
              </Label>
              <Switch checked id="adm" />
            </div>
            <div className="flex flex-row items-center justify-between w-full gap-x-4">
              <Label className="flex flex-col text-sm font-medium leading-none gap-y-1 w-[65%]">
                <span>Operador do ar</span>
                <span className="text-xs font-normal leading-snug text-muted-foreground">O nome do deste operador aparecerá na lista de operadores no estúdio do ar</span>
              </Label>
              <Switch checked id="adm" />
            </div>
            <div className="flex flex-row items-center justify-between w-full gap-x-4">
              <Label className="flex flex-col text-sm font-medium leading-none gap-y-1 w-[65%]">
                <span>Operador da rede</span>
                <span className="text-xs font-normal leading-snug text-muted-foreground">O nome deste operador aparecerá na lista de operadores quando o programa for executado via rede.</span>
              </Label>
              <Switch checked id="adm" />
            </div>
            <div className="flex flex-row items-center justify-between w-full gap-x-4">
              <Label className="flex flex-col text-sm font-medium leading-none gap-y-1 w-[65%]">
                <span>Visualizar em tempo real</span>
                <span className="text-xs font-normal leading-snug text-muted-foreground">Durante a operação via rede, visualizar em tempo real o progesso da programação</span>
              </Label>
              <Switch checked id="adm" />
            </div>
            <div className="flex flex-row items-center justify-between w-full gap-x-4">
              <Label className="flex flex-col text-sm font-medium leading-none gap-y-1 w-[65%]">
                <span>Permite operação remota</span>
                <span className="text-xs font-normal leading-snug text-muted-foreground">É permitido a este operador iniciar, parar e avençar a programação remotamente.</span>
              </Label>
              <Switch id="adm" />
            </div>
          </div>
        </div>
      </div>
      <footer className="fixed bottom-0 left-0 flex justify-end w-full p-4 border border-t shadow border-muted-foreground/25 bg-muted">
        <div className="flex flex-row items-center justify-between gap-x-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button size={'sm'} variant={'destructive'}>
                <Trash2 />
                <span>
                  Remover operador
                </span>
              </Button>
            </DialogTrigger>
            <DialogContent className="w-[90%]">
              <DialogHeader>
                <DialogTitle>
                  <Label className="text-base font-bold text-red-700 ">
                    Zona de perigo
                  </Label>
                </DialogTitle>
                <DialogDescription>
                  Você tem certeza que deseja fazer isso? Ao completar essa ação os dados desse operador não poderam ser recuperados.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="flex flex-row items-center justify-between w-full">
                <DialogClose asChild>
                  <Button size={'sm'} variant={'outline'}>Cancelar</Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button size={'sm'} variant={'destructive'}>
                    Remover
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Button size={'sm'} variant={'ghost'} disabled>
            Cancelar
          </Button>
          <Button size={'sm'} disabled>
            Salvar
          </Button>
        </div>
      </footer>
    </main >
  )
}