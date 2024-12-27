import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarRail } from "@/components/ui/sidebar"
import { FileText, Folder } from "lucide-react"
import { Link, Outlet } from "react-router-dom"

const data = {
  recentUploads: [
    {
      file: "24-12-2024",
      state: "U",
    },
    {
      file: "Fim de ano é no BK",
      state: "U",
    },
    {
      file: "Vinheta de Fim de Ano",
      state: "M",
    },
  ],
  archivesTree: [
    ["Acervo Musical Rede Aleluia"],
    ["Banda e Cantores Gospel"],
    ["Coleção Rock Clássico"],
    ["Documentos e Registros"],
    ["Fotos do Evento 2024"],
    ["Vídeos do Projeto 2023"],
    ["Diversos Arquivos"],
    ["Arquivos de Áudio"],
    ["Acervo de Discos Vinil"],
    ["Master de Gravações"],
    ["Projetos em Andamento"],
    ["Material Promocional"]
  ],
}

export const ArchivesLayout = () => {
  return (
    <SidebarProvider>
      <Sidebar collapsible="none" className="fixed z-10 h-screen border-r top-14 border-muted-foreground/25">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Upload Recentes</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {data.recentUploads.map(({ file, state }, index) => (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuButton className="flex flex-row items-center gap-1.5">
                      <FileText />
                      <span className="text-xs font-medium">
                        {file}
                      </span>
                    </SidebarMenuButton>
                    <SidebarMenuBadge>{state}</SidebarMenuBadge>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Pastas</SidebarGroupLabel>
            <SidebarGroupContent className="overflow-auto max-h-[70vh]">
              <SidebarMenu>
                {
                  data.archivesTree.map((item, index) => {
                    return (
                      <SidebarMenuItem key={index}>
                        <Link to={`/archive/${index}`}>
                          <SidebarMenuButton>
                            <Folder />
                            {item}
                          </SidebarMenuButton>
                        </Link>
                      </SidebarMenuItem>
                    )
                  })
                }
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <div className="w-full pl-[--sidebar-width]">
        <Outlet />
      </div>
    </SidebarProvider>
  )
}