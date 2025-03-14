import { SidebarProvider } from "@/components/ui/sidebar"
import { useInfoSidebar } from "@/hooks/use-sidebar"
import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { LeftSidebar, RightSidebar } from "./components"

export const LibraryLayout = () => {
  const { pathname } = useLocation()

  const { isOpen, closeSidebar } = useInfoSidebar()

  useEffect(() => { return () => { closeSidebar(); }; }, []);

  const isMoveAndCopyPath = pathname == "/library/category/archive/move-and-copy"

  return (
    <SidebarProvider className="relative">
      {!isMoveAndCopyPath && <LeftSidebar />}
      <div className={`w-full p-0 transition-all ease-linear ${!isMoveAndCopyPath && 'sm:pl-[--sidebar-width]'} ${isOpen ? 'pr-[16rem] xl:pr-[23rem]' : 'sm:pr-0'}`}>
        <Outlet />
        {/* <AudioMarkerEditor /> */}
      </div>
      <RightSidebar />
    </SidebarProvider >
  )
}