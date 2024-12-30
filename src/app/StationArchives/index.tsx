import { SidebarInset } from "@/components/ui/sidebar"
import { CloudUpload, FilePlus2, FolderPlus, Plus, SquareArrowOutUpRight } from "lucide-react"
import { ActionCard, UpdateCard, AllFilesTable, StationArchivesBreadchumbs } from "./components"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export const StationArchives = () => {

  return (
    <SidebarInset className="p-3">
      <StationArchivesBreadchumbs />
      <div className="p-4 space-y-3 border rounded shadow-sm border-muted-foreground/25 bg-sidebar">
        <div className="flex flex-col gap-0.5">
          <span className="text-xl font-semibold">Arquivos da emissora</span>
          <span className="text-sm font-normal text-muted-foreground">Organize e gerencie seus arquivos de forma prática e eficiente</span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <Dialog>
            <DialogTrigger className="text-start">
              <ActionCard title="Criar pasta" MainIcon={FolderPlus} SubIcon={Plus} />
            </DialogTrigger>
            <DialogContent className="gap-y-5">
              <DialogHeader>
                <DialogTitle>Criar nova pasta</DialogTitle>
                <DialogDescription>
                  Crie uma nova pasta que ficará associada a sua emissora.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="grid items-center gap-3">
                  <Label htmlFor="name" className="text-left tex">
                    Nome da pasta
                  </Label>
                  <Input id="name" placeholder="Pasta de músicas" className="placeholder:text-xs" />
                </div>
                <div className="grid items-center gap-3">
                  <Label htmlFor="description" className="text-left tex">
                    Descrição
                  </Label>
                  <Textarea className="max-h-44 min-h-32 placeholder:text-xs" placeholder="Escreva uma boa descrição para identificar a pasta." />
                </div>
              </div>
              <DialogFooter className="flex items-center w-full sm:justify-between">
                <Button size={'default'} variant={'outline'}>Cancelar</Button>
                <Button size={'default'}>Criar</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger className="text-start">
              <ActionCard title="Criar arquivo" MainIcon={FilePlus2} SubIcon={Plus} />
            </DialogTrigger>
            <DialogContent></DialogContent>
          </Dialog>
          <ActionCard title="Gerenciar uploads" MainIcon={CloudUpload} SubIcon={SquareArrowOutUpRight} />
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-[16px] font-medium">
            Atualizações recentes
          </span>
          <div className="grid grid-cols-5 gap-4">
            {[...Array(5)].map((_, index) => { return (<UpdateCard key={index} />) })}
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-[16px] font-medium">
            Todos os arquivos
          </span>
          <AllFilesTable />
        </div>
      </div>
    </SidebarInset >
  )
}