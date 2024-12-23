import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarInset, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarProvider, SidebarRail } from "@/components/ui/sidebar"
import { ChevronRight, CloudUpload, FilePlus2, FileText, Folder, FolderPlus, ListFilter, Plus, Search, SquareArrowOutUpRight, Logs } from "lucide-react"
import { ActionCard, AllFilesTable, UpdateCard } from "./components"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

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
  foldersTree: [
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

export const Folders = () => {
  return (
    <SidebarProvider>
      <Sidebar className="border-r border-muted" collapsible="none">
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
                {data.foldersTree.map((item, index) => (
                  <Tree key={index} item={item} />
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <SidebarInset className="p-3">
        <div className="flex-1 p-4 space-y-3 border rounded shadow-sm border-muted bg-sidebar">
          <div className="flex flex-col gap-0.5">
            <span className="text-xl font-semibold">Arquivos da emissora</span>
            <span className="text-sm font-normal text-muted-foreground">Organize e gerencie seus arquivos de forma prática e eficiente</span>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <ActionCard title="Criar pasta" MainIcon={FolderPlus} SubIcon={Plus} />
            <ActionCard title="Criar arquivo" MainIcon={FilePlus2} SubIcon={Plus} />
            <ActionCard title="Gerenciar uploads" MainIcon={CloudUpload} SubIcon={SquareArrowOutUpRight} />
            <ActionCard title="Ultimos eventos" MainIcon={Logs} SubIcon={Plus} />
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[16px] font-medium">
              Atualizações recentes
            </span>
            <div className="grid grid-cols-4 gap-4">
              <UpdateCard title="24-12-2024" size="50 B" type="txt" />
              <UpdateCard title="Fim de ano é no BK" size="20 K" type="mp4" />
              <UpdateCard title="Vinheta de Fim de Ano" size="50 B" type="mp3" />
              <UpdateCard title="Hora Certa - Natal" size="50 B" type="mp3" />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[16px] font-medium">
              Todos os arquivos
            </span>
            <div className="flex flex-row items-center justify-between">
              <div className="flex p-1 rounded dark:bg-black gap-x-1">
                <Button size={'sm'} variant={'outline'} className="h-6 px-5 font-semibold bg-black border rounded text-accent-foreground border-muted">
                  Todos
                </Button>
                <Button size={'sm'} variant={'outline'} className="h-6 px-5 font-medium border-none rounded bg-sidebar text-muted-foreground">
                  MP3
                </Button>
                <Button size={'sm'} variant={'outline'} className="h-6 px-5 font-medium border-none rounded bg-sidebar text-muted-foreground">
                  MP4
                </Button>
                <Button size={'sm'} variant={'outline'} className="h-6 px-5 font-medium border-none rounded bg-sidebar text-muted-foreground">
                  TXT
                </Button>
              </div>
              <div className="flex flex-row items-center justify-between gap-2">
                <div className="relative w-full">
                  <Input type="files" className="h-8 dark:bg-black border-muted placeholder:text-xs" placeholder="Pesquise" />
                  <span className="absolute inset-y-0 flex items-center right-3">
                    <Search size={16} />
                  </span>
                </div>
                <Button size={'sm'} variant={'outline'} className="rounded text-muted-foreground">
                  <ListFilter />
                  <span className="font-medium">
                    Filtros
                  </span>
                </Button>
              </div>
            </div>
            <AllFilesTable />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

function Tree({ item }: { item: string | any[] }) {
  const [name, ...items] = Array.isArray(item) ? item : [item]

  return (
    <SidebarMenuItem>
      <Collapsible
        className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
        defaultOpen={name === "components" || name === "ui"}
      >
        <CollapsibleTrigger asChild>
          <SidebarMenuButton>
            <ChevronRight className="transition-transform" />
            <Folder />
            {name}
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {items.map((subItem, index) => (
              <SidebarMenuButton
                key={index}
                isActive={name === "button.tsx"}
                className="data-[active=true]:bg-transparent"
              >
                <FileText />
                {subItem}
              </SidebarMenuButton>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  )
}