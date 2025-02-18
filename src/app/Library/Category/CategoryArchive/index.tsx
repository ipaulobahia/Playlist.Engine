import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useInfoSidebar } from "@/hooks/use-sidebar";
import { usePlaylistList } from "@/service/api/playlist/query/getPlaylistList";
import { Info, List, Table2 } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { CategoryArchiveBreadchumbs, CategoryArchiveList, CategoryArchiveTable, DrawerDialogAddFile } from "./components";

export const CategoryArchive = () => {
  const { toggleSidebar, isOpen } = useInfoSidebar()
  const [searchParams] = useSearchParams();

  const folderId = searchParams.get("folderId");

  const { data } = usePlaylistList(folderId)

  return (
    <main className="flex-1 p-3">
      <CategoryArchiveBreadchumbs />
      <Tabs defaultValue="list">
        <div className="px-3 space-y-3">
          <div className="flex flex-row items-start justify-between gap-2 sm:items-center">
            <span className="text-xl font-semibold">{data?.title}</span>
            <TabsList className="hidden ml-auto sm:flex">
              <TooltipProvider>
                <Tooltip delayDuration={100}>
                  <TabsTrigger asChild value="list">
                    <TooltipTrigger>
                      <List size={16} className="text-zinc-600 dark:text-zinc-200" />
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
                    <TooltipTrigger>
                      <Table2 size={16} className="text-zinc-600 dark:text-zinc-200" />
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
                <TooltipTrigger>
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
            <DrawerDialogAddFile>
              <Button>
                Adicionar arquivo
              </Button>
            </DrawerDialogAddFile>
          </div>
          <TabsContent value="list" className="m-0">
            <CategoryArchiveList />
          </TabsContent>
          <TabsContent value="detailed" className="m-0">
            <CategoryArchiveTable />
          </TabsContent>
        </div>
      </Tabs>
    </main>
  )
}