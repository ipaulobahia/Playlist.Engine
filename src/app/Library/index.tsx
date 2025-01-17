import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FAKE_LIST_CATEGORY, FAKE_LIST_LIBRARY } from "@/utils/fakeData";
import { FileClock, FolderUp, ListMusic, ListPlus, MoreVertical, Plus } from "lucide-react";

export const Library = () => {

  return (
    <main className="flex-1 w-full py-5 space-y-4">
      {/* <LibraryBreadchumbs /> */}
      <div className="flex flex-col px-5 gap-0.5">
        <span className="text-xl font-semibold">Biblioteca</span>
        <span className="text-sm font-normal text-muted-foreground">Organize suas listas e arquivos de forma prática e eficiente</span>
      </div>
      <div className="grid grid-cols-1 gap-3 px-5 md:grid-cols-2 xl:grid-cols-4">
        <Card className="flex flex-col gap-3 p-3 bg-transparent rounded cursor-pointer border-muted-foreground/25 dark:hover:bg-muted/50 hover:bg-muted">
          <div className="flex flex-row justify-between w-full">
            <div className="flex items-center justify-center rounded bg-accent-foreground size-8">
              <ListPlus className="text-white dark:text-black size-5" />
            </div>
            <Plus size={16} />
          </div>
          <span className="text-sm font-medium">
            Criar lista
          </span>
        </Card>
        <Card className="flex flex-col gap-3 p-3 bg-transparent rounded cursor-pointer border-muted-foreground/25 dark:hover:bg-muted/50 hover:bg-muted">
          <div className="flex flex-row justify-between w-full">
            <div className="flex items-center justify-center rounded bg-accent-foreground size-8">
              <ListMusic className="text-white dark:text-black size-5" />
            </div>
            <Plus size={16} />
          </div>
          <span className="text-sm font-medium">
            Criar lista dinâmica
          </span>
        </Card>
        <Card className="flex flex-col gap-3 p-3 bg-transparent rounded cursor-pointer border-muted-foreground/25 dark:hover:bg-muted/50 hover:bg-muted">
          <div className="flex flex-row justify-between w-full">
            <div className="flex items-center justify-center rounded bg-accent-foreground size-8">
              <FolderUp className="text-white dark:text-black size-5" />
            </div>
            <Plus size={16} />
          </div>
          <span className="text-sm font-medium">
            Uploads recentes
          </span>
        </Card>
        <Card className="flex flex-col gap-3 p-3 bg-transparent rounded cursor-pointer border-muted-foreground/25 dark:hover:bg-muted/50 hover:bg-muted">
          <div className="flex flex-row justify-between w-full">
            <div className="flex items-center justify-center rounded bg-accent-foreground size-8">
              <FileClock className="text-white dark:text-black size-5" />
            </div>
            <Plus size={16} />
          </div>
          <span className="text-sm font-medium">
            Arquivos pendentes
          </span>
        </Card>
      </div>
      <div className="flex flex-col px-5">
        <span className="text-base font-medium">
          Categorias
        </span>
        <div className="grid grid-cols-1 gap-2 mt-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {
            FAKE_LIST_CATEGORY.map(({ name, icon }, index) => {
              return (
                <Card key={index} className="flex flex-row items-start gap-2 p-3 bg-transparent rounded cursor-pointer border-muted-foreground/25 dark:hover:bg-muted/50 hover:bg-muted">
                  <div className="flex items-center justify-center rounded bg-accent-foreground/30 dark:bg-accent min-w-9 min-h-9">
                    <img src={icon} className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col w-full">
                    <div className="flex flex-row items-start justify-between">
                      <span className="text-[13px] font-medium">
                        {name}
                      </span>
                    </div>
                    <div className="flex flex-row items-center gap-0.5">
                      <span className="text-xs font-normal text-muted-foreground">{Math.floor(Math.random() * (20 - 0 + 1) + 0)} arquivos</span>
                    </div>
                  </div>
                </Card>
              )
            })
          }
        </div>
      </div>
      <div className="flex flex-col gap-2 px-5">
        <span className="text-base font-semibold">Listas</span>
        <div className="grid grid-cols-4 gap-3">
          {
            FAKE_LIST_LIBRARY.map(({ name, info, archiveCount }) => {
              return (
                <Card className="flex flex-col items-center justify-start py-3 border rounded shadow-sm cursor-pointer h-60 bg-sidebar border-muted-foreground/25 hover:bg-sidebar-accent/80">
                  <div className="flex flex-row justify-between w-full px-3 pb-3 border-b border-muted-foreground/25">
                    <div className="flex flex-row items-center gap-x-1">
                      <ListMusic className="size-4" />
                      <span className="text-xs font-semibold">
                        {name}
                      </span>
                    </div>
                    <Button size={'icon'} className="size-4" variant={'ghost'}>
                      <MoreVertical />
                    </Button>
                  </div>
                  <div className="flex flex-col flex-1 w-full p-3 pt-5 gap-y-3">
                    <div className="flex flex-col gap-y-1">
                      <span className="text-xs font-semibold uppercase text-muted-foreground">Nome</span>
                      <span className="text-xs font-medium">{info.name}</span>
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <span className="text-xs font-semibold uppercase text-muted-foreground">Descrição</span>
                      <span className="text-xs font-normal">{info.description}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full px-3">
                    <Badge variant={'default'}>
                      {archiveCount} arquivos
                    </Badge>
                    <span className="text-xs font-medium text-muted-foreground">
                      Modificado a 2 semanas atrás
                    </span>
                  </div>
                </Card>
              )
            })
          }
        </div>
      </div>
    </main >
  )
}