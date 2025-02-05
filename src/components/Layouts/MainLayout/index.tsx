import { ModeToggle } from "@/components/mode-toggle"
import { StationSwitcher } from "@/components/StationSwitcher"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { Link, Outlet, useLocation } from "react-router-dom"
import { NavUser } from "./components"

export const MainLayout = () => {
  const { pathname } = useLocation()

  return (
    <main className="relative flex flex-col items-center">
      <nav className="sticky top-0 z-50 flex items-center justify-center w-full bg-white border-b border-muted-foreground/25 dark:bg-background">
        <div className="flex items-center justify-between w-full px-4 h-14">
          <div className="flex flex-row items-center gap-x-5">
            <span className="text-sm font-bold">
              Playlist Engine
            </span>
            <NavigationMenu className="hidden sm:block" delayDuration={50}>
              <NavigationMenuList className="flex items-center mx-6 space-x-4 lg:space-x-6">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`h-0 p-0 text-sm font-medium transition-colors text-muted-foreground dark:hover:text-white hover:text-black ${pathname.includes("overview") && 'dark:text-white text-black'}`}>
                    <Link to={'/overview'}>
                      Overview
                    </Link>
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`h-0 p-0 text-sm font-medium transition-colors text-muted-foreground dark:hover:text-white hover:text-black ${pathname.includes("library") && 'dark:text-white text-black'}`}>
                    <Link to={'/library'}>
                      Biblioteca
                    </Link>
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger disabled className={`h-0 p-0 text-sm font-medium transition-colors text-muted-foreground dark:hover:text-white hover:text-black ${pathname.includes('/maps') && 'dark:text-white text-black'}`}>
                    <Link to={'/overview'}>
                      Mapas
                    </Link>
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to={'/operator'}>
                    <NavigationMenuTrigger className={`h-0 p-0 text-sm font-medium transition-colors text-muted-foreground dark:hover:text-white hover:text-black ${pathname.includes('/operator') && 'dark:text-white text-black'}`}>Operadores</NavigationMenuTrigger>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to={'/settings'}>
                    <NavigationMenuTrigger className={`h-0 p-0 text-sm font-medium transition-colors text-muted-foreground dark:hover:text-white hover:text-black ${pathname.includes('/settings') && 'dark:text-white text-black'}`}>Configurações</NavigationMenuTrigger>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex flex-row items-center gap-x-2">
            <ModeToggle />
            <StationSwitcher />
            <NavUser />
          </div>
        </div>
      </nav>
      <Outlet />
    </main>
  )
}