import { Button } from "@/components/ui/button"
import { DragInDropDialog, RecentUploadsBreadchumbs, RecentUploadsTable } from "./components"
import { CloudUpload } from "lucide-react"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"

export const RecentUploads = () => {
  return (
    <main className="relative flex-1 p-3 space-y-5">
      <RecentUploadsBreadchumbs />
      <div className="flex flex-row items-start justify-between gap-2 sm:items-center">
        <div className="flex flex-col px-3 gap-0.5">
          <span className="text-xl font-semibold">Uploads recentes</span>
          <span className="text-sm font-normal text-muted-foreground">Gerencie e visualize os uploads realizados nos ultimos 60 dias.</span>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button size={'sm'} className="flex flex-row items-center">
              <CloudUpload size={16} />
              <span>
                Upload
              </span>
            </Button>
          </DialogTrigger>
          <DragInDropDialog />
        </Dialog>
      </div>
      <RecentUploadsTable />
    </main>
  )
}