import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

const FAKE_CONFIG_GENERAL = [
  {
    id: 1,
    name: "Personalizar fontes e cores",
    description: "[Descrição]",
    isChecked: true,
    active: false,
    inputValue: ""
  },
  {
    id: 2,
    name: "Modo dark",
    description: "[Descrição]",
    isChecked: true,
    active: false,
    inputValue: ""
  },
  {
    id: 3,
    name: "Relógio AM/PM",
    description: "[Descrição]",
    isChecked: true,
    active: false,
    inputValue: ""
  },
  {
    id: 4,
    name: "Barra de espaço passa para a próxima inserção",
    description: "[Descrição]",
    isChecked: true,
    active: false,
    inputValue: ""
  },
  {
    id: 5,
    name: "Trava painéis",
    description: "[Descrição]",
    isChecked: true,
    active: false,
    inputValue: ""
  },
  {
    id: 6,
    name: "Bloqueia/desbloqueia blocos",
    description: "[Descrição]",
    isChecked: true,
    active: false,
    inputValue: ""
  },
  {
    id: 7,
    name: "Adiciona inserções",
    description: "[Descrição]",
    isChecked: true,
    active: false,
    inputValue: ""
  },
  {
    id: 8,
    name: "Remover inserções",
    description: "[Descrição]",
    isChecked: true,
    active: false,
    inputValue: ""
  },
  {
    id: 9,
    name: "Move inserções",
    description: "[Descrição]",
    isChecked: true,
    active: false,
    inputValue: ""
  },
  {
    id: 10,
    name: "Salvar edição de blocos",
    description: "[Descrição]",
    isChecked: true,
    active: false,
    inputValue: ""
  },
  {
    id: 11,
    name: "Visualizar as pastas",
    description: "[Descrição]",
    isChecked: true,
    active: false,
    inputValue: ""
  },
  {
    id: 12,
    name: "Toca inserções diretamente das pastas",
    description: "[Descrição]",
    isChecked: true,
    active: false,
    inputValue: ""
  },
  {
    id: 13,
    name: "Edita os arquivos de áudio (Marcadores)",
    description: "[Descrição]",
    isChecked: true,
    active: false,
    inputValue: ""
  },
  {
    id: 14,
    name: "Edita informações do áudio",
    description: "[Descrição]",
    isChecked: true,
    active: false,
    inputValue: ""
  },
  {
    id: 15,
    name: "Converte nomes de arquivos para maiúsculas",
    description: "[Descrição]",
    isChecked: true,
    active: false,
    inputValue: ""
  },
  {
    id: 15,
    name: "Usar carimbos de hora-certa e temperatura",
    description: "[Descrição]",
    isChecked: true,
    active: false,
    inputValue: ""
  }
]

export const General = () => {
  return (
    <div className="relative flex flex-1 p-5 pb-20">
      <div className="justify-center w-full max-w-full mx-auto lg:max-w-3xl">
        <header className="justify-between px-4 py-6 mx-auto border rounded-md rounded-b-none border-muted-foreground/25 sm:flex sm:px-6">
          <div className="flex items-center w-full">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Geral</h1>
              <p className="text-sm text-muted-foreground">[Descrição]</p>
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center gap-4 px-4 py-8 border-b gap-x-4 border-muted-foreground/25 border-x sm:px-6">
          {
            FAKE_CONFIG_GENERAL.map(({ name, description, id }) => {
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
    </div >
  )
}