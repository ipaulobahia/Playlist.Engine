import { Button } from "@/components/ui/button"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { Label } from "@/components/ui/label"
import { Trash2 } from "lucide-react"
import { useTranslation } from "react-i18next"

interface DrawerRemoveOperatorProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const DrawerRemoveOperator = ({ open, setOpen }: DrawerRemoveOperatorProps) => {
  const { t } = useTranslation()

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button size={'sm'} variant={'destructive'}>
          <Trash2 />
          <span>
            {t("Remove-Operator")}
          </span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="px-4">
        <DrawerHeader>
          <DrawerTitle>
            <Label className="text-base font-bold text-red-700 ">
              Zona de perigo
            </Label>
          </DrawerTitle>
          <DrawerDescription>
            Você tem certeza que deseja fazer isso? Ao completar essa ação os dados desse operador não poderam ser recuperados.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="flex flex-row items-center justify-between w-full">
          <DrawerClose asChild>
            <Button className="w-full" size={'sm'} variant={'destructive'}>
              Remover
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}