import { SidebarInset } from "@/components/ui/sidebar"
import { CloudUpload, FilePlus2, Folder, FolderOpen, FolderPlus, Info, Plus, SquareArrowOutUpRight, Star } from "lucide-react"
import { ActionCard, UpdateCard } from "./components"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { IFolders, useFolders } from "@/service/api/folders/getFolders"
import { useEffect, useState } from "react"
import { getIcon } from "@/service/api/icons/getIcon"
import { Link } from "react-router-dom"
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu"

export const StationArchives = () => {
  const { data } = useFolders()
  const [foldersList, setFoldersList] = useState<{ id: number, folderName: string; icon: string; }[]>();

  useEffect(() => { if (data) { generateFoldersList(data) } }, [data])

  async function generateFoldersList({ folders }: IFolders) {
    const updatedFolders = await Promise.all(
      folders.map(async (folder) => {
        const icon = await getIcon(folder.icon);
        return { id: folder.folderId, folderName: folder.folderName, icon };
      })
    );

    setFoldersList(updatedFolders);
  }

  return (
    <SidebarInset className="p-3">
      {/* <StationArchivesBreadchumbs /> */}
      <div className="p-4 space-y-3 border rounded shadow-sm border-muted-foreground/25 bg-sidebar">
        <div className="flex flex-col gap-0.5">
          <span className="text-xl font-semibold">Arquivos da emissora</span>
          <span className="text-sm font-normal text-muted-foreground">Organize e gerencie seus arquivos de forma prática e eficiente</span>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
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
                <Button size={'default'} variant={'outline'}>Cancelar</Button>
                <Button size={'default'}>Criar</Button>
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
        <div className="flex flex-col gap-3">
          <span className="text-[16px] font-medium">
            Atualizações recentes
          </span>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
            {[...Array(5)].map((_, index) => { return (<UpdateCard key={index} />) })}
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-base font-medium">
            Arquivos
          </span>
          <div className="grid grid-cols-1 gap-3 mt-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {
              foldersList && foldersList.map((folder) => {
                const { id, folderName, icon } = folder
                return (
                  <ContextMenu key={id}>
                    <ContextMenuTrigger asChild>
                      <Link className="w-full" to={`/archive?folderId=${id}`}>
                        <div className="flex flex-row items-center w-full gap-1 px-3 py-4 border rounded-md cursor-pointer border-muted-foreground/25 bg-muted hover:bg-accent/50">
                          {
                            icon == ""
                              ?
                              <Folder size={16} />
                              :
                              <img src={icon} className="size-4" />
                          }
                          <span className="text-xs font-semibold">
                            {folderName}
                          </span>
                        </div>
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
      </div>
    </SidebarInset >
  )
}