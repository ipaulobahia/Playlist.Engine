import { DarkMode, LighMode, SystemMode } from "@/assets/images"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export const Appearance = () => {
  return (
    <div className="flex flex-1 p-3">
      <div className="justify-center w-full max-w-full mx-auto lg:max-w-3xl">
        <div className="space-y-8">
          <header className="justify-between px-4 py-6 mx-auto border rounded-md bg-muted border-muted-foreground/25 sm:flex sm:px-6">
            <div className="flex items-center w-full">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Aparência</h1>
                <p className="text-sm text-muted-foreground">Gerencie as configurações da aparência do seu Playlist Engine</p>
              </div>
            </div>
          </header>
          <Separator className="bg-muted-foreground/25" />
          <div>
            <div className="justify-between px-4 py-6 mx-auto border rounded-t-md border-muted-foreground/25 sm:flex sm:px-6">
              <div className="flex items-center w-full">
                <div>
                  <h1 className="text-lg font-bold tracking-tight">Tema da aplicação</h1>
                  <p className="text-xs text-muted-foreground">Isso se aplica a toda aplicação</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between px-4 pt-8 pb-10 gap-x-4 border-muted-foreground/25 border-x sm:px-6">
              <div className="flex flex-col items-center gap-2 cursor-pointer">
                <img src={SystemMode} className="flex items-center justify-center flex-1 rounded-lg h-36 " />
                <span className="text-sm font-semibold text-accent-foreground">
                  Padrão do sitema
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 cursor-pointer">
                <img src={LighMode} className="flex items-center justify-center flex-1 rounded-lg h-36 " />
                <span className="text-sm font-semibold text-accent-foreground">
                  Modo claro
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 cursor-pointer">
                <img src={DarkMode} className="flex items-center justify-center flex-1 rounded-lg h-36 " />
                <span className="text-sm font-semibold text-accent-foreground">
                  Modo escuro
                </span>
              </div>
            </div>
            <div className="flex justify-end px-6 py-4 border rounded-b-md border-muted-foreground/25 bg-muted">
              <Button size={'sm'} disabled>
                Atualizar
              </Button>
            </div>
          </div>
          <div>
            <div className="justify-between px-4 py-6 mx-auto border rounded-t-md border-muted-foreground/25 sm:flex sm:px-6">
              <div className="flex items-center w-full">
                <div>
                  <h1 className="text-lg font-bold tracking-tight">Formato de visualização</h1>
                  <p className="text-xs text-muted-foreground">Isso se aplica a todo formato de visualização de dados</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between px-4 pt-8 pb-10 gap-x-4 border-muted-foreground/25 border-x sm:px-6">
              <div className="flex items-center justify-center flex-1 rounded-lg h-36 bg-muted" />
              <div className="flex items-center justify-center flex-1 rounded-lg h-36 bg-muted" />
              <div className="flex items-center justify-center flex-1 rounded-lg h-36 bg-muted" />
            </div>
            <div className="flex justify-end px-6 py-4 border rounded-b-md border-muted-foreground/25 bg-muted">
              <Button size={'sm'} disabled>
                Atualizar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}