import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useTranslation } from "react-i18next"

interface DialogCreateOperatorProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const DialogCreateOperator = ({ open, setOpen }: DialogCreateOperatorProps) => {
  const { t } = useTranslation()

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <span className="text-xs">
            {t('New-Operator')}
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[90%]">
        <DialogHeader>
          <DialogTitle>{t('New-Operator')}</DialogTitle>
          <DialogDescription>
            {t('New-Operator-Description')}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col gap-y-3">
            <Label htmlFor="name" className="text-left">
              {t("Name")}
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
        <DialogFooter className="flex flex-row items-center justify-between w-full">
          <DialogClose asChild>
            <Button variant={'outline'}>{t("Cancel")}</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="submit">{t("Save")}</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}