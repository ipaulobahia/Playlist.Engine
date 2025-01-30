import { SidebarProvider } from "@/components/ui/sidebar"
import { useInfoSidebar } from "@/hooks/use-sidebar"
import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { LeftSidebar, RightSidebar } from "./components"

export const LibraryLayout = () => {
  const { isOpen, closeSidebar } = useInfoSidebar()

  useEffect(() => { return () => { closeSidebar(); }; }, []);

  return (
    <>
      <SidebarProvider className="relative">
        <LeftSidebar />
        <div className={`w-full p-0 sm:pl-[--sidebar-width] transition-all ease-linear ${isOpen ? 'pr-[16rem] xl:pr-[23rem]' : 'sm:pr-0'}`}>
          <Outlet />
          {/* <AudioMarkerEditor /> */}
        </div>
        <RightSidebar />
      </SidebarProvider >
    </>
  )
}