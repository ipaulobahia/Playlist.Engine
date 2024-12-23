import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { FAKE_USERS_DATA } from "@/utils/fakeData"
import { Search } from "lucide-react"
import { useState } from "react"
import { BtnProfile, OperatorPinDialog } from "./components"

export const CardOperators = () => {
  const [operators] = useState([...FAKE_USERS_DATA])

  return (
    <Card className="col-span-2 p-5 border rounded-lg bg-background dark:border-muted-foreground/25 border-muted-foreground/20">
      <div className="grid grid-cols-3">
        <div className="col-span-1 py-5 pr-3 space-y-3">
          <div className="flex flex-col space-y-1.5">
            <span className="text-xl font-semibold leading-none tracking-tight">Seleção de operadores</span>
            <span className="text-sm text-muted-foreground">
              Pesquise pelo o seu operador ou filtre pelos perfils disponiveis na sua emissora.
            </span>
          </div>
          <div className="relative w-full">
            <Input type="operador" className="dark:bg-black border-muted-foreground/25 placeholder:text-xs" placeholder="Pesquise pelo operador..." />
            <span className="absolute inset-y-0 flex items-center right-3">
              <Search size={16} />
            </span>
          </div>
          <BtnProfile />
        </div>
        <div className="grid max-h-[420px] overflow-auto grid-cols-3 col-span-2 gap-4">
          {
            operators.map((item) => {
              return (
                <Dialog>
                  <DialogTrigger asChild>
                    <Card key={item.id} className="flex flex-col items-center justify-center gap-3 p-6 border rounded shadow-none cursor-pointer hover:bg-secondary dark:bg-black border-muted-foreground/20 dark:border-muted/80 dark:hover:bg-secondary/20 dark:hover:text-accent-foreground">
                      <Avatar className="size-16">
                        <AvatarImage src={item.avatar} />
                        <AvatarFallback className="font-bold">{item.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col items-center justify-center gap-1 text-center">
                        <span className="text-sm font-bold">
                          {item.name}
                        </span>
                        <Badge variant={'outline'} className="text-xs font-semibold text-black bg-white rounded">
                          {item.profile}
                        </Badge>
                      </div>
                    </Card>
                  </DialogTrigger>
                  <OperatorPinDialog />
                </Dialog>
              )
            })
          }
        </div>
      </div>
    </Card>
  )
}