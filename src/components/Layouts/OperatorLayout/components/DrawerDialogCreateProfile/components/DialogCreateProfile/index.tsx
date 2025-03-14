import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Textarea } from "@/components/ui/textarea"
import { profileColors } from "@/utils"
import { PopoverClose } from "@radix-ui/react-popover"
import { useState } from "react"
import { ColorPicker, useColor } from "react-color-palette"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

interface DialogCreateProfileProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const DialogCreateProfile = ({ open, setOpen }: DialogCreateProfileProps) => {
  const { t } = useTranslation()

  const [selectedColor, setSelectedColor] = useState<string>('')
  const [colorPicker, setColorPicker] = useColor('')
  const [isCustomColor, setIsCustomColor] = useState<boolean>(false)

  function handleColor(color: string, customColor: boolean = false) {
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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size={'sm'}>
          <span className="text-xs">
            {t('New-Profile')}
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[90%]">
        <DialogHeader>
          <DialogTitle>
            {t('New-Profile')}
          </DialogTitle>
          <DialogDescription>
            {t('New-Profile-Description')}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col gap-y-3">
            <Label htmlFor="name" className="text-left">
              {t('Name')}
            </Label>
            <Input
              className="text-xs placeholder:text-xs"
              id="name" placeholder={t('Placeholder-Name-Profile')} />
          </div>
          <div className="flex flex-col gap-y-3">
            <Label className="text-left">
              {t('Description')}
            </Label>
            <Textarea className="max-h-44 min-h-32 placeholder:text-xs" placeholder={t('Placeholder-Description-Profile')} />
          </div>
          <div className="flex flex-col gap-y-3">
            <Label className="text-left">
              {t('Color')}
            </Label>
            <div className="grid grid-cols-3 gap-2">
              {
                profileColors.map((color) => (
                  <Button
                    key={color.value}
                    onClick={() => handleColor(color.value)}
                    variant="outline"
                    size="sm"
                    aria-pressed={selectedColor === color.value && !isCustomColor}
                    className={`inline-flex items-center gap-2 whitespace-nowrap font-medium transition-colors bg-background shadow-sm rounded-md px-3 text-xs justify-start ${selectedColor === color.value && !isCustomColor ? 'ring-2 dark:ring-white ring-black' : ''}`}>
                    <span className={`flex items-center justify-center mr-1 rounded-full size-4 shrink-0 ${color.bg}`} />
                    <span>{color.label}</span>
                  </Button>
                ))
              }
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    aria-pressed={isCustomColor}
                    className={`inline-flex items-center gap-2 whitespace-nowrap font-medium transition-colors bg-background shadow-sm rounded-md px-3 text-xs justify-start ${isCustomColor ? 'ring-2 dark:ring-white ring-black' : ''}`}>
                    <span className="flex items-center justify-center mr-1 rounded-full size-4 shrink-0 rainbow" />
                    <span>{t('Personalized')}</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0" side="top">
                  <ColorPicker color={colorPicker} onChange={setColorPicker} />
                  <div className="flex flex-row justify-between p-3">
                    <Button size="sm" variant="outline">{t('Cancel')}</Button>
                    <PopoverClose asChild>
                      <Button onClick={() => handleColor(colorPicker.hex, true)} size="sm">{t('Save')}</Button>
                    </PopoverClose>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
        <DialogFooter className="flex flex-row items-center justify-between w-full">
          <DialogClose asChild>
            <Button variant={'outline'}>{t('Cancel')}</Button>
          </DialogClose>
          <Link to={'/operator/profile/create-profile'}>
            <DialogClose asChild>
              <Button type="submit">{t('Save')}</Button>
            </DialogClose>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}