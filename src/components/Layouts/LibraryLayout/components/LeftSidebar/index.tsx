import { Sidebar, SidebarContent } from "@/components/ui/sidebar"
import { CategorySidebarGroup } from "./components"

export const LeftSidebar = () => {
  return (
    <Sidebar collapsible="none" className="fixed z-10 hidden h-screen overflow-auto border-r sm:flex top-14 border-muted-foreground/25">
      <SidebarContent>
        <CategorySidebarGroup />
      </SidebarContent>
    </Sidebar>
  )
}