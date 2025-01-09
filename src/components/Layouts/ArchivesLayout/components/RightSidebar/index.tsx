import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Sidebar, SidebarContent } from "@/components/ui/sidebar"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { useInfoSidebar } from "@/hooks/use-sidebar"
import { ChevronDown, FileSearch, X } from "lucide-react"
import { useState } from "react"

export const RightSidebar = () => {
  const { isOpen, closeSidebar, row } = useInfoSidebar()

  const [isOpenCollapsibleArchive, setIsOpenCollapsibleArchive] = useState<boolean>(true)
  const [isOpenCollapsibleMoreData, setIsOpenCollapsibleMoreData] = useState<boolean>(false)
  const [isOpenCollapsiblePlaylists, setIsOpenCollapsiblePlaylists] = useState<boolean>(false)
  const [isOpenCollapsibleScheduledTimes, setIsOpenCollapsibleScheduledTimes] = useState<boolean>(false)
  const [isOpenCollapsibleLatestBroadcasts, setIsOpenCollapsibleLatestBroadcasts] = useState<boolean>(false)

  return (
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
  )
}