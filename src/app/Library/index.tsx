import { FolderSVG } from "@/assets/svg/categories";
import { Card } from "@/components/ui/card";
import { FAKE_LIST_CATEGORY } from "@/utils/fakeData";
import { FolderUp, ListMusic, ListPlus, Plus, SquareArrowOutUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { DrawerDialogCreateList } from "./components";

export const Library = () => {
  const { t } = useTranslation()

  return (
    <main className="flex-1 w-full py-5 space-y-4">
      <div className="flex flex-col px-5 gap-0.5">
        <span className="text-xl font-semibold">{t('Library')}</span>
        <span className="text-sm font-normal text-muted-foreground">{t('Library-Description')}</span>
      </div>
      <div className="grid grid-cols-1 gap-3 px-5 md:grid-cols-2 xl:grid-cols-3">
        <DrawerDialogCreateList>
          <Card className="flex flex-col gap-3 p-3 bg-transparent rounded cursor-pointer border-muted-foreground/25 dark:hover:bg-muted/50 hover:bg-muted">
            <div className="flex flex-row justify-between w-full">
              <div className="flex items-center justify-center rounded bg-accent-foreground size-8">
                <ListPlus className="text-white dark:text-black size-5" />
              </div>
              <Plus size={16} />
            </div>
            <span className="text-sm font-medium">
              {t('Create-List')}
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
            {t('Create-Dynamic-List')}
          </span>
        </Card>
        <Link to={"/library/recent-files"}>
          <Card className="flex flex-col gap-3 p-3 bg-transparent rounded cursor-pointer border-muted-foreground/25 dark:hover:bg-muted/50 hover:bg-muted">
            <div className="flex flex-row justify-between w-full">
              <div className="flex items-center justify-center rounded bg-accent-foreground size-8">
                <FolderUp className="text-white dark:text-black size-5" />
              </div>
              <SquareArrowOutUpRight size={16} />
            </div>
            <span className="text-sm font-medium">
              {t('New-Files')}
            </span>
          </Card>
        </Link>
      </div>
      <div className="flex flex-col px-5">
        <span className="text-base font-medium">
          {t('Category')}
        </span>
        <div className="flex flex-row gap-2 mt-3">
          {
            FAKE_LIST_CATEGORY.slice(0, 7).map(({ icon, value }) => {
              return (
                <Link key={value} to={`/library/category?categoryType=${value}`}>
                  <Card className="flex flex-col items-center justify-center w-32 gap-2 p-3 bg-transparent border-0 rounded cursor-pointer dark:hover:bg-muted/50 hover:bg-muted">
                    <img src={icon} className="size-10" />
                    <span className="text-[13px] font-medium">
                      {t(value)}
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
          {t('Other-Categories')}
        </span>
        <div className="flex flex-wrap gap-2 mt-3">
          {
            FAKE_LIST_CATEGORY.slice(7).map(({ icon, value }) => {
              return (
                <Link key={value} to={`/library/category?categoryType=${value}`}>
                  <Card className="flex flex-col items-center justify-center w-32 gap-2 p-3 bg-transparent border-0 rounded cursor-pointer dark:hover:bg-muted/50 hover:bg-muted">
                    <img src={icon} className="size-10" />
                    <span className="text-[13px] font-medium">
                      {t(value)}
                    </span>
                  </Card>
                </Link>
              )
            })
          }
          <Link to='/library/folder'>
            <Card className="flex flex-col items-center justify-center w-32 gap-2 p-3 bg-transparent border-0 rounded cursor-pointer dark:hover:bg-muted/50 hover:bg-muted">
              <img src={FolderSVG} className="size-10" />
              <span className="text-[13px] font-medium">
                {t("Folders")}
              </span>
            </Card>
          </Link>
        </div>
      </div>
    </main >
  )
}