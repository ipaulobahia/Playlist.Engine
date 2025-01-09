import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu"
import { Input } from "@/components/ui/input"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { IFolders, useFolders } from "@/service/api/folders/getFolders"
import { getIcon } from "@/service/api/icons/getIcon"
import { Folder, FolderOpen, Info, Search, Star } from "lucide-react"
import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"

export const LeftSidebar = () => {
  const [searchParams] = useSearchParams();
  const folderId = searchParams.get("folderId");

  const [foldersList, setFoldersList] = useState<{ id: number, folderName: string; icon: string; }[]>();
  const { data } = useFolders()

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
    <Sidebar collapsible="none" className="fixed z-10 hidden h-screen border-r sm:block top-14 border-muted-foreground/25">
      <SidebarContent>
        <div className="p-2 pb-0">
          <div className="relative">
            <Input type="operador" className="dark:bg-black border-muted-foreground/25 placeholder:text-xs" placeholder="Pesquise pelo arquivo..." />
            <span className="absolute inset-y-0 flex items-center right-3">
              <Search size={16} />
            </span>
          </div>
        </div>
        <SidebarGroup className="pt-0">
          <SidebarGroupLabel>Favoritos</SidebarGroupLabel>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Pastas</SidebarGroupLabel>
          <SidebarGroupContent className="overflow-auto max-h-[70vh]">
            <SidebarMenu>
              {
                foldersList && foldersList.map(({ id, folderName, icon }) => {
                  return (
                    <ContextMenu>
                      <ContextMenuTrigger asChild key={id}>
                        <SidebarMenuItem className={`${(folderId === id.toString()) && 'bg-sidebar-accent text-sidebar-accent-foreground'}`}>
                          <Link to={`/archive?folderId=${id}&folderName=${folderName}`}>
                            <SidebarMenuButton className="flex flex-row items-center justify-start">
                              {
                                icon == ""
                                  ?
                                  <Folder size={16} />
                                  :
                                  <img src={icon} className="size-4" />
                              }
                              <span>
                                {folderName}
                              </span>
                            </SidebarMenuButton>
                          </Link>
                        </SidebarMenuItem>
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
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}