import { ButtonTooltip } from "@/components";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useInfoSidebar } from "@/hooks/use-sidebar";
import { AudioLines, FastForward, Info, List, Mic, Minus, MousePointer2, Play, Plus, Redo2, Rewind, Scissors, Square, SquareArrowOutUpRight, StepForward, Table2, TriangleRight, Undo2, Volume1, X } from "lucide-react";
import Draggable from 'react-draggable';
import { ArchiveBreadchumbs, ArchiveList, ArchiveTable } from "./components";

export const Archive = () => {
  // const [searchParams] = useSearchParams();
  // const folderId = searchParams.get("folderId");
  const { toggleSidebar, isOpen } = useInfoSidebar()

  // const { data } = useFiles("99")
  // const folderName = data && data.folder.folderName

  return (
    <main className="flex-1 p-3">
      <ArchiveBreadchumbs />
      <Tabs defaultValue="list">
        <div className="px-3 space-y-3">
          <div className="flex flex-row items-start justify-between gap-2 sm:items-center">
            <div className="flex flex-row items-start gap-1">
              <div className="flex flex-col gap-0.5">
                <span className="text-xl font-semibold">[Nome da Pasta]</span>
                <span className="text-sm font-normal text-muted-foreground">[Descrição da Pasta]</span>
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
                    <TabsTrigger value="detailed" className="">
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
          <Draggable handle=".drag" positionOffset={{ x: '20%', y: '-30%' }}>
            <Card className="z-50 min-h-[70vh] relative flex flex-col w-[60vw] rounded-lg">
              <div className="flex flex-row items-center justify-between w-full h-8 border-b shadow border-muted-foreground/20 bg-sidebar drag">
                <div className="flex flex-row items-center">
                  <Button variant={'ghost'} className="flex items-center justify-center cursor-default hover:bg-transparent" size={'icon'}>
                    <AudioLines size={16} />
                  </Button>
                </div>
                <div className="flex flex-row items-center">
                  <Button variant={'ghost'} className="flex items-center justify-center" size={'icon'}>
                    <Minus size={16} />
                  </Button>
                  <Button variant={'ghost'} className="flex items-center justify-center" size={'icon'}>
                    <SquareArrowOutUpRight size={16} />
                  </Button>
                  <Button variant={'destructive'} className="flex items-center justify-center bg-transparent" size={'icon'}>
                    <X size={16} />
                  </Button>
                </div>
              </div>
              <div className="grid flex-1 grid-cols-4">
                <div className="relative flex flex-1 w-full col-span-3 py-4">
                  <div className="absolute flex items-center justify-center w-full gap-x-2 top-5">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span tabIndex={0}>
                          <Button size={'icon'} variant={'ghost'}>
                            <MousePointer2 />
                          </Button>
                        </span>
                      </TooltipTrigger>
                      <TooltipContent side="bottom" className="font-medium text-white bg-black dark:text-black dark:bg-white">
                        <p>Cursor</p>
                      </TooltipContent>
                    </Tooltip>
                    <ButtonTooltip icon={MousePointer2} message="Cursor" />
                    <ButtonTooltip icon={Plus} message="Adicionar faixa" />
                    <ButtonTooltip icon={Mic} message="Adicionar locução" />
                    <ButtonTooltip icon={Scissors} message="Cortar" />
                    <ButtonTooltip icon={StepForward} message="Inicio do áudio" />
                    <ButtonTooltip icon={Square} message="Fim do áudio" />
                    <ButtonTooltip icon={TriangleRight} message="Fade-in" />
                    <ButtonTooltip icon={TriangleRight} message="Fade-out" />
                  </div>
                  <div className="flex flex-row items-center justify-between w-full px-4 mt-auto">
                    <div className="z-10 flex flex-row items-center gap-x-1">
                      <div className="flex items-center justify-center p-2 rounded-lg bg-muted">
                        <span className="text-xs">00:00:00</span>
                        <span className="text-xs text-muted-foreground"> / 00:30:25</span>
                      </div>
                      <Button size={'icon'} className="size-8 bg-muted hover:fill-white hover:text-white group" variant={'default'}>
                        <Undo2 className="text-accent-foreground group-hover:text-white" />
                      </Button>
                      <Button disabled size={'icon'} className="size-8 bg-muted hover:fill-white hover:text-white group" variant={'default'}>
                        <Redo2 className="text-accent-foreground group-hover:text-white" />
                      </Button>
                    </div>
                    <div className="absolute z-0 flex items-center justify-center w-full gap-x-2">
                      <Button size={'icon'} className="size-8 bg-muted group" variant={'default'}>
                        <Rewind className="fill-accent-foreground text-accent-foreground group-hover:fill-white group-hover:text-white" />
                      </Button>
                      <Button size={'icon'} className="bg-accent-foreground size-8 hover:fill-white hover:text-white group" variant={'default'}>
                        <Play className="text-accent fill-accent group-hover:fill-white group-hover:text-white" />
                      </Button>
                      <Button size={'icon'} className="size-8 bg-muted group" variant={'default'}>
                        <FastForward className="fill-accent-foreground text-accent-foreground group-hover:fill-white group-hover:text-white" />
                      </Button>
                    </div>
                    <div className="z-10 flex flex-row justify-center w-40 p-2 rounded-lg gap-x-2 bg-muted">
                      <Plus size={16} />
                      <Slider
                        defaultValue={[50]}
                        max={100}
                        step={1}
                      />
                      <Minus size={16} />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col p-4 border-l shadow bg-sidebar gap-y-2 border-muted-foreground/20">
                  <Label className="text-base top-3">Ferramentas</Label>
                  <div className="flex flex-col gap-y-2">
                    <Label className="text-xs">Período selecionada</Label>
                    <div className="grid grid-cols-2 mt-1 gap-x-2">
                      <Input placeholder="Início: 00:00:00" className="h-8 text-xs rounded-md placeholder:text-xs bg-muted" />
                      <Input placeholder="Fim: 00:00:00" className="h-8 text-xs rounded-md placeholder:text-xs bg-muted" />
                    </div>
                  </div>
                  <Separator className="my-2 bg-sidebar-foreground/25 h-[0.5px]" />
                  <div className="flex flex-col gap-y-2">
                    <div className="flex flex-col gap-y-0.5">
                      <Label className="text-xs">Nível do Som</Label>
                      <Label className="text-xs font-normal text-muted-foreground">Volume máximo</Label>
                    </div>
                    <div className="flex flex-row items-center p-2 border rounded-md bg-muted">
                      <Volume1 size={15} className="dark:fill-white fill-black" />
                      <Slider
                        defaultValue={[50]}
                        max={100}
                        step={1}
                        className="w-full"
                      />
                    </div>
                    <div className="grid grid-cols-2 mt-1 gap-x-2">
                      <div className="flex gap-x-2 items-center p-1.5 text-muted-foreground justify-between rounded-md bg-muted">
                        <span className="text-xs">
                          L
                        </span>
                        <Slider
                          defaultValue={[50]}
                          max={100}
                          step={1}
                          className="w-full"
                        />
                        <span className="text-xs">
                          0.0dB
                        </span>
                      </div>
                      <div className="flex gap-x-2 items-center p-1.5 text-muted-foreground justify-between rounded-md bg-muted">
                        <span className="text-xs">
                          R
                        </span>
                        <Slider
                          defaultValue={[50]}
                          max={100}
                          step={1}
                          className="w-full"
                        />
                        <span className="text-xs">
                          0.0dB
                        </span>
                      </div>
                    </div>
                  </div>
                  <Separator className="my-2 bg-sidebar-foreground/25 h-[0.5px]" />
                  <div className="flex flex-row items-center justify-between">
                    <Label className="text-xs">Efeitos</Label>
                    <Plus className="cursor-pointer" size={16} />
                  </div>
                  <Separator className="my-2 bg-sidebar-foreground/25 h-[0.5px]" />
                  <div className="flex flex-row items-center justify-between">
                    <Label className="text-xs">Exportar</Label>
                    <Plus className="cursor-pointer" size={16} />
                  </div>
                </div>
              </div>
            </Card>
          </Draggable>
        </div>
      </Tabs>
    </main >
  )
}