import { Button } from "@/components/ui/button"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useTranslation } from "react-i18next"

interface DrawerCreateOperatorProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const DrawerCreateOperator = ({ open, setOpen }: DrawerCreateOperatorProps) => {
  const { t } = useTranslation()

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button>
          <span className="text-xs">
            {t('New-Operator')}
          </span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="px-3">
        <DrawerHeader>
          <DrawerTitle>
            {t('New-Operator')}
          </DrawerTitle>
          <DrawerDescription>
            {t('New-Operator-Description')}
          </DrawerDescription>
        </DrawerHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col gap-y-3">
            <Label htmlFor="name" className="text-left">
              {t('Name')}
            </Label>
            <Input
              className="text-xs placeholder:text-xs"
              id="name"
              placeholder={t("Placeholder-Name-New-Operator")} />
          </div>
          <div className="flex flex-col gap-y-3">
            <Label htmlFor="name" className="text-left">
              Pin
            </Label>
            <Input
              className="text-xs placeholder:text-xs"
              id="pin"
              placeholder="********" />
          </div>
          <div className="flex flex-col gap-y-3">
            <Label htmlFor="name" className="text-left">
              {t("Profile")}
            </Label>
            <Select>
              <SelectTrigger className="text-xs">
                <SelectValue placeholder={t("Select-Profile")} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>{t("Profiles")}</SelectLabel>
                  <SelectItem value="1">Padrão</SelectItem>
                  <SelectItem value="2">Locutor</SelectItem>
                  <SelectItem value="3">Gestor</SelectItem>
                  <SelectItem value="4">Administrador</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DrawerFooter className="flex flex-row items-center justify-between w-full">
          <DrawerClose asChild>
            <Button className="w-full" type="submit">{t("Save")}</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}