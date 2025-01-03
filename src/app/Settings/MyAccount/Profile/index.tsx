import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Trash2 } from "lucide-react"

export const Profile = () => {
  return (
    <div className="flex flex-1 p-3">
      <div className="justify-center w-full max-w-full mx-auto lg:max-w-3xl">
        <div>
          <header className="justify-between px-4 py-6 mx-auto border rounded-t-md border-muted-foreground/25 sm:flex sm:px-6">
            <div className="flex items-center w-full">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Perfil</h1>
                <p className="text-sm text-muted-foreground">Gerencie as configurações para seu idioma e fuso horário</p>
              </div>
            </div>
          </header>
          <div className="px-4 pt-8 pb-10 border-muted-foreground/25 border-x sm:px-6">
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
                <Label className="flex flex-col text-sm font-medium leading-none gap-y-1">
                  <span>Administrador</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Accesso total ao painel de configurações</span>
                </Label>
                <Switch checked id="adm" />
              </div>
              <div className="flex flex-row items-center justify-between w-full gap-x-4">
                <Label className="flex flex-col text-sm font-medium leading-none gap-y-1">
                  <span>Operador do ar</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">O nome do deste operador aparecerá na lista de operadores no estúdio do ar</span>
                </Label>
                <Switch checked id="adm" />
              </div>
              <div className="flex flex-row items-center justify-between w-full gap-x-4">
                <Label className="flex flex-col text-sm font-medium leading-none gap-y-1">
                  <span>Operador da rede</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">O nome deste operador aparecerá na lista de operadores quando o programa for executado via rede.</span>
                </Label>
                <Switch checked id="adm" />
              </div>
              <div className="flex flex-row items-center justify-between w-full gap-x-4">
                <Label className="flex flex-col text-sm font-medium leading-none gap-y-1">
                  <span>Visualizar em tempo real</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Durante a operação via rede, visualizar em tempo real o progesso da programação</span>
                </Label>
                <Switch checked id="adm" />
              </div>
              <div className="flex flex-row items-center justify-between w-full gap-x-4">
                <Label className="flex flex-col text-sm font-medium leading-none gap-y-1">
                  <span>Permite operação remota</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">É permitido a este operador iniciar, parar e avençar a programação remotamente.</span>
                </Label>
                <Switch id="adm" />
              </div>
            </div>
          </div>
          <div className="flex justify-end px-6 py-4 border rounded-b-md border-muted-foreground/25 bg-muted">
            <Button size={'sm'} disabled>
              Atualizar
            </Button>
          </div>
          <div className="flex flex-col p-6 mt-6 border border-b-0 rounded-md rounded-b-none border-muted-foreground/25">
            <Label className="text-sm font-semibold text-red-700 ">
              Zona de perigo
            </Label>
            <span className="text-xs text-muted-foreground">
              Atenção! A exclusão da conta não pode ser desfeita.
            </span>
          </div>
          <div className="flex justify-end px-6 py-4 border rounded-b-md border-muted-foreground/25 bg-muted">
            <Button size={'sm'} variant={'destructive'}>
              <Trash2 />
              <span>
                Deletar operador
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}