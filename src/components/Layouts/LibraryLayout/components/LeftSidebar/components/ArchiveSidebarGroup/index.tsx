import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Input } from "@/components/ui/input"
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from "@/components/ui/sidebar"
import { usePlaylistList } from "@/service/api/playlist/query/getPlaylistList"
import { CategoryEnum, translateToPT } from "@/utils"
import { FolderOpen, Search } from "lucide-react"
import { useTranslation } from "react-i18next"
import { useSearchParams } from "react-router-dom"

export const ArchiveSidebarGroup = () => {
  const { t } = useTranslation()

  const [searchParams] = useSearchParams();

  const categoryType = searchParams.get("categoryType");
  const folderId = searchParams.get("folderId");

  const { data } = usePlaylistList(folderId)

  const emptyList = !data || !data.hasOwnProperty("mediaFiles")

  return (
    <SidebarGroup>
      <div className="relative">
        <Input type="operador" className="dark:bg-black border-muted-foreground/25 placeholder:text-xs" placeholder={t('Search-Archive')} />
        <span className="absolute inset-y-0 flex items-center right-3">
          <Search size={16} />
        </span>
      </div>
      <SidebarGroupLabel>
        {translateToPT(categoryType as CategoryEnum)}
      </SidebarGroupLabel>
      <SidebarMenu>
        <Collapsible asChild open>
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton className="cursor-default">
                <FolderOpen />
                <span className="text-xs">{data?.title}</span>
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent className="pb-16">
              <SidebarMenuSub>
                {
                  !emptyList && data?.mediaFiles.map(({ title, fileId }) => (
                    <SidebarMenuSubItem key={fileId}>
                      <SidebarMenuSubButton className="cursor-pointer" asChild>
                        <span className="overflow-hidden text-xs select-none text-ellipsis whitespace-nowrap">{title}</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))
                }
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
      </SidebarMenu>
    </SidebarGroup>
  )
}