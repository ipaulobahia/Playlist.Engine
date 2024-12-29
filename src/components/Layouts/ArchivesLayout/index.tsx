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
    { folderName: "Acervo Musical Rede Aleluia", icon: "Icones5_dll_329.png", },
    { folderName: "Cliente", icon: "Icones5_dll_5.png", },
    { folderName: "Comerciais", icon: "Icones5_dll_330.png", },
    { folderName: "Commercial Videos", icon: "Icones5_dll_303.png", },
    { folderName: "Resume", icon: "Icones10_dll_335.png", },
    { folderName: "Downloaded", icon: "folders_dll_7.png", },
    { folderName: "Exact Time", icon: "relogios_dll_3.png", },
    { folderName: "Geral", icon: "Icones5_dll_4.png", },
    { folderName: "Institutional audios", icon: "icones6_dll_0.png", },
    { folderName: "Jingles", icon: "icones6_dll_1.png", },
    { folderName: "Jornalismo", icon: "Icones5_dll_4.png", },
    { folderName: "Nacionais", icon: "icones6_dll_93.png", },
    { folderName: "News", icon: "icones6_dll_66.png", },
    { folderName: "PlayStation", icon: "Icones_dll_23.png", },
    { folderName: "Pop", icon: "icones6_dll_2.png", },
    { folderName: "Pop Seq", icon: "folders_dll_6.png", },
    { folderName: "R&B", icon: "icones6_dll_4.png", },
    { folderName: "Reggae", icon: "Icones5_dll_347.png", },
    { folderName: "Remove Overlays", icon: "Icones5_dll_24.png", },
    { folderName: "Rock", icon: "instrumentos_dll_3.png", },
    { folderName: "Seals", icon: "icones6_dll_42.png", },
    { folderName: "Sweeper Videos", icon: "Icones5_dll_356.png", },
    { folderName: "Sweppers", icon: "ícones12_dll_75.png", },
    { folderName: "Tracks", icon: "icones6_dll_31.png", },
    { folderName: "Video Clipes", icon: "icones6_dll_209.png", },
    { folderName: "Virar Geradora", icon: "Icones5_dll_83.png", },
    { folderName: "Voice Track", icon: "icones6_dll_187.png", }
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
                  data.archivesTree.map(({ icon, folderName }, index) => {
                    return (
                      <SidebarMenuItem key={index}>
                        <Link to={`/archive/${index}`}>
                          <SidebarMenuButton>
                            {
                              icon != ""
                                ?
                                <img src={`http://playlist.ddns.com.br:8010/icons/${icon}`} />
                                :
                                <Folder />
                            }
                            {folderName}
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