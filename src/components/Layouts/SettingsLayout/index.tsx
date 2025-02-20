import { DrawerDialogLicense } from "@/components/DrawerDialogLicense";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider } from "@/components/ui/sidebar";
import { FAKE_CONFIG_PREFERENCE } from "@/utils/fakeData";
import { ChevronLeft, ChevronRight, CircleAlert, Cog, FileCog } from "lucide-react";
import { useState } from "react";
// @ts-ignore
import "react-color-palette/css";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { PreferenceSidebarMenuItem } from "./components";

export const SettingsLayout = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const [open, setOpen] = useState(false)

  function handleDrawerDialogLicense() {
    setOpen(prev => !prev)
  }

  function goBack() {
    navigate(-1)
  }

  return (
    <SidebarProvider>
      <Sidebar collapsible="none" className="fixed z-10 hidden h-screen border-r sm:flex top-14 border-muted-foreground/25">
        <SidebarContent className="gap-1.5 mb-16">
          <div className="px-2 pt-2 w-fit">
            <Button onClick={goBack} className="flex flex-row items-center justify-center px-2" size={'sm'} variant={'ghost'}>
              <ChevronLeft size={16} />
              <span className="text-sm font- text-sidebar-foreground">Voltar</span>
            </Button>
          </div>
          <Collapsible className="group/collapsible" asChild>
            <SidebarGroup className="px-3">
              <CollapsibleTrigger asChild>
                <div className="flex flex-row items-center px-2 rounded-md cursor-pointer hover:bg-sidebar-accent hover:text-sidebar-accent-foregroun">
                  <Cog size={16} />
                  <SidebarGroupLabel>Configurações</SidebarGroupLabel>
                  <ChevronRight size={16} className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarGroupContent className="pl-6">
                  <SidebarMenu>
                    {
                      FAKE_CONFIG_PREFERENCE.map(({ id, name, path }) => {
                        return (
                          <PreferenceSidebarMenuItem key={id} name={name} path={path} />
                        )
                      })
                    }
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
          <Collapsible className="group/collapsible" asChild>
            <CollapsibleTrigger asChild>
              <SidebarGroup className="px-3 pt-0">
                <div className="flex flex-row items-center px-2 rounded-md cursor-pointer hover:bg-sidebar-accent hover:text-sidebar-accent-foregroun">
                  <FileCog size={16} />
                  <SidebarGroupLabel>Playlist.Ini</SidebarGroupLabel>
                  <ChevronRight size={16} className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </div>
                <CollapsibleContent>
                  <SidebarGroupContent className="pl-6">
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <Link to={'/settings/playlist-ini/basic-settings'}>
                          <SidebarMenuButton className={`${pathname.includes('/settings/playlist-ini/basic-settings') && 'font-bold bg-sidebar-accent'}`}>
                            <span className="text-xs">
                              Configurações básicas
                            </span>
                          </SidebarMenuButton>
                        </Link>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <Link to={'/settings/playlist-ini/affiliates'}>
                          <SidebarMenuButton className={`${pathname.includes('/settings/playlist-ini/affiliates') && 'font-bold bg-sidebar-accent'}`}>
                            <span className="text-xs">
                              Afiliadas
                            </span>
                          </SidebarMenuButton>
                        </Link>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </CollapsibleContent>
              </SidebarGroup>
            </CollapsibleTrigger>
          </Collapsible>
          <Collapsible className="group/collapsible" asChild>
            <CollapsibleTrigger asChild>
              <SidebarGroup className="px-3 pt-0">
                <div className="flex flex-row items-center px-2 rounded-md cursor-pointer hover:bg-sidebar-accent hover:text-sidebar-accent-foregroun">
                  <CircleAlert size={16} />
                  <SidebarGroupLabel>Outros</SidebarGroupLabel>
                  <ChevronRight size={16} className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </div>
                <CollapsibleContent>
                  <SidebarGroupContent className="pl-6">
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton onClick={handleDrawerDialogLicense}>
                          <span className="text-xs">
                            Licença
                          </span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </CollapsibleContent>
              </SidebarGroup>
            </CollapsibleTrigger>
          </Collapsible>
        </SidebarContent>
      </Sidebar>
      <div className="w-full p-0 sm:pl-[--sidebar-width] transition-all ease-linear">
        <Outlet />
      </div>
      <DrawerDialogLicense open={open} setOpen={setOpen} />
    </SidebarProvider>
  )
}