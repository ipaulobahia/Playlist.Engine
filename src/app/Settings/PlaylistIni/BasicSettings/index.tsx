import { Button } from "@/components/ui/button"
import { CommercialBlock, CommercialClock, MusicalBlock, MusicalClock } from "./components"

export const BasicSettings = () => {

  return (
    <main className="relative flex flex-1 p-5 pb-20">
      <div className="justify-center w-full max-w-full mx-auto lg:max-w-3xl">
        <div className="space-y-5">
          <header className="justify-between px-4 py-6 mx-auto border rounded-md rounded-b-none border-muted-foreground/25 sm:flex sm:px-6">
            <div className="flex items-center w-full">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Configurações básicas</h1>
                <p className="text-sm text-muted-foreground">[Descrição]</p>
              </div>
            </div>
          </header>
          <MusicalBlock />
          <CommercialBlock />
          <MusicalClock />
          <CommercialClock />
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