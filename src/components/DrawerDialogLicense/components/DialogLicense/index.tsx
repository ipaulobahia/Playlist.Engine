import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogTitle } from "@/components/ui/dialog"

interface DialogLicenseProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const DialogLicense = ({ open, setOpen }: DialogLicenseProps) => {
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
                Todos os direitos reservados. Proibido o uso ou distribuição sem autorização do autor.
              </span>
              <span className="text-xs font-thin">
                Contato por telefone (31) 2136-2929
              </span>
            </div>
            <DialogClose>
              <Button variant={'outline'} size={'sm'}>
                Fechar
              </Button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}