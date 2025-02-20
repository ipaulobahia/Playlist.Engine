import { FolderSVG } from "@/assets/svg/categories";
import { Card } from "@/components/ui/card";
import { SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu } from "@/components/ui/sidebar";
import { FAKE_LIST_CATEGORY } from "@/utils/fakeData";

interface CategorySidebarContentProps {
  onSelectCategory(category: { id: number; name: string; value: string; icon: string; }): void
  onSelectOnlyFolders: () => void
}

export const CategorySidebarContent = ({ onSelectCategory, onSelectOnlyFolders }: CategorySidebarContentProps) => {
  return (
    <SidebarContent className="gap-0">
      <SidebarGroup>
        <SidebarGroupLabel>Categorias</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu className="flex flex-row flex-wrap gap-2 mt-3">
            {
              FAKE_LIST_CATEGORY.slice(0, 7).map((category) => {
                const { icon, name, id } = category

                return (
                  <Card onClick={() => onSelectCategory(category)} key={id} className="flex flex-col items-center justify-center w-20 gap-2 p-3 bg-transparent border-0 rounded cursor-pointer dark:hover:bg-muted/50 hover:bg-muted">
                    <img src={icon} className="size-5" />
                    <span className="text-[13px] font-medium">
                      {name}
                    </span>
                  </Card>
                )
              })
            }
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarGroupLabel>Outras categorias</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu className="flex flex-row flex-wrap gap-2 mt-3">
            {
              FAKE_LIST_CATEGORY.slice(7).map((category) => {
                const { icon, name, id } = category

                return (
                  <Card onClick={() => onSelectCategory(category)} key={id} className="flex flex-col items-center justify-center w-20 gap-2 p-3 bg-transparent border-0 rounded cursor-pointer dark:hover:bg-muted/50 hover:bg-muted">
                    <img src={icon} className="size-5" />
                    <span className="text-[13px] font-medium">
                      {name}
                    </span>
                  </Card>
                )
              })
            }
            <Card onClick={onSelectOnlyFolders} className="flex flex-col items-center justify-center w-20 gap-2 p-3 bg-transparent border-0 rounded cursor-pointer dark:hover:bg-muted/50 hover:bg-muted">
              <img src={FolderSVG} className="size-5" />
              <span className="text-[13px] font-medium">
                Pastas
              </span>
            </Card>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent >
  )
}