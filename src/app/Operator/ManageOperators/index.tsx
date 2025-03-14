import { useTranslation } from "react-i18next"
import { OperatorsTable } from "./components"

export const ManageOperators = () => {
  const { t } = useTranslation()

  return (
    <main className="flex-1 w-full p-5 space-y-4">
      <div className="flex flex-col gap-0.5">
        <span className="text-xl font-semibold">{t('Broadcasting-Operators')}</span>
        <span className="text-sm font-normal text-muted-foreground">{t('Broadcasting-Operators-Description')}</span>
      </div>
      <OperatorsTable />
    </main>
  )
}