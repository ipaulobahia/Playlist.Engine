import { Button } from "@/components/ui/button"
import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { PingLoading } from "@/components/ui/ping-loading"
import { useDeletePlaylist } from "@/service/api/playlist/mutate/deletePlaylist"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"

interface DialogDeleteListProps {
  folderId: number
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const DialogDeleteList = ({ folderId, setOpen }: DialogDeleteListProps) => {
  const { t } = useTranslation()

  const { mutate, isSuccess, isError, isPending } = useDeletePlaylist()

  function handleDeletePlaylist() {
    mutate(folderId)
  }

  useEffect(() => {
    if (isSuccess && !isError) {
      setOpen(false)
    }
  }, [isSuccess])

  return (
    <DialogContent className="w-[90%]">
      <DialogHeader>
        <DialogTitle>
          <Label className="text-base font-bold text-red-700 ">
            Atenção
          </Label>
        </DialogTitle>
        <DialogDescription>
          Você tem certeza que deseja fazer isso? Ao completar essa ação sua lista e todos itens associados a ela seram removidos.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter className="flex flex-row items-center justify-between w-full">
        <DialogClose asChild>
          <Button size={'sm'} variant={'outline'}>{t("Cancel")}</Button>
        </DialogClose>
        <Button disabled={isPending} onClick={handleDeletePlaylist} size={'sm'} variant={'destructive'}>
          {
            isPending
              ?
              <PingLoading />
              :
              <span>Remover</span>
          }
        </Button>
      </DialogFooter>
    </DialogContent>
  )
}