import { BRFlag, ESFlag, EUAFlag } from "@/assets/flags"
import { DarkMode, LighMode, SystemMode } from "@/assets/images"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

export const Appearance = () => {
  return (
    <main className="relative flex flex-1 p-5 pb-20">
      <div className="justify-center w-full max-w-full mx-auto lg:max-w-3xl">
        <div className="space-y-5">
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
            <div className="flex flex-row justify-between px-4 pt-8 pb-10 border-b gap-x-4 border-muted-foreground/25 border-x sm:px-6">
              <div className="flex flex-col items-start gap-2 cursor-pointer">
                <img src={SystemMode} className="flex items-center justify-center flex-1 rounded-lg h-36 " />
                <span className="text-sm font-semibold text-accent-foreground">
                  Padrão do sitema
                </span>
              </div>
              <div className="flex flex-col items-start gap-2 cursor-pointer">
                <img src={LighMode} className="flex items-center justify-center flex-1 rounded-lg h-36 " />
                <span className="text-sm font-semibold text-accent-foreground">
                  Modo claro
                </span>
              </div>
              <div className="flex flex-col items-start gap-2 cursor-pointer">
                <img src={DarkMode} className="flex items-center justify-center flex-1 rounded-lg h-36 " />
                <span className="text-sm font-semibold text-accent-foreground">
                  Modo escuro
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="justify-between px-4 py-6 mx-auto border rounded-t-md border-muted-foreground/25 sm:flex sm:px-6">
              <div className="flex items-center w-full">
                <div>
                  <h1 className="text-lg font-bold tracking-tight">Idioma</h1>
                  <p className="text-xs text-muted-foreground">Isso irá alterar o idioma padrão da sua aplicação.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between px-4 pt-8 pb-10 border-b gap-x-4 border-muted-foreground/25 border-x sm:px-6">
              <Select>
                <SelectTrigger className="text-xs">
                  <SelectValue placeholder="Selecione um idioma" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="BR">
                    <div className="flex flex-row items-center gap-x-1">
                      <BRFlag />
                      <span>
                        Português
                      </span>
                    </div>
                  </SelectItem>
                  <SelectItem value="EUA">
                    <div className="flex flex-row items-center gap-x-1">
                      <EUAFlag />
                      <span>
                        Inglês
                      </span>
                    </div>
                  </SelectItem>
                  <SelectItem value="ES">
                    <div className="flex flex-row items-center gap-x-1">
                      <ESFlag />
                      <span>
                        Espanhol
                      </span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          {/* <div>
            <div className="justify-between px-4 py-6 mx-auto border rounded-t-md border-muted-foreground/25 sm:flex sm:px-6">
              <div className="flex items-center w-full">
                <div>
                  <h1 className="text-lg font-bold tracking-tight">Formato de visualização</h1>
                  <p className="text-xs text-muted-foreground">Isso se aplica a todo formato de visualização de dados</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-start px-4 pt-8 pb-10 border-b gap-x-4 border-muted-foreground/25 border-x sm:px-6">
              <div className="flex flex-col items-start gap-2 cursor-pointer">
                <img src={ListView} className="flex items-center justify-center flex-1 rounded-lg h-36 " />
                <span className="text-sm font-semibold text-accent-foreground">
                  Lista
                </span>
              </div>
              <div className="flex flex-col items-start gap-2 cursor-pointer">
                <img src={TableView} className="flex items-center justify-center flex-1 rounded-lg h-36 " />
                <span className="text-sm font-semibold text-accent-foreground">
                  Tabela
                </span>
              </div>
            </div>
          </div> */}
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