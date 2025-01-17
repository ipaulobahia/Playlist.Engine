import { Button } from "@/components/ui/button"
import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Textarea } from "@/components/ui/textarea"
import { profileColors } from "@/utils"
import { PopoverClose } from "@radix-ui/react-popover"
import { useState } from "react"
import { ColorPicker, useColor } from "react-color-palette"
import { useNavigate } from "react-router-dom"

export const CreateProfileDialog = () => {
  const navigate = useNavigate();

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
      <DialogFooter className="flex flex-row items-center justify-between w-full">
        <DialogClose>
          <Button variant={'outline'}>Cancelar</Button>
        </DialogClose>
        <DialogClose asChild>
          <Button onClick={() => navigate('/settings/profile/create-profile')} type="submit">Salvar</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  )
}