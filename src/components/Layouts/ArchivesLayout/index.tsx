import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Input } from "@/components/ui/input"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider } from "@/components/ui/sidebar"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { useInfoSidebar } from "@/hooks/use-sidebar"
import { FileSearch, Folder, Search, X, ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"
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
  const { isOpen, closeSidebar, row } = useInfoSidebar()

  useEffect(() => {
    return () => {
      closeSidebar();
    };
  }, []);

  const [isOpenCollapsibleArchive, setIsOpenCollapsibleArchive] = useState<boolean>(true)
  const [isOpenCollapsibleMoreData, setIsOpenCollapsibleMoreData] = useState<boolean>(false)
  const [isOpenCollapsiblePlaylists, setIsOpenCollapsiblePlaylists] = useState<boolean>(false)
  const [isOpenCollapsibleScheduledTimes, setIsOpenCollapsibleScheduledTimes] = useState<boolean>(false)
  const [isOpenCollapsibleLatestBroadcasts, setIsOpenCollapsibleLatestBroadcasts] = useState<boolean>(false)

  return (
    <SidebarProvider>
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
                  data.archivesTree.map(({ folderName }, index) => {
                    return (
                      <SidebarMenuItem key={index}>
                        <Link to={`/archive/${index}`}>
                          <SidebarMenuButton>
                            <Folder />
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
      </Sidebar>
      <div className={`w-full p-0 sm:pl-[--sidebar-width] transition-all ease-linear ${isOpen ? 'pr-[16rem] xl:pr-[23rem]' : 'sm:pr-0'}`}>
        <Outlet />
      </div>
      <Sidebar collapsible="none" className={`fixed hidden lg:flex ease-linear right-0 z-10 h-screen transition-all border-r top-14 border-muted-foreground/25 ${isOpen ? 'w-[16rem] xl:w-[23rem]' : 'w-0'}`}>
        <SidebarContent className="p-4">
          <div className="flex flex-row items-start justify-between">
            <div className="flex flex-col gap-0.5">
              <span className="text-xl font-semibold">Detalhes do arquivo</span>
              <span className="text-sm font-normal text-muted-foreground">Visualize os detalhes do arquivo selecionado</span>
            </div>
            <Button onClick={closeSidebar} size={'sm'} variant={'ghost'}>
              <X className="size-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          {
            row
              ?
              <>
                <div className="w-full rounded-md min-h-[220px] bg-muted" />
                <Collapsible
                  open={isOpenCollapsibleArchive}
                  onOpenChange={setIsOpenCollapsibleArchive}
                  className="space-y-2"

                >
                  <div className="flex items-center justify-between space-x-4">
                    <h4 className={`text-sm font-medium text-foreground ${!isOpenCollapsibleArchive && "text-muted-foreground"}`}>
                      Arquivo
                    </h4>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm" className="p-0 w-9 text-foreground [&[data-state=closed]>svg]:text-muted-foreground [&[data-state=open]>svg]:rotate-180">
                        <ChevronDown className="transition-transform duration-200 size-4 text-foreground shrink-0" />
                      </Button>
                    </CollapsibleTrigger>
                  </div>
                  <CollapsibleContent>
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Arquivo</TableCell>
                          <TableCell className="text-left">3 Doors Down -  Let Me Go.mp3</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Pasta</TableCell>
                          <TableCell className="text-left">Sucessos 2023</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Duração</TableCell>
                          <TableCell className="text-left">2:33.3</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Criado</TableCell>
                          <TableCell className="text-left">06/04/2024</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Modificado</TableCell>
                          <TableCell className="text-left">28 Jan 2021 22:05:50</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Título</TableCell>
                          <TableCell className="text-left">If You Intend</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible
                  open={isOpenCollapsibleMoreData}
                  onOpenChange={setIsOpenCollapsibleMoreData}
                  className="space-y-2"

                >
                  <div className="flex items-center justify-between space-x-4">
                    <h4 className={`text-sm font-medium text-foreground ${!isOpenCollapsibleMoreData && "text-muted-foreground"}`}>
                      Mais dados
                    </h4>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm" className="p-0 w-9 text-foreground [&[data-state=closed]>svg]:text-muted-foreground [&[data-state=open]>svg]:rotate-180">
                        <ChevronDown className="transition-transform duration-200 size-4 text-foreground shrink-0" />
                      </Button>
                    </CollapsibleTrigger>
                  </div>
                  <CollapsibleContent>
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">ISRC</TableCell>
                          <TableCell className="text-left"></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Comentário</TableCell>
                          <TableCell className="text-left"></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">BPM</TableCell>
                          <TableCell className="text-left"></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Faixa</TableCell>
                          <TableCell className="text-left"></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Url do artista</TableCell>
                          <TableCell className="text-left"></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Url para compra</TableCell>
                          <TableCell className="text-left"></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Ringtone</TableCell>
                          <TableCell className="text-left"></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Foto</TableCell>
                          <TableCell className="text-left"></TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible
                  open={isOpenCollapsiblePlaylists}
                  onOpenChange={setIsOpenCollapsiblePlaylists}
                  className="space-y-2"

                >
                  <div className="flex items-center justify-between space-x-4">
                    <h4 className={`text-sm font-medium text-foreground ${!isOpenCollapsiblePlaylists && "text-muted-foreground"}`}>
                      Playlists
                    </h4>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm" className="p-0 w-9 text-foreground [&[data-state=closed]>svg]:text-muted-foreground [&[data-state=open]>svg]:rotate-180">
                        <ChevronDown className="transition-transform duration-200 size-4 text-foreground shrink-0" />
                      </Button>
                    </CollapsibleTrigger>
                  </div>
                  <CollapsibleContent>
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Artista</TableCell>
                          <TableCell className="text-left">10,000 Maniacs</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Compositor</TableCell>
                          <TableCell className="text-left"></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Album</TableCell>
                          <TableCell className="text-left">(How You've Grown) Los Angeles, CA 10-25-1993</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Ano</TableCell>
                          <TableCell className="text-left">1993</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Gênero</TableCell>
                          <TableCell className="text-left">Rock & Roll</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Ritmo</TableCell>
                          <TableCell className="text-left"></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Gravadora</TableCell>
                          <TableCell className="text-left"></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Idioma</TableCell>
                          <TableCell className="text-left">Português</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Classificação</TableCell>
                          <TableCell className="text-left"></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Vocal</TableCell>
                          <TableCell className="text-left"></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Lista</TableCell>
                          <TableCell className="text-left">Sucessos 2023</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible
                  open={isOpenCollapsibleScheduledTimes}
                  onOpenChange={setIsOpenCollapsibleScheduledTimes}
                  className="space-y-2"

                >
                  <div className="flex items-center justify-between space-x-4">
                    <h4 className={`text-sm font-medium text-foreground ${!isOpenCollapsibleScheduledTimes && "text-muted-foreground"}`}>
                      Horários programados
                    </h4>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm" className="p-0 w-9 text-foreground [&[data-state=closed]>svg]:text-muted-foreground [&[data-state=open]>svg]:rotate-180">
                        <ChevronDown className="transition-transform duration-200 size-4 text-foreground shrink-0" />
                      </Button>
                    </CollapsibleTrigger>
                  </div>
                  <CollapsibleContent>
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">28/12/2024</TableCell>
                          <TableCell className="text-left">00:02, 18:05</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">31/12/2024</TableCell>
                          <TableCell className="text-left">17:25</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible
                  open={isOpenCollapsibleLatestBroadcasts}
                  onOpenChange={setIsOpenCollapsibleLatestBroadcasts}
                  className="space-y-2"

                >
                  <div className="flex items-center justify-between space-x-4">
                    <h4 className={`text-sm font-medium text-foreground ${!isOpenCollapsibleLatestBroadcasts && "text-muted-foreground"}`}>
                      Últimas Veiculações
                    </h4>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm" className="p-0 w-9 text-foreground [&[data-state=closed]>svg]:text-muted-foreground [&[data-state=open]>svg]:rotate-180">
                        <ChevronDown className="transition-transform duration-200 size-4 text-foreground shrink-0" />
                      </Button>
                    </CollapsibleTrigger>
                  </div>
                  <CollapsibleContent>
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">20/12/2024</TableCell>
                          <TableCell className="text-left">09:33</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">19/12/2024</TableCell>
                          <TableCell className="text-left">09:08</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">01/11/2024</TableCell>
                          <TableCell className="text-left">14:03</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CollapsibleContent>
                </Collapsible>
              </>
              :
              <div className={`flex flex-col items-center justify-center gap-2 mt-5 ${!isOpen && 'hidden'}`}>
                <FileSearch className="size-36" />
                <span className="font-normal text-center">Selecione um arquivo para ver os detalhes.</span>
              </div>
          }
        </SidebarContent>
      </Sidebar>
    </SidebarProvider >
  )
}