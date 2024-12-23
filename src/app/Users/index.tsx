import { ModeToggle } from "@/components/mode-toggle";
import { CardOperators } from "./components";

export const Users = () => {
  return (
    <main className="flex flex-col justify-center min-h-screen antialiased dark:bg-black">
      <nav className="flex items-center justify-center w-full border-b border-muted-foreground/25 dark:bg-background">
        <div className="flex items-center justify-between w-full px-4 h-14">
          <span className="text-sm font-bold">
            Playlist Engine
          </span>
          <nav className="flex items-center mx-6 space-x-4 lg:space-x-6">
            <span className="text-sm font-medium transition-colors cursor-pointer hover:text-black/50 dark:hover:text-white/40">Sair</span>
            <ModeToggle />
          </nav>
        </div>
      </nav>
      <div className="grid items-start w-full grid-cols-3 px-10 mx-auto my-auto max-w-screen-2xl gap-x-5 ">
        <div className="flex flex-col col-span-1 ">
          <span className="text-6xl font-black leading-tight tracking-tighter">Seus</span>
          <span className="text-6xl font-black leading-tight tracking-tighter">Operadores</span>
        </div>
        <CardOperators />
      </div>
    </main>
  )
}