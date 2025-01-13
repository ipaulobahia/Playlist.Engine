import { Button } from "@/components/ui/button"
import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useNavigate } from "react-router-dom"

export const CreateOperatorDialog = () => {
  const navigate = useNavigate();

  return (
    <DialogContent className="w-[90%]">
      <DialogHeader>
        <DialogTitle>Novo operador</DialogTitle>
        <DialogDescription>
          Preencha os campos abaixo para criar um novo operador. Defina um nome e selecione um perfil.
        </DialogDescription>
      </DialogHeader>
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
      <DialogFooter className="flex flex-row items-center justify-between w-full">
        <DialogClose>
          <Button variant={'outline'}>Cancelar</Button>
        </DialogClose>
        <DialogClose asChild>
          <Button onClick={() => navigate('/settings/profile/create-profile')} type="submit">Salvar</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  )
}