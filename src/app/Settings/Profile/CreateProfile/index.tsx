import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { AccordionSettingsProfile } from "./components"

export const CreateProfile = () => {
  return (
    <div className="flex flex-1 p-5">
      <div className="justify-center w-full max-w-full mx-auto lg:max-w-3xl">
        <div className="space-y-8">
          <header className="justify-between px-4 py-6 mx-auto border rounded-md bg-muted border-muted-foreground/25 sm:flex sm:px-6">
            <div className="flex items-start justify-between w-full">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">[Nome do perfil]</h1>
                <p className="text-sm text-muted-foreground">[Descrição do perfil]</p>
              </div>
              <Button>
                Salvar
              </Button>
            </div>
          </header>
          <Separator className="bg-muted-foreground/25" />
          <AccordionSettingsProfile />
        </div>
      </div>
    </div>
  )
}