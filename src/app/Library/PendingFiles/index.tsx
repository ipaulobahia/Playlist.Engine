import { PendingFilesBreadchumbs } from "./components"

export const PendingFiles = () => {
  return (
    <main className="relative flex-1 p-3">
      <PendingFilesBreadchumbs />
      <div className="flex flex-row items-start justify-between gap-2 sm:items-center">
        <div className="flex flex-col px-3 gap-0.5">
          <span className="text-xl font-semibold">Arquivos pendentes</span>
          <span className="text-sm font-normal text-muted-foreground">Gerencie e visualize arquivos novos e modificados com status pendente de aprovação.</span>
        </div>
        {/* <DrawerDialogDragInDrop /> */}
      </div>
      {/* <RecentUploadsTable /> */}
    </main>
  )
}