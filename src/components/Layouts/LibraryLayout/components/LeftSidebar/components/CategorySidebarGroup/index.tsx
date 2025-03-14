import { FolderSVG } from "@/assets/svg/categories"
import { CategoryContextContent } from "@/components/CategoryContextContent"
import { FolderContextContent } from "@/components/FolderContextContent"
import { Input } from "@/components/ui/input"
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { FAKE_LIST_CATEGORY } from "@/utils/fakeData"
import { Search } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Link, useLocation, useSearchParams } from "react-router-dom"

export const CategorySidebarGroup = () => {
  const { t } = useTranslation()

  const { pathname } = useLocation()
  const [searchParams] = useSearchParams();

  const categoryType = searchParams.get("categoryType");

  return (
    <SidebarGroup>
      <div className="relative">
        <Input type="operador" className="dark:bg-black border-muted-foreground/25 placeholder:text-xs" placeholder={t('Search-Archive')} />
        <span className="absolute inset-y-0 flex items-center right-3">
          <Search size={16} />
        </span>
      </div>
      <SidebarGroupLabel>{t("Categories")}</SidebarGroupLabel>
      <SidebarGroupContent className="pb-16">
        <SidebarMenu>
          {
            FAKE_LIST_CATEGORY.map(({ icon, value }) => {
              return (
                <CategoryContextContent key={value} categoryType={value}>
                  <SidebarMenuItem className={`${(categoryType === value.toString()) && 'bg-sidebar-accent text-sidebar-accent-foreground'}`}>
                    <Link to={`/library/category?categoryType=${value}`}>
                      <SidebarMenuButton className="flex flex-row items-center justify-start">
                        <img src={icon} className="w-3.5 h-3.5" />
                        <span>
                          {t(value)}
                        </span>
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                </CategoryContextContent>
              )
            })
          }
          <FolderContextContent>
            <SidebarMenuItem className={`${pathname.includes("/library/folder") && "bg-sidebar-accent text-sidebar-accent-foreground"}`}>
              <Link to={`/library/folder`}>
                <SidebarMenuButton className="flex flex-row items-center justify-start">
                  <img src={FolderSVG} className="w-3.5 h-3.5" />
                  <span>
                    {t('Folders')}
                  </span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          </FolderContextContent>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}