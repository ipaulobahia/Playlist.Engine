import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer"

interface DrawerLicenseProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const DrawerLicense = ({ open, setOpen }: DrawerLicenseProps) => {
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent className="max-w-[720px] gap-y-3 p-4">
        <DrawerTitle className="text-lg">Playlist Engine</DrawerTitle>
        <div className="w-full rounded-md min-h-[250px] bg-muted" />
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-row items-center justify-between">
            <span className="text-xs font-bold">Playlist Engine v1.0.0 (01/02/2025 14:00)</span>
            <a href="https://playlistsolutions.com/" target="blank" className="text-xs font-thin text-blue-500 underline">Playlist Software Solutions</a>
          </div>
          <div className="flex flex-col gapy-1">
            <span className="text-xs font-thin">
              Copyright© - Playlist Software Solutions Inc.<br />
              Todos os direitos reservados. Proibido o uso ou distribuição sem autorização do autor.
            </span>
            <span className="text-xs font-thin">
              Contato por telefone (31) 2136-2929
            </span>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}