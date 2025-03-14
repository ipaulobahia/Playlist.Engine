import { FolderSVG } from "@/assets/svg/categories";
import { Card } from "@/components/ui/card";
import { SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu } from "@/components/ui/sidebar";
import { FAKE_LIST_CATEGORY } from "@/utils/fakeData";
import { useTranslation } from "react-i18next";
import { CategoryContextContent } from "./components/CategoryContextContent";

interface CategorySidebarContentProps {
  onSelectCategory(category: { id: number; name: string; value: string; icon: string; }): void
  onSelectOnlyFolders: () => void
}

export const CategorySidebarContent = ({ onSelectCategory, onSelectOnlyFolders }: CategorySidebarContentProps) => {
  const { t } = useTranslation()

  return (
    <SidebarContent className="gap-0">
      <SidebarGroup>
        <SidebarGroupLabel>{t("Category")}</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu className="flex flex-row flex-wrap gap-2 mt-3">
            {
              FAKE_LIST_CATEGORY.slice(0, 7).map((category) => {
                const { icon, value, id } = category

                return (
                  <CategoryContextContent key={id} onSelectCategory={() => onSelectCategory(category)}>
                    <Card onClick={() => onSelectCategory(category)} className="flex flex-col items-center justify-center w-20 gap-2 p-3 bg-transparent border-0 rounded cursor-pointer dark:hover:bg-muted/50 hover:bg-muted">
                      <img src={icon} className="size-5" />
                      <span className="text-[13px] font-medium">
                        {t(value)}
                      </span>
                    </Card>
                  </CategoryContextContent>
                )
              })
            }
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarGroupLabel>{t('Other-Categories')}</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu className="flex flex-row flex-wrap gap-2 mt-3">
            {
              FAKE_LIST_CATEGORY.slice(7).map((category) => {
                const { icon, value, id } = category

                return (
                  <CategoryContextContent key={id} onSelectCategory={() => onSelectCategory(category)}>
                    <Card onClick={() => onSelectCategory(category)} className="flex flex-col items-center justify-center w-20 gap-2 p-3 bg-transparent border-0 rounded cursor-pointer dark:hover:bg-muted/50 hover:bg-muted">
                      <img src={icon} className="size-5" />
                      <span className="text-[13px] font-medium">
                        {t(value)}
                      </span>
                    </Card>
                  </CategoryContextContent>
                )
              })
            }
            <CategoryContextContent onSelectCategory={onSelectOnlyFolders}>
              <Card onClick={onSelectOnlyFolders} className="flex flex-col items-center justify-center w-20 gap-2 p-3 bg-transparent border-0 rounded cursor-pointer dark:hover:bg-muted/50 hover:bg-muted">
                <img src={FolderSVG} className="size-5" />
                <span className="text-[13px] font-medium">
                  {t("Folders")}
                </span>
              </Card>
            </CategoryContextContent>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent >
  )
}