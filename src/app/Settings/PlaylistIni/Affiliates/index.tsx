import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"
import { AffiliatesTable } from "./components"

export const Affiliates = () => {
  const { t } = useTranslation()

  return (
    <main className="relative flex flex-1 p-5 pb-20">
      <div className="justify-center w-full max-w-full mx-auto lg:max-w-3xl">
        <div>
          <header className="justify-between p-6 mx-auto border rounded-md rounded-b-none border-muted-foreground/25 sm:flex">
            <div className="flex items-center w-full">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">{t("Affiliates")}</h1>
                <p className="text-sm text-muted-foreground">{t("Affiliates-Description")}</p>
              </div>
            </div>
          </header>
          <AffiliatesTable />
        </div>
      </div>
      <footer className="fixed bottom-0 left-0 flex justify-end w-full p-4 border border-t shadow border-muted-foreground/25 bg-muted">
        <div className="flex flex-row items-center justify-between gap-x-2">
          <Button size={'sm'} variant={'ghost'} disabled>
            {t("Cancel")}
          </Button>
          <Button size={'sm'} disabled>
            {t("Save")}
          </Button>
        </div>
      </footer>
    </main>
  )
} 