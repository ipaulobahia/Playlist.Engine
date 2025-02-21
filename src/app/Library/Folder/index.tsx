import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useInfoSidebar } from "@/hooks/use-sidebar"
import { Info, List, Table2 } from "lucide-react"
import { FolderBreadchumbs, FolderList } from "./components"


export const Folder = () => {
  const { toggleSidebar, isOpen } = useInfoSidebar()

  return (
    <main className="flex-1 p-3">
      <FolderBreadchumbs />
      <Tabs defaultValue="list">
        <div className="px-3 space-y-3">
          <div className="flex flex-row items-start justify-between gap-2 sm:items-center">
            <div className="flex flex-row items-start gap-1">
              <div className="flex flex-col gap-0.5">
                <span className="text-xl font-semibold">Pastas</span>
                <span className="text-sm font-normal text-muted-foreground">[Descrição]</span>
              </div>
            </div>
            <TabsList className="hidden ml-auto sm:flex">
              <TooltipProvider>
                <Tooltip delayDuration={100}>
                  <TabsTrigger asChild value="list">
                    <TooltipTrigger asChild>
                      <div className="cursor-pointer">
                        <List size={16} className="text-zinc-600 dark:text-zinc-200" />
                      </div>
                    </TooltipTrigger>
                  </TabsTrigger>
                  <TooltipContent side="bottom" className="font-medium text-white bg-black dark:text-black dark:bg-white">
                    Layout de lista
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip delayDuration={100}>
                  <TabsTrigger asChild value="detailed">
                    <TooltipTrigger asChild>
                      <div className="cursor-pointer">
                        <Table2 size={16} className="text-zinc-600 dark:text-zinc-200" />
                      </div>
                    </TooltipTrigger>
                  </TabsTrigger>
                  <TooltipContent side="bottom" className="font-medium text-white bg-black dark:text-black dark:bg-white">
                    Layout detalhado
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </TabsList>
            <TooltipProvider>
              <Tooltip delayDuration={150}>
                <TooltipTrigger asChild>
                  <Button onClick={toggleSidebar} variant={'ghost'} size={'sm'}>
                    <Info />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="left" className="font-medium text-white bg-black dark:text-black dark:bg-white">
                  {
                    <p className="text-xs font-semibold">
                      {
                        isOpen
                          ?
                          "Ocultar detalhes"
                          :
                          "Mostrar detalhes"
                      }
                    </p>
                  }
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <TabsContent value="list" className="m-0">
            <FolderList />
          </TabsContent>
          <TabsContent value="detailed" className="m-0">
            {/* <CategoryTable /> */}
          </TabsContent>
        </div>
      </Tabs>
    </main>
  )
}