import { SidebarInset } from "@/components/ui/sidebar"
import { CloudUpload, FilePlus2, FolderOpen, FolderPlus, Info, Plus, SquareArrowOutUpRight, Star } from "lucide-react"
import { ActionCard } from "./components"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useFolders } from "@/service/api/folders/getFolders"
import { Link } from "react-router-dom"
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu"
import { Card } from "@/components/ui/card"
import { FolderIcon } from "@/components/ui/folder-icon"

export const StationArchives = () => {
  const { data } = useFolders()

  return (
    <SidebarInset className="py-5 space-y-3">
      {/* <StationArchivesBreadchumbs /> */}
      <div className="flex flex-col px-5 gap-0.5">
        <span className="text-xl font-semibold">Arquivos da emissora</span>
        <span className="text-sm font-normal text-muted-foreground">Organize e gerencie seus arquivos de forma prática e eficiente</span>
      </div>
      <div className="grid grid-cols-1 gap-3 px-5 md:grid-cols-2 xl:grid-cols-3">
        <Dialog>
          <DialogTrigger className="text-start">
            <ActionCard title="Criar pasta" MainIcon={FolderPlus} SubIcon={Plus} />
          </DialogTrigger>
          <DialogContent className="gap-y-5 w-[90%]">
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
            <DialogFooter className="flex flex-row items-center justify-between w-full">
              <Button size={'sm'} variant={'outline'}>Cancelar</Button>
              <Button size={'sm'}>Criar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger className="text-start">
            <ActionCard title="Criar arquivo" MainIcon={FilePlus2} SubIcon={Plus} />
          </DialogTrigger>
          <DialogContent className="w-[90%]"></DialogContent>
        </Dialog>
        <ActionCard className="md:col-span-2 xl:col-span-1" title="Gerenciar uploads" MainIcon={CloudUpload} SubIcon={SquareArrowOutUpRight} />
      </div>
      <div className="flex flex-col px-5">
        <span className="text-base font-medium">
          Arquivos
        </span>
        <div className="grid grid-cols-1 gap-3 mt-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {
            data && data.folders.map((folder) => {
              const { folderId: id, folderName, icon } = folder
              return (
                <ContextMenu key={id}>
                  <ContextMenuTrigger asChild>
                    <Link className="w-full" to={`/archive?folderId=${id}`}>
                      <Card className="flex flex-row items-start gap-3 p-3 bg-transparent rounded cursor-pointer border-muted-foreground/25 dark:hover:bg-muted/50 hover:bg-muted">
                        <div className="flex items-center justify-center rounded bg-accent-foreground/30 dark:bg-accent size-9">
                          <FolderIcon iconName={icon} />
                        </div>
                        <div className="flex flex-col w-full">
                          <div className="flex flex-row items-start justify-between">
                            <span className="text-[13px] font-medium">
                              {folderName}
                            </span>
                          </div>
                          <div className="flex flex-row items-center gap-0.5">
                            <span className="text-xs font-normal text-muted-foreground">{Math.floor(Math.random() * (20 - 0 + 1) + 0)} arquivos</span>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </ContextMenuTrigger>
                  <ContextMenuContent>
                    <ContextMenuItem className="flex flex-row items-center gap-x-2">
                      <FolderOpen size={16} />
                      <span>
                        Abrir
                      </span>
                    </ContextMenuItem>
                    <ContextMenuItem className="flex flex-row items-center gap-x-2">
                      <Star size={16} />
                      <span>
                        Favoritar
                      </span>
                    </ContextMenuItem>
                    <ContextMenuItem className="flex flex-row items-center gap-x-2">
                      <Info size={16} />
                      <span>
                        Detalhes
                      </span>
                    </ContextMenuItem>
                  </ContextMenuContent>
                </ContextMenu>
              )
            })
          }
        </div>
      </div>
    </SidebarInset >
  )
}