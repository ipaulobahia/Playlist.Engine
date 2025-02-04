import { Button } from "@/components/ui/button"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface DrawerCreateAffiliatesProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const DrawerCreateAffiliates = ({ open, setOpen }: DrawerCreateAffiliatesProps) => {
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button size={'sm'}>
          Nova afiliada
        </Button>
      </DrawerTrigger>
      <DrawerContent className="px-3">
        <DrawerHeader>
          <DrawerTitle>Nova afiliada</DrawerTitle>
          <DrawerDescription>
            Preencha os campos abaixo para criar uma afiliada. Ela sera utilizada para que a cabeças de rede enviem disparo via IP.
          </DrawerDescription>
        </DrawerHeader>
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
        <DrawerFooter className="flex flex-row items-center justify-between w-full">
          <DrawerClose asChild>
            <Button className="w-full">Salvar</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}