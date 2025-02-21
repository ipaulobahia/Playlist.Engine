import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface DialogCreateAffiliatesProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const DialogCreateAffiliates = ({ open, setOpen }: DialogCreateAffiliatesProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size={'sm'}>
          Nova afiliada
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[90%]">
        <DialogHeader>
          <DialogTitle>Nova afiliada</DialogTitle>
          <DialogDescription>
            Preencha os campos abaixo para criar uma afiliada. Ela sera utilizada para que a cabeças de rede enviem disparo via IP.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col gap-y-3">
            <Label htmlFor="name" className="text-left">
              Nome
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
            <Button variant={'outline'}>Cancelar</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button>Salvar</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}