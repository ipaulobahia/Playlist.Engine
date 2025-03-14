import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

interface DrawerOperatorPinProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  operator: {
    id: number;
    avatar: string;
    name: string;
    profile: string;
  }
}

export const DrawerOperatorPin = ({ open, operator, setOpen }: DrawerOperatorPinProps) => {
  const { t } = useTranslation()

  const { id, name, profile } = operator

  const [typePassword, setTypePassword] = useState<"password" | "text">("password")

  function changeTypePassword() {
    setTypePassword((prev) => {
      if (prev === 'password') { return 'text' }
      return 'password'
    })
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Card key={id} className="flex flex-col items-center justify-center gap-3 p-6 border rounded shadow-none cursor-pointer hover:bg-secondary dark:bg-black border-muted-foreground/20 dark:border-muted/80 dark:hover:bg-secondary/20 dark:hover:text-accent-foreground">
          <Avatar className="size-16">
            <AvatarImage src="" />
            <AvatarFallback className="font-bold">{name.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-center justify-center gap-1 text-center">
            <span className="text-sm font-bold">
              {name}
            </span>
            <Badge variant={'outline'} className="text-xs font-semibold text-black bg-white rounded">
              {profile}
            </Badge>
          </div>
        </Card>
      </DrawerTrigger>
      <DrawerContent className="px-3">
        <DrawerHeader className="flex flex-col justify-start">
          <DrawerTitle>{t('Access-Operator')}</DrawerTitle>
          <DrawerDescription>
            {t("Access-Operator-Description")}
          </DrawerDescription>
        </DrawerHeader>
        <div className="grid gap-4 py-4">
          <div className="grid items-center gap-3">
            <Label htmlFor="operator" className="text-sm text-start">
              {t("Operator")}
            </Label>
            <Input
              readOnly
              id="operator"
              className="dark:bg-black border-muted-foreground/25 placeholder:text-xs"
            />
          </div>
          <div className="grid items-center gap-3">
            <Label htmlFor="password" className="text-sm text-start">
              {t("Password")}
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
        <DrawerFooter className="items-end">
          <Link to={'/dashboard'}>
            <Button size={'sm'} type="submit">
              {t("Access")}
            </Button>
          </Link>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}