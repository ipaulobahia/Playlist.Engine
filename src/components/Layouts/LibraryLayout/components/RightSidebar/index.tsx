import { Button } from "@/components/ui/button"
import { Sidebar, SidebarContent } from "@/components/ui/sidebar"
import { useInfoSidebar } from "@/hooks/use-sidebar"
import { FileSearch, X } from "lucide-react"
import {
  CollapsibleArchive,
  CollapsibleLastestBroadcasts,
  CollapsibleMoreData,
  CollapsiblePlaylist,
  CollapsibleScheduledTimes
} from "./components"

export const RightSidebar = () => {
  const { isOpen, closeSidebar, row } = useInfoSidebar()

  return (
    <Sidebar collapsible="none" className={`fixed hidden lg:flex ease-linear right-0 z-10 h-screen transition-all border-r top-14 border-muted-foreground/25 ${isOpen ? 'w-[16rem] xl:w-[23rem]' : 'w-0'}`}>
      <SidebarContent className="p-4">
        <div className="flex flex-row items-start justify-between">
          <div className="flex flex-col">
            <span className="text-lg font-semibold">Detalhes do arquivo</span>
            <span className="text-[13px] font-normal text-muted-foreground">Visualize os detalhes do arquivo selecionado</span>
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
              <CollapsibleArchive />
              <CollapsibleLastestBroadcasts />
              <CollapsibleMoreData />
              <CollapsiblePlaylist />
              <CollapsibleScheduledTimes />
            </>
            :
            <div className={`flex flex-col items-center justify-center gap-2 mt-5 ${!isOpen && 'hidden'}`}>
              <FileSearch className="size-36" />
              <span className="text-sm font-normal text-center">Selecione um arquivo para ver os detalhes.</span>
            </div>
        }
      </SidebarContent>
    </Sidebar>
  )
}