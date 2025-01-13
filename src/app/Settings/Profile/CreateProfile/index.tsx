import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { AccordionSettingsProfile } from "./components"

export const CreateProfile = () => {
  return (
    <div className="relative flex flex-1 p-5 pb-20">
      <div className="justify-center w-full max-w-full mx-auto lg:max-w-3xl">
        <div className="space-y-8">
          <header className="justify-between px-4 py-6 mx-auto border rounded-md bg-muted border-muted-foreground/25 sm:flex sm:px-6">
            <div className="flex items-start justify-between w-full">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">[Nome do perfil]</h1>
                <p className="text-sm text-muted-foreground">[Descrição do perfil]</p>
              </div>
            </div>
          </header>
          <Separator className="bg-muted-foreground/25" />
          <AccordionSettingsProfile />
        </div>
      </div>
      <footer className="fixed bottom-0 left-0 flex justify-end w-full p-4 border border-t shadow border-muted-foreground/25 bg-muted">
        <div className="flex flex-row items-center justify-between gap-x-2">
          <Button variant={'ghost'} disabled>
            Cancelar
          </Button>
          <Button variant={'ghost'} disabled>
            Salvar rascunho
          </Button>
          <Button disabled>
            Salvar
          </Button>
        </div>
      </footer>
    </div>
  )
}