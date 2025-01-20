import { Sidebar, SidebarContent } from "@/components/ui/sidebar"
import { useLocation } from "react-router-dom"
import { ArchiveSidebarGroup, CategorySidebarGroup } from "./components"

export const LeftSidebar = () => {
  const { pathname } = useLocation()


  const isArchivePath = pathname == "/library/category/archive"

  return (
    <Sidebar collapsible="none" className="fixed z-10 hidden h-screen overflow-auto border-r sm:flex top-14 border-muted-foreground/25">
      <SidebarContent>
        {isArchivePath ? <ArchiveSidebarGroup /> : <CategorySidebarGroup />}
      </SidebarContent>
    </Sidebar>
  )
}