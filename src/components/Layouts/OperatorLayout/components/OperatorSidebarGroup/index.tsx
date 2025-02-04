import { Button } from "@/components/ui/button"
import { Collapsible } from "@/components/ui/collapsible"
import { SidebarGroup, SidebarGroupLabel } from "@/components/ui/sidebar"
import { ChevronLeft, User, UserPen, Users } from "lucide-react"
import { Link } from "react-router-dom"

export const OperatorSidebarGroup = () => {
  return (
    <>
      <div className="px-2 pt-2 w-fit">
        <Link to={'/overview'}>
          <Button className="flex flex-row items-center justify-center px-2" size={'sm'} variant={'ghost'}>
            <ChevronLeft size={16} />
            <span className="text-sm font- text-sidebar-foreground">Voltar</span>
          </Button>
        </Link>
      </div>
      <Collapsible className="group/collapsible" asChild>
        <SidebarGroup className="px-3">
          <Link to={'/operator/my-account'}>
            <div className="flex flex-row items-center px-2 rounded-md cursor-pointer hover:bg-sidebar-accent hover:text-sidebar-accent-foregroun">
              <User size={16} />
              <SidebarGroupLabel>[Nome do Operador]</SidebarGroupLabel>
            </div>
          </Link>
        </SidebarGroup>
      </Collapsible>
      <SidebarGroup className="px-3 pt-0">
        <Link to={'/operator/profile/manage-profile'}>
          <div className="flex flex-row items-center px-2 rounded-md cursor-pointer hover:bg-sidebar-accent hover:text-sidebar-accent-foregroun">
            <UserPen size={16} />
            <SidebarGroupLabel>Perfil</SidebarGroupLabel>
          </div>
        </Link>
      </SidebarGroup>
      <SidebarGroup className="px-3 pt-0">
        <Link to={'/operator/manage-operators'}>
          <div className="flex flex-row items-center px-2 rounded-md cursor-pointer hover:bg-sidebar-accent hover:text-sidebar-accent-foregroun">
            <Users size={16} />
            <SidebarGroupLabel>Operadores</SidebarGroupLabel>
          </div>
        </Link>
      </SidebarGroup>
    </>
  )
}