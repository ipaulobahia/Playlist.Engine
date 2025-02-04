import { Sidebar, SidebarContent, SidebarProvider } from "@/components/ui/sidebar";
// @ts-ignore
import "react-color-palette/css";
import { Outlet, useLocation } from "react-router-dom";
import { CreateProfileSidebarGroup, OperatorSidebarGroup } from "./components";

export const OperatorLayout = () => {
  const { pathname } = useLocation()

  const isCreateProfilePath = pathname.includes("/operator/profile/create-profile")

  return (
    <SidebarProvider>
      <Sidebar collapsible="none" className="fixed z-10 hidden h-screen border-r sm:flex top-14 border-muted-foreground/25">
        <SidebarContent className="gap-1.5 mb-16">
          {
          isCreateProfilePath 
          ? 
          <CreateProfileSidebarGroup /> 
          :
          <OperatorSidebarGroup/>
          }
        </SidebarContent>
      </Sidebar>
      <div className="w-full p-0 sm:pl-[--sidebar-width] transition-all ease-linear">
        <Outlet />
      </div>
    </SidebarProvider>
  )
}