import { Button } from "@/components/ui/button"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useTranslation } from "react-i18next"

interface DrawerCreateAffiliatesProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const DrawerCreateAffiliates = ({ open, setOpen }: DrawerCreateAffiliatesProps) => {
  const { t } = useTranslation()

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button size={'sm'}>{t("New-Affiliates")}</Button>
      </DrawerTrigger>
      <DrawerContent className="px-3">
        <DrawerHeader>
          <DrawerTitle>{t("New-Affiliates")}</DrawerTitle>
          <DrawerDescription>
            {t("Affiliates-DialogDrawer-Description")}
          </DrawerDescription>
        </DrawerHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col gap-y-3">
            <Label htmlFor="name" className="text-left">
              {t("Name")}
            </Label>
            <Input
              className="text-xs placeholder:text-xs"
              id="name" placeholder="Rádio 1, Rádio 2 ou Rádio 3" />
          </div>
          <div className="flex flex-col gap-y-3">
            <Label htmlFor="ip" className="text-left">
              IP
            </Label>
            <Input
              className="text-xs placeholder:text-xs"
              id="ip" placeholder="000.000.0.0" />
          </div>
        </div>
        <DrawerFooter className="flex flex-row items-center justify-between w-full">
          <DrawerClose asChild>
            <Button className="w-full">{t("Save")}</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}