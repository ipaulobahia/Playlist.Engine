import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { DialogClose } from "@radix-ui/react-dialog"

interface DialogAddFileProps {
  children: React.ReactNode
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const DialogAddFile = ({ children, open, setOpen }: DialogAddFileProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="w-[90%]">
        <DialogHeader>
          <DialogTitle>Adicionar arquivo</DialogTitle>
          <DialogDescription>
            Informe como deseja adicionar um novo arquivo a esta lista.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-row items-center p-2 border rounded-md border-muted-foreground/25 gap-x-3">
            <div className="rounded-md bg-muted size-14" />
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-semibold">[Título]</span>
              <span className="text-xs font-normal text-muted-foreground">[Descrição]</span>
            </div>
          </div>
          <div className="flex flex-row items-center p-2 border rounded-md border-muted-foreground/25 gap-x-3">
            <div className="rounded-md bg-muted size-14" />
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-semibold">[Título]</span>
              <span className="text-xs font-normal text-muted-foreground">[Descrição]</span>
            </div>
          </div>
        </div>
        <DialogFooter className="flex flex-row items-center justify-between w-full">
          <DialogClose>
            <Button variant={'outline'}>Cancelar</Button>
          </DialogClose>
          <Button>
            <span>Confirmar</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}