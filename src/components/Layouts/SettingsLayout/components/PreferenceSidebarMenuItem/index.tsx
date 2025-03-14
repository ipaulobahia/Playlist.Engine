import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { useTranslation } from "react-i18next"
import { Link, useLocation } from "react-router-dom"

interface PreferenceSidebarMenuItemProps {
  path: string
  name: string
}

export const PreferenceSidebarMenuItem = ({ name, path }: PreferenceSidebarMenuItemProps) => {
  const { t } = useTranslation()

  const { pathname } = useLocation()

  return (
    <Link to={`/settings/preference/${path}`}>
      <SidebarMenuItem>
        <SidebarMenuButton className={`${pathname.includes(`/settings/preference/${path}`) && 'font-bold bg-sidebar-accent'}`}>
          <span className="text-xs">
            {t(name)}
          </span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </Link>
  )
}