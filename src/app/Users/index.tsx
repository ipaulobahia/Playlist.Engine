import { ModeToggle } from "@/components/mode-toggle";
import { useTranslation } from "react-i18next";
import { CardOperators } from "./components";

export const Users = () => {
  const { t } = useTranslation()

  return (
    <main className="flex flex-col justify-center min-h-screen antialiased">
      <nav className="flex items-center justify-center w-full border-b border-muted-foreground/25 dark:bg-background">
        <div className="flex items-center justify-between w-full px-4 h-14">
          <span className="text-sm font-bold">
            Playlist Engine
          </span>
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium transition-colors cursor-pointer hover:text-black/50 dark:hover:text-white/40">{t('Exit')}</span>
            <ModeToggle />
          </div>
        </div>
      </nav>
      <div className="grid items-start w-full grid-cols-1 gap-5 px-6 mx-auto my-auto lg:gap-10 lg:grid-cols-3 lg:px-10 xl:grid-cols-3 max-w-screen-2xl ">
        <div className="flex flex-col col-span-1 ">
          <span className="text-6xl font-black leading-tight tracking-tighter">{t('Operators')}</span>
        </div>
        <CardOperators />
      </div>
    </main>
  )
}