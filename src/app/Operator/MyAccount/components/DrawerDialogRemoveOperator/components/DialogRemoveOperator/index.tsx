import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Trash2 } from "lucide-react"
import { useTranslation } from "react-i18next"

interface DialogRemoveOperatorProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const DialogRemoveOperator = ({ open, setOpen }: DialogRemoveOperatorProps) => {
  const { t } = useTranslation()

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size={'sm'} variant={'destructive'}>
          <Trash2 />
          <span>
            {t("Remove-Operator")}
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[90%]">
        <DialogHeader>
          <DialogTitle>
            <Label className="text-base font-bold text-red-700 ">
              Zona de perigo
            </Label>
          </DialogTitle>
          <DialogDescription>
            Você tem certeza que deseja fazer isso? Ao completar essa ação os dados desse operador não poderam ser recuperados.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex flex-row items-center justify-between w-full">
          <DialogClose asChild>
            <Button size={'sm'} variant={'outline'}>{t("Cancel")}</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button size={'sm'} variant={'destructive'}>
              Remover
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}