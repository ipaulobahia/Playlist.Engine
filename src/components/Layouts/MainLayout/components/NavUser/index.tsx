import { DrawerDialogLicense } from "@/components/DrawerDialogLicense"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Cog, Copyright, LogOut } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

export const NavUser = () => {
  const [open, setOpen] = useState(false)

  function handlerDrawerDialogLicense() {
    setOpen(prev => !prev)
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon" variant={'ghost'} className="p-0 focus-visible:outline-0 focus-visible:ring-0 size-8" >
            <Avatar className="w-8 h-8 rounded-lg">
              <AvatarImage src='https://github.com/paulobahia.png' alt="Paulo Bahia" />
              <AvatarFallback className="rounded-lg">PB</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="rounded-lg min-w-56"
          side="bottom"
          align="end"
          sideOffset={4}
        >
          <DropdownMenuLabel className="p-0 font-normal">
            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
              <Avatar className="w-8 h-8 rounded-lg">
                <AvatarImage src='https://github.com/paulobahia.png' alt="Paulo Bahia" />
                <AvatarFallback className="rounded-lg">PB</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-sm leading-tight text-left">
                <span className="font-semibold truncate">Paulo Bahia</span>
                <span className="text-xs truncate">pauloipatinga22@gmail.com</span>
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <Link to={'/settings/my-account/operator'}>
              <DropdownMenuItem>
                <Cog />
                Configurações
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem onClick={handlerDrawerDialogLicense}>
              <Copyright />
              Licença
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <Link to={'/'}>
            <DropdownMenuItem>
              <LogOut />
              Log out
            </DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
      <DrawerDialogLicense open={open} setOpen={setOpen} />
    </>
  )
}