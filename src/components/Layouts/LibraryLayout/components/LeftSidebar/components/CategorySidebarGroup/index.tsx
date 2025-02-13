import { FolderSVG } from "@/assets/svg/categories"
import { CategoryContextContent } from "@/components/CategoryContextContent"
import { Input } from "@/components/ui/input"
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { FAKE_LIST_CATEGORY } from "@/utils/fakeData"
import { Search } from "lucide-react"
import { Link, useLocation, useSearchParams } from "react-router-dom"

export const CategorySidebarGroup = () => {
  const { pathname } = useLocation()
  const [searchParams] = useSearchParams();

  const categoryType = searchParams.get("categoryType");

  return (
    <SidebarGroup>
      <div className="relative">
        <Input type="operador" className="dark:bg-black border-muted-foreground/25 placeholder:text-xs" placeholder="Pesquise pelo arquivo..." />
        <span className="absolute inset-y-0 flex items-center right-3">
          <Search size={16} />
        </span>
      </div>
      <SidebarGroupLabel>Categorias</SidebarGroupLabel>
      <SidebarGroupContent className="pb-16">
        <SidebarMenu>
          {
            FAKE_LIST_CATEGORY.map(({ icon, name, value }) => {
              return (
                <CategoryContextContent key={value} categoryType={value}>
                  <SidebarMenuItem className={`${(categoryType === value.toString()) && 'bg-sidebar-accent text-sidebar-accent-foreground'}`}>
                    <Link to={`/library/category?categoryType=${value}`}>
                      <SidebarMenuButton className="flex flex-row items-center justify-start">
                        <img src={icon} className="w-3.5 h-3.5" />
                        <span>
                          {name}
                        </span>
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                </CategoryContextContent>
              )
            })
          }
          <SidebarMenuItem className={`${pathname.includes("/library/folder") && "bg-sidebar-accent text-sidebar-accent-foreground"}`}>
            <Link to={`/library/folder`}>
              <SidebarMenuButton className="flex flex-row items-center justify-start">
                <img src={FolderSVG} className="w-3.5 h-3.5" />
                <span>
                  Pastas
                </span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}