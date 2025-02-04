import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { ChevronLeft, ChevronRight, UserCog } from "lucide-react"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

export const CreateProfileSidebarGroup = () => {
  const { pathname } = useLocation()
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      <div className="px-2 pt-2 w-fit">
        <Link to={'/operator'}>
          <Button className="flex flex-row items-center justify-center px-2" size={'sm'} variant={'ghost'}>
            <ChevronLeft size={16} />
            <span className="text-sm font- text-sidebar-foreground">Voltar</span>
          </Button>
        </Link>
      </div>
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="group/collapsible" asChild>
        <SidebarGroup className="px-3">
          <CollapsibleTrigger asChild>
            <div className="flex flex-row items-center px-2 rounded-md cursor-pointer hover:bg-sidebar-accent hover:text-sidebar-accent-foregroun">
              <UserCog size={16} />
              <SidebarGroupLabel>Preferências do Perfil</SidebarGroupLabel>
              <ChevronRight size={16} className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarGroupContent className="pl-6">
              <SidebarMenu>
                <SidebarMenuItem>
                  <Link to={'/operator/profile/create-profile/general'}>
                    <SidebarMenuButton className={`${(pathname == '/operator/profile/create-profile/general') && 'font-bold bg-sidebar-accent'}`}>
                      <span className="text-xs">
                        Geral
                      </span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <Link to={'/operator/profile/create-profile/edition'}>
                    <SidebarMenuButton className={`${pathname.includes('/operator/profile/create-profile/edit') && 'font-bold bg-sidebar-accent'}`}>
                      <span className="text-xs">
                        Edição
                      </span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <Link to={'/operator/profile/create-profile/quickstart'}>
                    <SidebarMenuButton className={`${pathname.includes('/operator/profile/create-profile/quickstart') && 'font-bold bg-sidebar-accent'}`}>
                      <span className="text-xs">
                        QuickStart
                      </span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <Link to={'/operator/profile/create-profile/switching-blocks'}>
                    <SidebarMenuButton className={`${pathname.includes('/operator/profile/create-profile/switching-blocks') && 'font-bold bg-sidebar-accent'}`}>
                      <span className="text-xs">
                        Mudança de blocos
                      </span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <Link to={'/operator/profile/create-profile/commercial-block'}>
                    <SidebarMenuButton className={`${pathname.includes('/operator/profile/create-profile/commercial-block') && 'font-bold bg-sidebar-accent'}`}>
                      <span className="text-xs">
                        Bloco comercial
                      </span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <Link to={'/operator/profile/create-profile/musical-block'}>
                    <SidebarMenuButton className={`${pathname.includes('/operator/profile/create-profile/musical-block') && 'font-bold bg-sidebar-accent'}`}>
                      <span className="text-xs">
                        Bloco musical
                      </span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <Link to={'/operator/profile/create-profile/commercials'}>
                    <SidebarMenuButton className={`${pathname.includes('/operator/profile/create-profile/commercials') && 'font-bold bg-sidebar-accent'}`}>
                      <span className="text-xs">
                        Comercial
                      </span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <Link to={'/operator/profile/create-profile/musics'}>
                    <SidebarMenuButton className={`${pathname.includes('/operator/profile/create-profile/musics') && 'font-bold bg-sidebar-accent'}`}>
                      <span className="text-xs">
                        Músicas
                      </span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <Link to={'/operator/profile/create-profile/sweepers'}>
                    <SidebarMenuButton className={`${pathname.includes('/operator/profile/create-profile/sweepers') && 'font-bold bg-sidebar-accent'}`}>
                      <span className="text-xs">
                        Vinhetas
                      </span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <Link to={'/operator/profile/create-profile/another-types'}>
                    <SidebarMenuButton className={`${pathname.includes('/operator/profile/create-profile/another-types') && 'font-bold bg-sidebar-accent'}`}>
                      <span className="text-xs">
                        Inserções genéricas
                      </span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <Link to={'/operator/profile/create-profile/pause'}>
                    <SidebarMenuButton className={`${pathname.includes('/operator/profile/create-profile/pause') && 'font-bold bg-sidebar-accent'}`}>
                      <span className="text-xs">
                        Pausas
                      </span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <Link to={'/operator/profile/create-profile/display-panel'}>
                    <SidebarMenuButton className={`${pathname.includes('/operator/profile/create-profile/display-panel') && 'font-bold bg-sidebar-accent'}`}>
                      <span className="text-xs">
                        Permitir exibir o painel
                      </span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <Link to={'/operator/profile/create-profile/folder'}>
                    <SidebarMenuButton className={`${pathname.includes('/operator/profile/create-profile/folder') && 'font-bold bg-sidebar-accent'}`}>
                      <span className="text-xs">
                        Pastas
                      </span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </CollapsibleContent>
        </SidebarGroup>
      </Collapsible>
    </>
  )
}