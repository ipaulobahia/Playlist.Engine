import { SidebarInset } from "@/components/ui/sidebar"
import { CloudUpload, FilePlus2, FolderPlus, Plus, SquareArrowOutUpRight, Logs } from "lucide-react"
import { ActionCard, UpdateCard, AllFilesTable, StationArchivesBreadchumbs } from "./components"

export const StationArchives = () => {
  return (
    <SidebarInset className="p-3">
      <StationArchivesBreadchumbs />
      <div className="p-4 space-y-3 border rounded shadow-sm border-muted-foreground/25 bg-sidebar">
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
          <div className="grid grid-cols-5 gap-4">
            <UpdateCard title="24-12-2024" size="50B" type="txt" />
            <UpdateCard title="Fim de ano é no BK" size="20K" type="mp4" />
            <UpdateCard title="Vinheta de Fim de Ano" size="50B" type="mp3" />
            <UpdateCard title="Hora Certa - Natal" size="50B" type="mp3" />
            <UpdateCard title="Churrasco é Sadia" size="20k" type="mp4" />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-[16px] font-medium">
            Todos os arquivos
          </span>
          <AllFilesTable />
        </div>
      </div>
    </SidebarInset>
  )
}