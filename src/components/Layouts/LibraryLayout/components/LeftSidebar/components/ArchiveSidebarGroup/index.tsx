import { FileContextMenu } from "@/components/FileContextMenu"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Input } from "@/components/ui/input"
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from "@/components/ui/sidebar"
import { FolderOpen, Search } from "lucide-react"

export const ArchiveSidebarGroup = () => {
  return (
    <SidebarGroup>
      <div className="relative">
        <Input type="operador" className="dark:bg-black border-muted-foreground/25 placeholder:text-xs" placeholder="Pesquise pelo arquivo..." />
        <span className="absolute inset-y-0 flex items-center right-3">
          <Search size={16} />
        </span>
      </div>
      <SidebarGroupLabel>[Nome da Categoria]</SidebarGroupLabel>
      <SidebarMenu>
        <Collapsible asChild open>
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton>
                <FolderOpen />
                <span className="text-xs">[Nome da Pasta]</span>
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent className="pb-16">
              <SidebarMenuSub>
                {[...Array(45)].map((_, index) => (
                  <FileContextMenu key={index}>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <span className="text-xs">Arquivos - {index.toString().padStart(2, "0")}</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </FileContextMenu>
                ))}
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
      </SidebarMenu>
    </SidebarGroup>
  )
}