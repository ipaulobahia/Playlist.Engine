import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

export const MetadataStreaming = () => {
  return (
    <main className="relative flex flex-1 p-5 pb-20">
      <div className="justify-center w-full max-w-full mx-auto lg:max-w-3xl">
        <div className="space-y-5">
          <div>
            <header className="justify-between px-4 py-6 mx-auto border rounded-md rounded-b-none border-muted-foreground/25 sm:flex sm:px-6">
              <div className="flex items-center w-full">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight">Metadata para streaming</h1>
                  <p className="text-sm text-muted-foreground">[Descrição]</p>
                </div>
              </div>
            </header>
            <div className="flex flex-col items-center gap-4 px-4 py-8 border border-t-0 rounded-md rounded-t-none gap-x-4 border-muted-foreground/25 sm:px-6">
              <div className="grid items-center justify-between w-full grid-cols-3 gap-x-4">
                <Label className="flex flex-col col-span-2 text-sm font-medium leading-none gap-y-1">
                  <span>Serviço</span>
                </Label>
                <Select>
                  <SelectTrigger className="flex-1 h-8 text-xs border bg-muted border-muted-foreground/10">
                    <SelectValue placeholder="Selecione um serviço" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Serviço</SelectLabel>
                      <SelectItem value="1">SHOUTcast</SelectItem>
                      <SelectItem value="2">Icecast</SelectItem>
                      <SelectItem value="3">Logger 2.0</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid items-center justify-between w-full grid-cols-3 gap-x-4">
                <Label className="flex flex-col col-span-2 text-sm font-medium leading-none gap-y-1">
                  <span>Servidor</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Informe o endereço IP e porta do servidor SHOUTcast ou Icecast <b>(IP:Porta)</b></span>
                </Label>
                <Input className="flex-1 dark:bg-black border-muted-foreground/25 placeholder:text-xs" />
              </div>
              <div className="grid items-center justify-between w-full grid-cols-3 gap-x-4">
                <Label className="flex flex-col col-span-2 text-sm font-medium leading-none gap-y-1">
                  <span>Usuário</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Informe o usuário para o servidor Icecast, se necessário, valor padrão <b>(admin)</b></span>
                </Label>
                <Input className="flex-1 dark:bg-black border-muted-foreground/25 placeholder:text-xs" />
              </div>
              <div className="grid items-center justify-between w-full grid-cols-3 gap-x-4">
                <Label className="flex flex-col col-span-2 text-sm font-medium leading-none gap-y-1">
                  <span>Senha</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Informe a senha do servidor SHOUTcast ou Icecast</span>
                </Label>
                <Input className="flex-1 dark:bg-black border-muted-foreground/25 placeholder:text-xs" />
              </div>
              <div className="grid items-center justify-between w-full grid-cols-3 gap-x-4">
                <Label className="flex flex-col col-span-2 text-sm font-medium leading-none gap-y-1">
                  <span>Id</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Informe o ID (Stream ID ou Ponto de montagem) do seu streaming no servidor</span>
                </Label>
                <Input className="flex-1 dark:bg-black border-muted-foreground/25 placeholder:text-xs" />
              </div>
              <div className="grid items-center justify-between w-full grid-cols-3 gap-x-4">
                <Label className="flex flex-col col-span-2 text-sm font-medium leading-none gap-y-1">
                  <span>URL</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Informe o endereço do website da emissora</span>
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