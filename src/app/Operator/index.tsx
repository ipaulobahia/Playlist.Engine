import { ChevronRight, User, UserPen, Users } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

export const Operator = () => {
  const { t } = useTranslation()

  return (
    <main className="relative flex flex-1 p-5 pb-20">
      <div className="flex flex-col items-start justify-center w-full gap-y-5">
        <div className="flex flex-col items-start w-full gap-y-1">
          <span className="text-3xl font-semibold text-accent-foreground">{t("Welcome")}</span>
          <span className="text-base font-normal text-muted-foreground">{t("Welcome-Description")}</span>
        </div>
        <div className="flex flex-col items-center w-full gap-y-3">
          <Link to={'/operator/my-account'} className="w-full">
            <div className="flex flex-col w-full border rounded-lg shadow cursor-pointer border-muted-foreground/25">
              <div className="grid w-full grid-cols-3 p-4">
                <div className="flex flex-col justify-center col-span-2 gap-y-1">
                  <span className="text-lg font-medium">{t("My-Profile")}</span>
                  <span className="text-xs font-normal text-muted-foreground">{t("My-Profile-Description")}</span>
                </div>
                <div className="flex items-center justify-center ml-auto rounded-full size-24 bg-muted-foreground/10">
                  <User className="size-[55%]" />
                </div>
              </div>
              <div className="flex flex-row items-center justify-between flex-1 px-4 py-3 border-t hover:bg-muted-foreground/10 border-muted-foreground/25">
                <span className="text-sm font-medium text-accent-foreground">{t("Operator-Preference")}</span>
                <ChevronRight size={16} />
              </div>
            </div>
          </Link>
          <div className="grid items-center w-full grid-cols-2 gap-x-3">
            <Link to={'/operator/profile/manage-profile'}>
              <div className="flex flex-col flex-1 border rounded-lg shadow cursor-pointer border-muted-foreground/25">
                <div className="grid items-center w-full grid-cols-3 p-4">
                  <div className="flex flex-col col-span-2 gap-y-1">
                    <span className="text-sm font-medium">{t("Profile-Management")}</span>
                    <span className="text-xs font-normal text-muted-foreground">{t("Profile-Management-Description")}</span>
                  </div>
                  <div className="flex items-center justify-center ml-auto rounded-full size-24 bg-muted-foreground/10">
                    <UserPen className="size-[55%]" />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between flex-1 px-4 py-3 border-t hover:bg-muted-foreground/10 border-muted-foreground/25">
                  <span className="text-sm font-medium text-accent-foreground">{t("Manage-Profiles")}</span>
                  <ChevronRight size={16} />
                </div>
              </div>
            </Link>
            <Link to={'/operator/manage-operators'}>
              <div className="flex flex-col flex-1 border rounded-lg shadow cursor-pointer border-muted-foreground/25">
                <div className="grid items-center w-full grid-cols-3 p-4">
                  <div className="flex flex-col col-span-2 gap-y-1">
                    <span className="text-sm font-medium">{t("Operator-Management")}</span>
                    <span className="text-xs font-normal text-muted-foreground">{t("Operator-Management-Description")}</span>
                  </div>
                  <div className="flex items-center justify-center ml-auto rounded-full size-24 bg-muted-foreground/10">
                    <Users className="size-[55%]" />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between flex-1 px-4 py-3 border-t hover:bg-muted-foreground/10 border-muted-foreground/25 ">
                  <span className="text-sm font-medium text-accent-foreground">{t("Manage-Operators")}</span>
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