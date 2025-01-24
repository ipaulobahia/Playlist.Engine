import { CategoryContextContent } from "@/components/CategoryContextContent"
import { Input } from "@/components/ui/input"
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { FAKE_LIST_CATEGORY } from "@/utils/fakeData"
import { Search } from "lucide-react"
import { Link, useSearchParams } from "react-router-dom"

export const CategorySidebarGroup = () => {
  const [searchParams] = useSearchParams();

  const categoryId = searchParams.get("categoryId");

  return (
    <SidebarGroup>
      <div className="relative">
        <Input type="operador" className="dark:bg-black border-muted-foreground/25 placeholder:text-xs" placeholder="Pesquise pelo arquivo..." />
        <span className="absolute inset-y-0 flex items-center right-3">
          <Search size={16} />
        </span>
      </div>
      <SidebarGroupLabel>Favoritos</SidebarGroupLabel>
      <SidebarGroupContent></SidebarGroupContent>
      <SidebarGroupLabel>Categorias</SidebarGroupLabel>
      <SidebarGroupContent className="pb-16">
        <SidebarMenu>
          {
            FAKE_LIST_CATEGORY.map(({ id, icon, name }) => {
              return (
                <CategoryContextContent key={id} categoryId={id}>
                  <SidebarMenuItem className={`${(categoryId === id.toString()) && 'bg-sidebar-accent text-sidebar-accent-foreground'}`}>
                    <Link to={`/library/category?categoryId=${id}`}>
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
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}