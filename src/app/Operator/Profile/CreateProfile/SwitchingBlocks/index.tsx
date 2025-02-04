import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export const SwitchingBlocks = () => {

  const FAKE_CONFIG_SWITCHING_BLOCKS = [
    {
      id: 1,
      name: "Sempre pausar a execução ao final de um bloco",
      description: "[Descrição]",
      isChecked: true,
      active: false,
      inputValue: ""
    },
    {
      id: 2,
      name: "Para em blocos vazios",
      description: "[Descrição]",
      isChecked: true,
      active: false,
      inputValue: ""
    },
    {
      id: 3,
      name: "Se parado, exibir o próximo bloco automaticamente no horário",
      description: "[Descrição]",
      isChecked: true,
      active: false,
      inputValue: ""
    },
    {
      id: 4,
      name: "Ignorar todas as trilhas e pausas",
      description: "[Descrição]",
      isChecked: true,
      active: false,
      inputValue: ""
    }
  ]

  return (
    <div className="relative flex flex-1 p-5 pb-20">
      <div className="justify-center w-full max-w-full mx-auto lg:max-w-3xl">
        <header className="justify-between px-4 py-6 mx-auto border rounded-md rounded-b-none border-muted-foreground/25 sm:flex sm:px-6">
          <div className="flex items-center w-full">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Mudanças de blocos</h1>
              <p className="text-sm text-muted-foreground">[Descrição]</p>
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center gap-4 px-4 py-8 border-b gap-x-4 border-muted-foreground/25 border-x sm:px-6">
          {
            FAKE_CONFIG_SWITCHING_BLOCKS.map(({ name, description, id }) => {
              return (
                <div key={id} className="flex flex-row items-center justify-between w-full gap-x-4">
                  <Label className="flex flex-col text-sm font-medium leading-none gap-y-1 w-[65%]">
                    <span>{name}</span>
                    <span className="text-xs font-normal leading-snug text-muted-foreground">{description}</span>
                  </Label>
                  <Switch />
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}