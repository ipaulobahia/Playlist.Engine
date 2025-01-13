import { Button } from "@/components/ui/button"
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

export const OperatorPinDialog = () => {
  const [typePassword, setTypePassword] = useState<"password" | "text">("password")

  function changeTypePassword() {
    setTypePassword((prev) => {
      if (prev === 'password') { return 'text' }
      return 'password'
    })
  }

  return (
    <DialogContent className="w-[90%]">
      <DialogHeader className="flex flex-col justify-start">
        <DialogTitle>Aceesar operador</DialogTitle>
        <DialogDescription>
          Este operador está protegido por senha. Por favor, insira a senha para acessar o operador.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid items-center gap-3">
          <Label htmlFor="operator" className="text-sm text-start">
            Operador
          </Label>
          <Input
            readOnly
            id="operator"
            defaultValue="Paulo"
            className="dark:bg-black border-muted-foreground/25 placeholder:text-xs"
          />
        </div>
        <div className="grid items-center gap-3">
          <Label htmlFor="password" className="text-sm text-start">
            Senha
          </Label>
          <div className="relative w-full">
            <Input
              required
              type={typePassword}
              id="password"
              placeholder="*******"
              className="dark:bg-black border-muted-foreground/25 placeholder:text-xs"
            />
            <span onClick={changeTypePassword} className="absolute inset-y-0 flex items-center pl-2 right-3">
              {typePassword == 'password' ? <Eye className="w-5 h-5 cursor-pointer text-itens-primary" /> : <EyeOff className="w-5 h-5 cursor-pointer text-itens-primary" />}
            </span>
          </div>
        </div>
      </div>
      <DialogFooter className="justify-end">
        <Link to={'/overview'}>
          <Button type="submit">
            Acessar
          </Button>
        </Link>
      </DialogFooter>
    </DialogContent>
  )
}