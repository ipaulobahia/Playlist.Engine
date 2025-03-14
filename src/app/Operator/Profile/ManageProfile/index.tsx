import { useTranslation } from "react-i18next"
import { ProfilesTable } from "./components"

export const ManageProfile = () => {
  const { t } = useTranslation()

  return (
    <main className="flex-1 w-full p-5 space-y-4">
      <div className="flex flex-col gap-0.5">
        <span className="text-xl font-semibold">{t('Broadcaster-Profiles')}</span>
        <span className="text-sm font-normal text-muted-foreground">{t('Broadcaster-Profiles-Description')}</span>
      </div>
      <ProfilesTable />
    </main>
  )
}