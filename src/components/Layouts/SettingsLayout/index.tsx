import { Button } from "@/components/ui/button"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider } from "@/components/ui/sidebar"
import { ChevronLeft, User, Users } from "lucide-react"
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom"

export const SettingsLayout = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate();
  function goBack() { navigate(-1) }

  return (
    <SidebarProvider>
      <Sidebar collapsible="none" className="fixed z-10 hidden h-screen border-r sm:block top-14 border-muted-foreground/25">
        <SidebarContent className="gap-1.5">
          <div className="pt-2">
            <Button className="flex flex-row items-center justify-center" onClick={goBack} size={'sm'} variant={'ghost'}>
              <ChevronLeft size={16} />
              <span className="text-sm font- text-sidebar-foreground">Voltar</span>
            </Button>
          </div>
          <SidebarGroup className="px-3">
            <div className="flex flex-row items-center">
              <User size={16} />
              <SidebarGroupLabel>[Nome do Operador]</SidebarGroupLabel>
            </div>
            <SidebarGroupContent className="pl-4">
              <SidebarMenu>
                <SidebarMenuItem>
                  <Link to={'/settings/my-account/profile'}>
                    <SidebarMenuButton className={`${pathname.includes('/profile') && 'font-bold bg-sidebar-accent'}`}>
                      <span className="text-xs">
                        Perfil
                      </span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <Link to={'/settings/my-account/general'}>
                    <SidebarMenuButton className={`${pathname.includes('/general') && 'font-bold bg-sidebar-accent'}`}>
                      <span className="text-xs">
                        Geral
                      </span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <Link to={'/settings/my-account/appearance'}>
                    <SidebarMenuButton className={`${pathname.includes('/appearance') && 'font-bold bg-sidebar-accent'}`}>
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
              <Users size={16} />
              <SidebarGroupLabel>Operadores</SidebarGroupLabel>
            </div>
            <SidebarGroupContent className="pl-4">
              <SidebarMenu>
                <SidebarMenuItem>
                  <Link to={'/settings/operators/manage-team'}>
                    <SidebarMenuButton className={`${pathname.includes('/manage-team') && 'font-bold bg-sidebar-accent'}`}>
                      <span className="text-xs">
                        Gerenciar equipe
                      </span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <div className="w-full p-0 sm:pl-[--sidebar-width] transition-all ease-linear">
        <Outlet />
      </div>
    </SidebarProvider >
  )
}