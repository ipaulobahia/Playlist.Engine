import { Button } from "@/components/ui/button"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { SidebarMenuButton } from "@/components/ui/sidebar"
import { Textarea } from "@/components/ui/textarea"
import { profileColors } from "@/utils"
import { PopoverClose } from "@radix-ui/react-popover"
import { Plus } from "lucide-react"
import { useState } from "react"
import { ColorPicker, useColor } from "react-color-palette"
import { useNavigate } from "react-router-dom"

interface DrawerCreateProfileProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const DrawerCreateProfile = ({ open, setOpen }: DrawerCreateProfileProps) => {
  const navigate = useNavigate();

  const [selectedColor, setSelectedColor] = useState<string>('')
  const [colorPicker, setColorPicker] = useColor('')
  const [isCustomColor, setIsCustomColor] = useState<boolean>(false)

  function handlerColor(color: string, customColor: boolean = false) {
    if (customColor) {
      setSelectedColor(color)
      setIsCustomColor(true)
    }
    else {
      setSelectedColor(color)
      setIsCustomColor(false)
    }
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <SidebarMenuButton>
          <Plus size={12} />
          <span className="text-xs">
            Novo perfil
          </span>
        </SidebarMenuButton>
      </DrawerTrigger>
      <DrawerContent className="px-3">
        <DrawerHeader>
          <DrawerTitle>Novo perfil</DrawerTitle>
          <DrawerDescription>
            Preencha os campos abaixo para criar seu perfil. Defina um nome único, uma descrição e selecione uma cor.
          </DrawerDescription>
        </DrawerHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col gap-y-3">
            <Label htmlFor="name" className="text-left">
              Nome
            </Label>
            <Input
              className="text-xs placeholder:text-xs"
              id="name" placeholder="Padrão, Locutor, Gestor ou Administrador" />
          </div>
          <div className="flex flex-col gap-y-3">
            <Label className="text-left">
              Descrição
            </Label>
            <Textarea className="max-h-44 min-h-32 placeholder:text-xs" placeholder="Adicione uma breve descrição sobre o perfil." />
          </div>
          <div className="flex flex-col gap-y-3">
            <Label className="text-left">
              Cor
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
        <DrawerFooter className="flex flex-row items-center justify-between w-full">
          <DrawerClose>
            <Button variant={'outline'}>Cancelar</Button>
          </DrawerClose>
          <DrawerClose asChild>
            <Button onClick={() => navigate('/settings/profile/create-profile')} type="submit">Salvar</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}