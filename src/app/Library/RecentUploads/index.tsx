import { DrawerDialogDragInDrop, RecentUploadsBreadchumbs, RecentUploadsTable } from "./components"

export const RecentUploads = () => {
  return (
    <main className="relative flex-1 p-3">
      <RecentUploadsBreadchumbs />
      <div className="flex flex-row items-start justify-between gap-2 sm:items-center">
        <div className="flex flex-col px-3 gap-0.5">
          <span className="text-xl font-semibold">Uploads recentes</span>
          <span className="text-sm font-normal text-muted-foreground">Gerencie e visualize os uploads realizados nos ultimos 60 dias.</span>
        </div>
        <DrawerDialogDragInDrop />
      </div>
      <RecentUploadsTable />
    </main>
  )
}