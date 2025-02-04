import { Button } from "@/components/ui/button"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Link } from "react-router-dom"

interface DrawerCreateOperatorProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const DrawerCreateOperator = ({ open, setOpen }: DrawerCreateOperatorProps) => {
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button>
          <span className="text-xs">
            Novo operador
          </span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="px-3">
        <DrawerHeader>
          <DrawerTitle>Novo operador</DrawerTitle>
          <DrawerDescription>
            Preencha os campos abaixo para criar um novo operador. Defina um nome e selecione um perfil.
          </DrawerDescription>
        </DrawerHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col gap-y-3">
            <Label htmlFor="name" className="text-left">
              Nome
            </Label>
            <Input
              className="text-xs placeholder:text-xs"
              id="name"
              placeholder="Bruno, João, Davi ou Felipe" />
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
              Perfil
            </Label>
            <Select>
              <SelectTrigger className="text-xs">
                <SelectValue placeholder="Selecione um perfil" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Perfils</SelectLabel>
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
          <Link className="w-full" to={'/operator/profile/create-profile'}>
            <DrawerClose asChild>
              <Button className="w-full" type="submit">Salvar</Button>
            </DrawerClose>
          </Link>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}