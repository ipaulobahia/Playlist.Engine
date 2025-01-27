import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { FAKE_USERS_DATA } from "@/utils/fakeData"
import { ListFilter, Search } from "lucide-react"
import { useState } from "react"
import { BtnProfile, DrawerDialogOperatorPin } from "./components"
import { Button } from "@/components/ui/button"

export const CardOperators = () => {
  const [operators] = useState([...FAKE_USERS_DATA])

  return (
    <Card className="col-span-2 p-5 border rounded-lg bg-background dark:border-muted-foreground/25 border-muted-foreground/20">
      <div className="grid grid-cols-1 xl:grid-cols-3">
        <div className="col-span-1 pb-5 pr-3 space-y-3">
          <div className="flex flex-col space-y-1.5">
            <span className="text-xl font-semibold leading-none tracking-tight">Seleção de operadores</span>
            <span className="text-sm text-muted-foreground">
              Pesquise pelo o seu operador ou filtre pelos perfils disponiveis na sua emissora.
            </span>
          </div>
          <div className="flex flex-row items-center justify-between gap-x-2">
            <div className="relative w-full">
              <Input type="operador" className="dark:bg-black border-muted-foreground/25 placeholder:text-xs" placeholder="Pesquise pelo operador..." />
              <span className="absolute inset-y-0 flex items-center right-3">
                <Search size={16} />
              </span>
            </div>
            <Button size={'sm'} variant={'outline'} className="rounded lg:hidden h-9 text-muted-foreground">
              <ListFilter />
              <span className="sr-only">
                Filtros
              </span>
            </Button>
          </div>
          <BtnProfile />
        </div>
        <div className="grid max-h-[420px] overflow-auto grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 col-span-2 gap-4">
          {operators.map((operator) => <DrawerDialogOperatorPin operator={operator} />)}
        </div>
      </div>
    </Card>
  )
}