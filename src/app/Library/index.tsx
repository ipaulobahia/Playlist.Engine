import { Card } from "@/components/ui/card";
import { FAKE_LIST_CATEGORY, FAKE_LIST_OTHER_CATEGORIES } from "@/utils/fakeData";
import { FileClock, FolderUp, ListMusic, ListPlus, Plus, SquareArrowOutUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { DrawerDialogCreateList } from "./components";

export const Library = () => {
  return (
    <main className="flex-1 w-full py-5 space-y-4">
      <div className="flex flex-col px-5 gap-0.5">
        <span className="text-xl font-semibold">Biblioteca</span>
        <span className="text-sm font-normal text-muted-foreground">Organize suas listas e arquivos de forma prática e eficiente</span>
      </div>
      <div className="grid grid-cols-1 gap-3 px-5 md:grid-cols-2 xl:grid-cols-4">
        <DrawerDialogCreateList>
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
        </DrawerDialogCreateList>
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
          Categorias Principais
        </span>
        <div className="flex flex-row gap-2 mt-3">
          {
            FAKE_LIST_CATEGORY.map(({ name, icon, value }) => {
              return (
                <Link key={value} to={`/library/category?categoryType=${value}`}>
                  <Card className="flex flex-col items-center justify-center w-32 gap-2 p-3 bg-transparent border-0 rounded cursor-pointer dark:hover:bg-muted/50 hover:bg-muted">
                    <img src={icon} className="size-10" />
                    <span className="text-[13px] font-medium">
                      {name}
                    </span>
                  </Card>
                </Link>
              )
            })
          }
        </div>
      </div>
      <div className="flex flex-col px-5">
        <span className="text-base font-medium">
          Outras categorias
        </span>
        <div className="flex flex-wrap gap-2 mt-3">
          {
            FAKE_LIST_OTHER_CATEGORIES.map(({ name, icon, value }) => {
              return (
                <Link to={`/library/category?categoryType=${value}`}>
                  <Card className="flex flex-col items-center justify-center w-32 gap-2 p-3 bg-transparent border-0 rounded cursor-pointer dark:hover:bg-muted/50 hover:bg-muted">
                    <img src={icon} className="size-10" />
                    <span className="text-[13px] font-medium">
                      {name}
                    </span>
                  </Card>
                </Link>
              )
            })
          }
        </div>
      </div>
    </main >
  )
}