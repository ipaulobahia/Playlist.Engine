import { DrawerDialogLicense } from "@/components/DrawerDialogLicense"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Separator } from "@radix-ui/react-context-menu"
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
      <Popover>
        <PopoverTrigger asChild>
          <Button size="icon" variant={'ghost'} className="p-0 hover-visible:outline-0 hover-visible:ring-0 size-8" >
            <Avatar className="w-8 h-8 rounded-lg">
              <AvatarImage src='https://github.com/paulobahia.png' alt="Paulo Bahia" />
              <AvatarFallback className="rounded-lg">PB</AvatarFallback>
            </Avatar>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="p-1 rounded-lg w-fit"
          side="bottom"
          align="end"
          sideOffset={4}
        >
          <div className="p-0 text-sm font-normal">
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
          </div>
          <Separator className="h-px my-1 -mx-1 bg-muted" />
          <div>
            <Link to={'/settings/my-account/operator'}>
              <div className="cursor-pointer relative flex select-none items-center gap-2 rounded-sm px-2 py-1.5 text-xs transition-colors hover:bg-accent hover:text-accent-foreground [&>svg]:size-4">
                <Cog />
                Configurações
              </div>
            </Link>
            <div className="cursor-pointer relative flex select-none items-center gap-2 rounded-sm px-2 py-1.5 text-xs transition-colors hover:bg-accent hover:text-accent-foreground [&>svg]:size-4" onClick={() => handlerDrawerDialogLicense()}>
              <Copyright />
              Licença
            </div>
          </div>
          <Separator className="h-px my-1 -mx-1 bg-muted" />
          <Link to={'/'}>
            <div className="cursor-pointer relative flex select-none items-center gap-2 rounded-sm px-2 py-1.5 text-xs transition-colors hover:bg-accent hover:text-accent-foreground [&>svg]:size-4">
              <LogOut />
              Log out
            </div>
          </Link>
        </PopoverContent>
      </Popover>
      <DrawerDialogLicense open={open} setOpen={setOpen} />
    </>
  )
}