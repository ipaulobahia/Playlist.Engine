import { Button } from "@/components/ui/button"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { FolderSync, UploadCloud } from "lucide-react"
import { useState } from "react"

interface DrawerAddFileProps {
  children: React.ReactNode
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const DrawerAddFile = ({ children, open, setOpen }: DrawerAddFileProps) => {
  const [addFileType, setAddFileType] = useState<'Upload' | 'MoveAndCopy' | ''>('')

  function handleSelectAddFileType(type: 'Upload' | 'MoveAndCopy') {
    setAddFileType(type)
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        {children}
      </DrawerTrigger>
      <DrawerContent className="px-4">
        <DrawerHeader>
          <DrawerTitle className="text-sm">Adicionar arquivo</DrawerTitle>
          <DrawerDescription className="text-xs">
            Informe como deseja adicionar um novo arquivo a esta lista.
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-row items-center justify-center gap-3">
          <div
            onClick={() => handleSelectAddFileType('Upload')}
            className={`flex flex-col items-center justify-center flex-1 gap-3 px-3 py-10 text-center border rounded-md cursor-pointer hover:bg-muted/50 ${addFileType === 'Upload' ? 'border-blue-500 border-2' : 'border-muted-foreground/25'}`}
          >
            <UploadCloud size={48} />
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-semibold">Upload de arquivos</span>
              <span className="text-xs font-normal text-muted-foreground">Realizie o <b>upload</b> de um novo arquivo para o seu acervo.</span>
            </div>
          </div>
          <div
            onClick={() => handleSelectAddFileType('MoveAndCopy')}
            className={`flex flex-col items-center justify-center flex-1 gap-3 px-3 py-10 text-center rounded-md border cursor-pointer hover:bg-muted/50 ${addFileType === 'MoveAndCopy' ? 'border-blue-500 border-2' : 'border-muted-foreground/25'}`}
          >
            <FolderSync size={48} />
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-semibold">Mover/Copiar arquivos</span>
              <span className="text-xs font-normal text-muted-foreground"><b>Mova</b> ou <b>Cópie</b> arquivos de pastas ou listas já existentes.</span>
            </div>
          </div>
        </div>
        <DrawerFooter className="flex flex-row items-center justify-between w-full">
          <DrawerClose>
            <Button variant={'outline'}>Cancelar</Button>
          </DrawerClose>
          <DrawerClose asChild>
            <Button>
              <span>Confirmar</span>
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}