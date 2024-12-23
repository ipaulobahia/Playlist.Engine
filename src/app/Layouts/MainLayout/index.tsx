import { ModeToggle } from "@/components/mode-toggle"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"
import { Link, Outlet, useLocation } from "react-router-dom"

export const MainLayout = () => {
  const { pathname } = useLocation()

  const ListItem = forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground", className)}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  })

  return (
    <main className="flex flex-col items-center h-screen dark:bg-black">
      <nav className="flex items-center justify-center w-full border-b border-muted dark:bg-background">
        <div className="flex items-center justify-between w-full px-4 h-14">
          <div className="flex flex-row items-center gap-x-5">
            <span className="text-sm font-bold">
              Playlist Engine
            </span>
            <NavigationMenu>
              <NavigationMenuList className="flex items-center mx-6 space-x-4 lg:space-x-6">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`h-0 p-0 text-sm font-medium transition-colors text-muted-foreground dark:hover:text-white hover:text-black ${pathname == '/dashboard' && 'dark:text-white text-black'}`}>
                    <Link to={'/dashboard'}>
                      Overview
                    </Link>
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`h-0 p-0 text-sm font-medium transition-colors text-muted-foreground dark:hover:text-white hover:text-black ${pathname == '/folders' && 'dark:text-white text-black'}`}>Pastas</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid grid-cols-3 grid-rows-3 gap-3 p-3 w-[600px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <div
                            className="flex flex-col justify-end w-full h-full p-4 no-underline rounded-md outline-none select-none bg-gradient-to-b from-muted/50 to-muted focus:shadow-md">
                            <div className="mt-4 mb-2 text-lg font-medium">
                              Playlist Engine
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                            </p>
                          </div>
                        </NavigationMenuLink>
                      </li>
                      <li className="col-span-2">
                        <NavigationMenuLink asChild>
                          <Link
                            to={'/folders'}
                            className="block p-3 space-y-1 leading-none no-underline transition-colors rounded-md outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Gerenciar pastas</div>
                            <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
                              Organize e gerencie seus arquivos de forma prática e eficiente
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li className="col-span-2">
                        <NavigationMenuLink asChild>
                          <Link
                            to={'/folders'}
                            className="block p-3 space-y-1 leading-none no-underline transition-colors rounded-md outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Upload de arquivos</div>
                            <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
                              Faça o upload dos seus arquivos de maneira simples e rápida
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li className="col-span-2">
                        <NavigationMenuLink asChild>
                          <Link
                            to={'/folders'}
                            className="block p-3 space-y-1 leading-none no-underline transition-colors rounded-md outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Uploads recente</div>
                            <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
                              Acesse e gerencie facilmente seus uploads mais recentes
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`h-0 p-0 text-sm font-medium transition-colors text-muted-foreground dark:hover:text-white hover:text-black ${pathname == '/maps' && 'dark:text-white text-black'}`}>Mapas</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-3 w-[600px] lg:grid-cols-2">
                      <ListItem href="/" title="Gerenciar Mapa Comerciais">
                        Organize e administre seus mapas comerciais de forma prática e eficiente.
                      </ListItem>
                      <ListItem href="/" title="Criar Mapa Comercial">
                        Crie novos mapas comerciais de maneira simples e rápida.
                      </ListItem>
                      <ListItem href="/" title="Gerenciar Mapas Musicais">
                        Organize e gerencie seus mapas musicais de forma fácil e rápida.
                      </ListItem>
                      <ListItem href="/" title="Criar Mapa Musical">
                        Crie novos mapas musicais de forma simples e intuitiva.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`h-0 p-0 text-sm font-medium transition-colors text-muted-foreground dark:hover:text-white hover:text-black ${pathname == '/settings' && 'dark:text-white text-black'}`}>Configurações</NavigationMenuTrigger>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <nav className="flex items-center mx-6 space-x-4 lg:space-x-6">
            <ModeToggle />
          </nav>
        </div>
      </nav>
      <Outlet />
    </main>
  )
}