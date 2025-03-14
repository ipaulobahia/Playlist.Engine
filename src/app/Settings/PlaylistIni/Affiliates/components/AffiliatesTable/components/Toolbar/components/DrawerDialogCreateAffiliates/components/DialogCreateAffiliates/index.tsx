import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useTranslation } from "react-i18next"

interface DialogCreateAffiliatesProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const DialogCreateAffiliates = ({ open, setOpen }: DialogCreateAffiliatesProps) => {
  const { t } = useTranslation()

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size={'sm'}>
          {t("New-Affiliates")}
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[90%]">
        <DialogHeader>
          <DialogTitle>{t("New-Affiliates")}</DialogTitle>
          <DialogDescription>
            {t("Affiliates-DialogDrawer-Description")}
          </DialogDescription>
        </DialogHeader>
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
        <DialogFooter className="flex flex-row items-center justify-between w-full">
          <DialogClose asChild>
            <Button variant={'outline'}>
              {t("Cancel")}
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button>
              {t("Save")}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}