import { ArchiveBreadchumbs, ArchiveList, ArchiveTable } from "./components";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useInfoSidebar } from "@/hooks/use-sidebar";
import { ChevronLeft, Info, List, Table2 } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const Archive = () => {
  const navigate = useNavigate();
  const { toggleSidebar, isOpen } = useInfoSidebar()

  const [searchParams] = useSearchParams();
  const folderName = searchParams.get("folderName");


  function goBack() { navigate(-1) }

  return (
    <main className="flex-1 p-3">
      <ArchiveBreadchumbs />
      <Tabs defaultValue="list">
        <div className="p-4 space-y-3 border rounded shadow-sm border-muted-foreground/25 bg-sidebar">
          <div className="flex flex-row items-start justify-between gap-2 sm:items-center">
            <div className="flex flex-row items-start gap-1">
              <Button onClick={goBack} size={'icon'} variant={'ghost'}>
                <ChevronLeft size={16} />
              </Button>
              <div className="flex flex-col gap-0.5">
                <span className="text-xl font-semibold">{folderName}</span>
                <span className="text-sm font-normal text-muted-foreground">Pasta de musica principal da emissora</span>
              </div>
            </div>
            <TabsList className="hidden ml-auto sm:flex">
              <TooltipProvider>
                <Tooltip delayDuration={100}>
                  <TooltipTrigger>
                    <TabsTrigger value="list">
                      <List size={16} className="text-zinc-600 dark:text-zinc-200" />
                    </TabsTrigger>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="font-medium text-white bg-black dark:text-black dark:bg-white">
                    Layout de lista
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip delayDuration={100}>
                  <TooltipTrigger>
                    <TabsTrigger value="detailed">
                      <Table2 size={16} className="text-zinc-600 dark:text-zinc-200" />
                    </TabsTrigger>
                  </TooltipTrigger>
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
          </div>
          <TabsContent value="list" className="m-0">
            <ArchiveList />
          </TabsContent>
          <TabsContent value="detailed" className="m-0">
            <ArchiveTable />
          </TabsContent>
        </div>
      </Tabs>
    </main >
  )
}