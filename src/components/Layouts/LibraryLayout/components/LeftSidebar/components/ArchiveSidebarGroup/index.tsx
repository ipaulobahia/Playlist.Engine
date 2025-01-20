import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Input } from "@/components/ui/input"
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from "@/components/ui/sidebar"
import { ChevronRight, FolderOpen, Search } from "lucide-react"

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
                <ChevronRight className="ml-auto transition-transform duration-200 rotate-90" />
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent className="pb-16">
              <SidebarMenuSub>
                {[...Array(45)].map((_, index) => (
                  <SidebarMenuSubItem key={index}>
                    <SidebarMenuSubButton asChild>
                      <span className="text-xs">Arquivos - {index.toString().padStart(2, "0")}</span>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
      </SidebarMenu>
    </SidebarGroup>
  )
}