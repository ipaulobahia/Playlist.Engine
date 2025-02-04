import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronRight, User, UserPen, Users } from "lucide-react"
import { Link } from "react-router-dom"

export const Operator = () => {
  return (
    <main className="relative flex flex-1 p-5 pb-20">
      <div className="flex flex-col items-center justify-center w-full max-w-full mx-auto gap-y-5 lg:max-w-3xl">
        <Avatar className="size-24">
          <AvatarImage src="" />
          <AvatarFallback className="font-bold">PB</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-center gap-y-1">
          <span className="text-3xl font-semibold text-accent-foreground">Bem-vindo, Paulo Henrique</span>
          <span className="text-base font-normal text-muted-foreground">Gerencie suas informações, privacidade e segurança para que o Google atenda suas necessidades.</span>
        </div>
        <div className="flex flex-col items-center w-full gap-y-3">
          <Link to={'/operator/my-account'}>
            <div className="flex flex-col w-full border rounded-lg shadow cursor-pointer border-muted-foreground/25">
              <div className="grid w-full grid-cols-3 p-4">
                <div className="flex flex-col justify-center col-span-2 gap-y-1">
                  <span className="text-lg font-medium">Meu perfil</span>
                  <span className="text-xs font-normal text-muted-foreground">Personalize sua experiência no sistema ajustando o tema, idioma e preferências do operador. Adapte a interface para atender às suas necessidades e preferências.</span>
                </div>
                <div className="flex items-center justify-center ml-auto rounded-full size-24 bg-muted-foreground/10">
                  <User className="size-[55%]" />
                </div>
              </div>
              <div className="flex flex-row items-center justify-between flex-1 px-4 py-3 border-t hover:bg-muted-foreground/10 border-muted-foreground/25">
                <span className="text-sm font-medium text-accent-foreground">Preferências do Operador</span>
                <ChevronRight size={16} />
              </div>
            </div>
          </Link>
          <div className="grid items-center w-full grid-cols-2 gap-x-3">
            <Link to={'/operator/profile/manage-profile'}>
              <div className="flex flex-col flex-1 border rounded-lg shadow cursor-pointer border-muted-foreground/25">
                <div className="grid items-center w-full grid-cols-3 p-4">
                  <div className="flex flex-col col-span-2 gap-y-1">
                    <span className="text-sm font-medium">Gerenciamento de Perfis</span>
                    <span className="text-xs font-normal text-muted-foreground">Visualize e gerencie os perfis. Os perfis definem as permissões e acessos que podem ser atribuídos aos operadores.</span>
                  </div>
                  <div className="flex items-center justify-center ml-auto rounded-full size-24 bg-muted-foreground/10">
                    <UserPen className="size-[55%]" />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between flex-1 px-4 py-3 border-t hover:bg-muted-foreground/10 border-muted-foreground/25">
                  <span className="text-sm font-medium text-accent-foreground">Gerenciar Perfils</span>
                  <ChevronRight size={16} />
                </div>
              </div>
            </Link>
            <Link to={'/operator/manage-operators'}>
              <div className="flex flex-col flex-1 border rounded-lg shadow cursor-pointer border-muted-foreground/25">
                <div className="grid items-center w-full grid-cols-3 p-4">
                  <div className="flex flex-col col-span-2 gap-y-1">
                    <span className="text-sm font-medium">Gerenciamento de Operadores</span>
                    <span className="text-xs font-normal text-muted-foreground">Administre os operadores cadastrados no sistema e atribua perfis que definem suas permissões de acesso.</span>
                  </div>
                  <div className="flex items-center justify-center ml-auto rounded-full size-24 bg-muted-foreground/10">
                    <Users className="size-[55%]" />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between flex-1 px-4 py-3 border-t hover:bg-muted-foreground/10 border-muted-foreground/25 ">
                  <span className="text-sm font-medium text-accent-foreground">Gerenciar Operadores</span>
                  <ChevronRight size={16} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}