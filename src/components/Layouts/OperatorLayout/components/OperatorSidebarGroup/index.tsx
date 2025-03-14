import { Button } from "@/components/ui/button"
import { SidebarGroup, SidebarGroupLabel } from "@/components/ui/sidebar"
import { ChevronLeft, User, UserPen, Users } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Link, useLocation, useNavigate } from "react-router-dom"

export const OperatorSidebarGroup = () => {
  const { t } = useTranslation()
  const { pathname } = useLocation()
  const navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }

  return (
    <>
      <div className="px-2 pt-2 w-fit">
        <Button onClick={goBack} className="flex flex-row items-center justify-center px-2" size={'sm'} variant={'ghost'}>
          <ChevronLeft size={16} />
          <span className="text-sm font- text-sidebar-foreground">Voltar</span>
        </Button>
      </div>
      <SidebarGroup className="p-0 px-3">
        <Link to={'/operator/my-account'}>
          <div className={`flex flex-row items-center px-2 rounded-md cursor-pointer hover:bg-sidebar-accent hover:text-sidebar-accent-foregroun ${pathname === '/operator/my-account' && 'bg-sidebar-accent text-sidebar-accent-foregroun'}`}>
            <User size={16} />
            <SidebarGroupLabel className={`${pathname === '/operator/my-account' && 'font-bold text-accent-foreground'}`}>[Nome do Operador]</SidebarGroupLabel>
          </div>
        </Link>
      </SidebarGroup>
      <SidebarGroup className="p-0 px-3">
        <Link to={'/operator/profile/manage-profile'}>
          <div className={`flex flex-row items-center px-2 rounded-md cursor-pointer hover:bg-sidebar-accent hover:text-sidebar-accent-foregroun ${pathname === '/operator/profile/manage-profile' && 'bg-sidebar-accent text-sidebar-accent-foregroun'}`}>
            <UserPen size={16} />
            <SidebarGroupLabel className={`${pathname === '/operator/profile/manage-profile' && 'font-bold text-accent-foreground'}`}>{t('Profile')}</SidebarGroupLabel>
          </div>
        </Link>
      </SidebarGroup>
      <SidebarGroup className="p-0 px-3">
        <Link to={'/operator/manage-operators'}>
          <div className={`flex flex-row items-center px-2 rounded-md cursor-pointer hover:bg-sidebar-accent hover:text-sidebar-accent-foregroun ${pathname === '/operator/manage-operators' && 'bg-sidebar-accent text-sidebar-accent-foregroun'}`}>
            <Users size={16} />
            <SidebarGroupLabel className={`${pathname === '/operator/manage-operators' && 'font-bold text-accent-foreground'}`}>{t('Operators')}</SidebarGroupLabel>
          </div>
        </Link>
      </SidebarGroup>
    </>
  )
}