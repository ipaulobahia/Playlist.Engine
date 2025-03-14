import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { useTranslation } from "react-i18next"

interface DialogLicenseProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const DialogLicense = ({ open, setOpen }: DialogLicenseProps) => {
  const { t } = useTranslation()

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-[720px] p-4">
        <DialogTitle className="text-lg">Playlist Engine</DialogTitle>
        <div className="w-full rounded-md min-h-[250px] bg-muted" />
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-row items-center justify-between">
            <span className="text-xs font-bold">Playlist Engine v1.0.0 (01/02/2025 14:00)</span>
            <a href="https://playlistsolutions.com/" target="blank" className="text-xs font-thin text-blue-500 underline">Playlist Software Solutions</a>
          </div>
          <div className="flex flex-row items-end justify-between">
            <div className="flex flex-col gapy-1">
              <span className="text-xs font-thin">
                Copyright© - Playlist Software Solutions Inc.<br />
                {t("License-Description")}
              </span>
              <span className="text-xs font-thin">
                {t("License-Contact")} (31) 2136-2929
              </span>
            </div>
            <DialogClose asChild>
              <Button variant={'outline'} size={'sm'}>
                {t("Close")}
              </Button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}