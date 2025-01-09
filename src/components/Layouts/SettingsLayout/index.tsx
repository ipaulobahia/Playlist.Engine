// @ts-ignore
import "react-color-palette/css";
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider } from "@/components/ui/sidebar"
import { Textarea } from "@/components/ui/textarea"
import { ChevronLeft, Plus, User, UserPen, Users } from "lucide-react"
import { useState } from "react"
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom"
import { ColorPicker, useColor } from "react-color-palette";
import { PopoverClose } from "@radix-ui/react-popover"
import { profileColors } from "@/utils";

export const SettingsLayout = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate();
  function goBack() { navigate(-1) }

  const [selectedColor, setSelectedColor] = useState<string>('')
  const [colorPicker, setColorPicker] = useColor('')
  const [isCustomColor, setIsCustomColor] = useState<boolean>(false)

  function handlerColor(color: string, customColor: boolean = false) {
    if (customColor) {
      setSelectedColor(color)
      setIsCustomColor(true)
      return
    }

    setSelectedColor(color)
    setIsCustomColor(false)
  }

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
                  <Dialog>
                    <DialogTrigger asChild>
                      <SidebarMenuButton>
                        <Plus size={12} />
                        <span className="text-xs">
                          Novo perfil
                        </span>
                      </SidebarMenuButton>
                    </DialogTrigger>
                    <DialogContent className="w-[90%]">
                      <DialogHeader>
                        <DialogTitle>Novo perfil</DialogTitle>
                        <DialogDescription>
                          Preencha os campos abaixo para criar seu perfil. Defina um nome único, uma descrição e selecione uma cor.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="flex flex-col gap-y-3">
                          <Label htmlFor="name" className="text-left">
                            Nome
                          </Label>
                          <Input id="name" placeholder="Padrão, Locutor, Gestor ou Administrador" />
                        </div>
                        <div className="flex flex-col gap-y-3">
                          <Label className="text-left">
                            Descrição
                          </Label>
                          <Textarea className="max-h-44 min-h-32 placeholder:text-xs" placeholder="Adicione uma breve descrição sobre o perfil." />
                        </div>
                        <div className="flex flex-col gap-y-3">
                          <Label className="text-left">
                            Color
                          </Label>
                          <div className="grid grid-cols-3 gap-2">
                            {profileColors.map((color) => (
                              <Button
                                key={color.value}
                                onClick={() => handlerColor(color.value)}
                                variant="outline"
                                size="sm"
                                aria-pressed={selectedColor === color.value && !isCustomColor}
                                className={`inline-flex items-center gap-2 whitespace-nowrap font-medium transition-colors bg-background shadow-sm rounded-md px-3 text-xs justify-start ${selectedColor === color.value && !isCustomColor ? 'ring-2 dark:ring-white ring-black' : ''}`}>
                                <span className={`flex items-center justify-center mr-1 rounded-full size-4 shrink-0 ${color.bg}`} />
                                <span>{color.label}</span>
                              </Button>
                            ))}
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  aria-pressed={isCustomColor}
                                  className={`inline-flex items-center gap-2 whitespace-nowrap font-medium transition-colors bg-background shadow-sm rounded-md px-3 text-xs justify-start ${isCustomColor ? 'ring-2 dark:ring-white ring-black' : ''}`}>
                                  <span className="flex items-center justify-center mr-1 rounded-full size-4 shrink-0 rainbow" />
                                  <span>Personalizado</span>
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="p-0" side="top">
                                <ColorPicker color={colorPicker} onChange={setColorPicker} />
                                <div className="flex flex-row justify-between p-3">
                                  <Button size="sm" variant="outline">Cancelar</Button>
                                  <PopoverClose asChild>
                                    <Button onClick={() => handlerColor(colorPicker.hex, true)} size="sm">Salvar</Button>
                                  </PopoverClose>
                                </div>
                              </PopoverContent>
                            </Popover>
                          </div>
                        </div>
                      </div>
                      <DialogFooter className="flex flex-row items-center justify-between w-full">
                        <DialogClose>
                          <Button variant={'outline'}>Cancelar</Button>
                        </DialogClose>
                        <DialogClose asChild>
                          <Button onClick={() => navigate('/settings/profile/create-profile')} type="submit">Salvar</Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
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
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                          Make changes to your profile here. Click save when you're done.
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <Link to={'/settings/operators/manage-operators'}>
                    <SidebarMenuButton className={`${pathname.includes('/settings/operators/manage-operatorss') && 'font-bold bg-sidebar-accent'}`}>
                      <span className="text-xs">
                        Gerenciar operadores
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