import { DrawerDialogLicense } from "@/components/DrawerDialogLicense";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider } from "@/components/ui/sidebar";
import { FAKE_CONFIG_PREFERENCE } from "@/utils/fakeData";
import { ChevronLeft, CircleAlert, Cog, FileCog, Plus, User, UserPen, Users } from "lucide-react";
import { useState } from "react";
// @ts-ignore
import "react-color-palette/css";
import { Link, Outlet, useLocation } from "react-router-dom";
import { CreateOperatorDialog, DrawerDialogCreateProfile } from "./components";
import { PreferenceSidebarMenuItem } from "./components/PreferenceSidebarMenuItem";

export const SettingsLayout = () => {
  const { pathname } = useLocation()

  const [open, setOpen] = useState(false)

  function handlerDrawerDialogLicense() {
    setOpen(prev => !prev)
  }

  return (
    <>
      <SidebarProvider>
        <Sidebar collapsible="none" className="fixed z-10 hidden h-screen border-r sm:flex top-14 border-muted-foreground/25">
          <SidebarContent className="gap-1.5 mb-16">
            <div className="px-2 pt-2">
              <Link to={'/overview'}>
                <Button className="flex flex-row items-center justify-center px-2" size={'sm'} variant={'ghost'}>
                  <ChevronLeft size={16} />
                  <span className="text-sm font- text-sidebar-foreground">Voltar</span>
                </Button>
              </Link>
            </div>
            <SidebarGroup className="px-3">
              <div className="flex flex-row items-center">
                <User size={16} />
                <SidebarGroupLabel>[Nome do Operador]</SidebarGroupLabel>
              </div>
              <SidebarGroupContent className="pl-4">
                <SidebarMenu>
                  <SidebarMenuItem>
                    <Link to={'/settings/my-account/operator'}>
                      <SidebarMenuButton className={`${pathname.includes('/settings/my-account/operator') && 'font-bold bg-sidebar-accent'}`}>
                        <span className="text-xs">
                          Operador
                        </span>
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <Link to={'/settings/my-account/appearance'}>
                      <SidebarMenuButton className={`${pathname.includes('/settings/my-account/appearance') && 'font-bold bg-sidebar-accent'}`}>
                        <span className="text-xs">
                          Aparência
                        </span>
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup className="px-3 pt-0">
              <div className="flex flex-row items-center">
                <UserPen size={16} />
                <SidebarGroupLabel>Perfil</SidebarGroupLabel>
              </div>
              <SidebarGroupContent className="pl-4">
                <SidebarMenu>
                  <SidebarMenuItem>
                    <DrawerDialogCreateProfile />
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <Link to={'/settings/profile/manage-profile'}>
                      <SidebarMenuButton className={`${pathname.includes('/settings/profile/manage-profile') && 'font-bold bg-sidebar-accent'}`}>
                        <span className="text-xs">
                          Gerenciar perfils
                        </span>
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup className="px-3 pt-0">
              <div className="flex flex-row items-center">
                <Users size={16} />
                <SidebarGroupLabel>Operadores</SidebarGroupLabel>
              </div>
              <SidebarGroupContent className="pl-4">
                <SidebarMenu>
                  <SidebarMenuItem>
                    <Dialog>
                      <DialogTrigger asChild>
                        <SidebarMenuButton>
                          <Plus size={12} />
                          <span className="text-xs">
                            Novo operador
                          </span>
                        </SidebarMenuButton>
                      </DialogTrigger>
                      <CreateOperatorDialog />
                    </Dialog>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <Link to={'/settings/operators/manage-operators'}>
                      <SidebarMenuButton className={`${pathname.includes('/settings/operators/manage-operators') && 'font-bold bg-sidebar-accent'}`}>
                        <span className="text-xs">
                          Gerenciar operadores
                        </span>
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup className="px-3 pt-0">
              <div className="flex flex-row items-center">
                <FileCog size={16} />
                <SidebarGroupLabel>Playlist.Ini</SidebarGroupLabel>
              </div>
              <SidebarGroupContent className="pl-4">
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
            </SidebarGroup>
            <SidebarGroup className="px-3 pt-0">
              <div className="flex flex-row items-center">
                <Cog size={16} />
                <SidebarGroupLabel>Preferências</SidebarGroupLabel>
              </div>
              <SidebarGroupContent className="pl-4">
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
            </SidebarGroup>
            <SidebarGroup className="px-3 pt-0">
              <div className="flex flex-row items-center">
                <CircleAlert size={16} />
                <SidebarGroupLabel>Outros</SidebarGroupLabel>
              </div>
              <SidebarGroupContent className="pl-4">
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton onClick={handlerDrawerDialogLicense}>
                      <span className="text-xs">
                        Licença
                      </span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <div className="w-full p-0 sm:pl-[--sidebar-width] transition-all ease-linear">
          <Outlet />
        </div>
      </SidebarProvider>
      <DrawerDialogLicense open={open} setOpen={setOpen} />
    </>
  )
}