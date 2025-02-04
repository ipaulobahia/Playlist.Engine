import { CategoryContextContent } from "@/components";
import { Card } from "@/components/ui/card";
import { FAKE_LIST_CATEGORY } from "@/utils/fakeData";
import { FileClock, FolderUp, ListMusic, ListPlus, Plus, SquareArrowOutUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Library = () => {
  return (
    <main className="flex-1 w-full py-5 space-y-4">
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
        <Link to={"/library/recent-uploads"}>
          <Card className="flex flex-col gap-3 p-3 bg-transparent rounded cursor-pointer border-muted-foreground/25 dark:hover:bg-muted/50 hover:bg-muted">
            <div className="flex flex-row justify-between w-full">
              <div className="flex items-center justify-center rounded bg-accent-foreground size-8">
                <FolderUp className="text-white dark:text-black size-5" />
              </div>
              <SquareArrowOutUpRight size={16} />
            </div>
            <span className="text-sm font-medium">
              Uploads recentes
            </span>
          </Card>
        </Link>
        <Link to={"/library/pending-files"}>
          <Card className="flex flex-col gap-3 p-3 bg-transparent rounded cursor-pointer border-muted-foreground/25 dark:hover:bg-muted/50 hover:bg-muted">
            <div className="flex flex-row justify-between w-full">
              <div className="flex items-center justify-center rounded bg-accent-foreground size-8">
                <FileClock className="text-white dark:text-black size-5" />
              </div>
              <SquareArrowOutUpRight size={16} />
            </div>
            <span className="text-sm font-medium">
              Arquivos pendentes
            </span>
          </Card>
        </Link>
      </div>
      <div className="flex flex-col px-5">
        <span className="text-base font-medium">
          Categorias
        </span>
        <div className="grid grid-cols-1 gap-2 mt-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {
            FAKE_LIST_CATEGORY.map(({ id, name, icon }) => {
              return (
                <CategoryContextContent key={id} categoryId={id}>
                  <Link to={`/library/category?categoryId=${id}`}>
                    <Card className="flex flex-row items-start gap-2 p-3 bg-transparent rounded cursor-pointer border-muted-foreground/25 dark:hover:bg-muted/50 hover:bg-muted">
                      <div className="flex items-center justify-center rounded bg-muted-foreground/10 dark:bg-accent min-w-9 min-h-9">
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
                  </Link>
                </CategoryContextContent>
              )
            })
          }
        </div>
      </div>
    </main >
  )
}