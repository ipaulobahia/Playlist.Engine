import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const Advanced = () => {
  return (
    <main className="relative flex flex-1 p-5 pb-20">
      <div className="justify-center w-full max-w-full mx-auto lg:max-w-3xl">
        <div className="space-y-5">
          <div>
            <header className="justify-between px-4 py-6 mx-auto border rounded-md rounded-b-none border-muted-foreground/25 sm:flex sm:px-6">
              <div className="flex items-center w-full">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight">Avançados</h1>
                  <p className="text-sm text-muted-foreground">[Descrição]</p>
                </div>
              </div>
            </header>
            <div className="flex flex-col items-center gap-4 px-4 py-8 border border-t-0 rounded-md rounded-t-none gap-x-4 border-muted-foreground/25 sm:px-6">
              <div className="flex flex-row items-center justify-between w-full gap-x-4">
                <Label className="flex flex-col text-sm font-medium leading-none gap-y-1 w-[65%]">
                  <span>Título</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Nome da emissora</span>
                </Label>
                <Input placeholder="" className="w-full max-w-[200px] dark:bg-black border-muted-foreground/25 placeholder:text-xs" />
              </div>
              <div className="flex flex-row items-center justify-between w-full gap-x-4">
                <Label className="flex flex-col text-sm font-medium leading-none gap-y-1 w-[65%]">
                  <span>Computador do AR (IP)</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Nome ou IP do computador do ar para comunição com as estações da rede.</span>
                </Label>
                <Input placeholder="" className="w-full max-w-[200px] dark:bg-black border-muted-foreground/25 placeholder:text-xs" />
              </div>
              <div className="flex flex-row items-center justify-between w-full gap-x-4">
                <Label className="flex flex-col text-sm font-medium leading-none gap-y-1 w-[65%]">
                  <span>Porta de dados</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Porta de dados para comunicação com as estações da rede.</span>
                </Label>
                <Input placeholder="3030" className="w-full max-w-[200px] dark:bg-black border-muted-foreground/25 placeholder:text-xs" />
              </div>
              <div className="flex flex-row items-center justify-between w-full gap-x-4">
                <Label className="flex flex-col text-sm font-medium leading-none gap-y-1 w-[65%]">
                  <span>Servidor Proxy</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Informe a URL do servidor no formato <b>servidor:porta</b>. Deixe em branco para não utilizar um servidor proxy.</span>
                </Label>
                <Input placeholder="" className="w-full max-w-[200px] dark:bg-black border-muted-foreground/25 placeholder:text-xs" />
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