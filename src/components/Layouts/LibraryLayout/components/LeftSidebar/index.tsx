import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu"
import { Input } from "@/components/ui/input"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { FAKE_LIST_CATEGORY } from "@/utils/fakeData"
import { FolderOpen, Info, Search, Star } from "lucide-react"

export const LeftSidebar = () => {
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
        <SidebarGroup>
          <SidebarGroupLabel>Categorias</SidebarGroupLabel>
          <SidebarGroupContent className="overflow-auto max-h-[70vh]">
            <SidebarMenu>
              {
                FAKE_LIST_CATEGORY.map(({ icon, name }, index) => {
                  return (
                    <ContextMenu>
                      <ContextMenuTrigger asChild key={index}>
                        <SidebarMenuItem>
                          <SidebarMenuButton className="flex flex-row items-center justify-start">
                            <img src={icon} className="w-3.5 h-3.5" />
                            <span>
                              {name}
                            </span>
                          </SidebarMenuButton>
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