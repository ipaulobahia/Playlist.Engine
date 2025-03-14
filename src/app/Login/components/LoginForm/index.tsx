import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

export const LoginForm = () => {
  const { t } = useTranslation()

  const [typePassword, setTypePassword] = useState<"password" | "text">("password")

  function changeTypePassword() {
    setTypePassword((prev) => {
      if (prev === 'password') { return 'text' }
      return 'password'
    })
  }

  return (
    <div className="flex flex-col gap-6">
      <Card className="overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2 h-[45vh]">
          <form className="flex items-center justify-center p-8 bg-sidebar">
            <div className="flex flex-col w-full gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">
                  {t('Welcome-Back')}
                </h1>
                <p className="text-balance text-muted-foreground">
                  {t('Playlist-Engine-Account')}
                </p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">{t('E-mail')}</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seuemail@playlist.com"
                  required
                  className="dark:bg-black border-muted-foreground/25 placeholder:text-xs"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">{t('Password')}</Label>
                </div>
                <div className="relative w-full">
                  <Input
                    type={typePassword}
                    id="password"
                    placeholder="*******"
                    required
                    className="dark:bg-black border-muted-foreground/25 placeholder:text-xs"
                  />
                  <span onClick={changeTypePassword} className="absolute inset-y-0 flex items-center pl-2 right-3">
                    {typePassword == 'password' ? <Eye className="w-5 h-5 cursor-pointer text-itens-primary" /> : <EyeOff className="w-5 h-5 cursor-pointer text-itens-primary" />}
                  </span>
                </div>
              </div>
              <Link to={'/users'}>
                <Button size={'sm'} className="w-full">
                  {t('Connect')}
                </Button>
              </Link>
            </div>
          </form>
          <div className="relative hidden bg-muted md:block">
            <img
              src="https://ui.shadcn.com/placeholder.svg"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
      <div
        className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary"
        dangerouslySetInnerHTML={{ __html: t('Terms-Of-Service-Privacy-Policy') }}
      />
    </div>
  )
}
