import { useTranslation } from "react-i18next"
import { DrawerDialogDragInDrop, RecentFilesBreadchumbs, RecentFilesTable } from "./components"

export const RecentFiles = () => {
  const { t } = useTranslation()

  return (
    <main className="relative flex-1 p-3">
      <RecentFilesBreadchumbs />
      <div className="flex flex-row items-start justify-between gap-2 sm:items-center">
        <div className="flex flex-col px-3 gap-0.5">
          <span className="text-xl font-semibold">{t("New-Files")}</span>
          <span className="text-sm font-normal text-muted-foreground">{t("New-Files-Description")}</span>
        </div>
        <DrawerDialogDragInDrop />
      </div>
      <RecentFilesTable />
    </main>
  )
}