import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { DialogClose } from "@radix-ui/react-dialog"
import { FolderSync, UploadCloud } from "lucide-react"
import { useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { FileActionCard } from "./components"

interface DialogAddFileProps {
  children: React.ReactNode
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const DialogAddFile = ({ children, open, setOpen }: DialogAddFileProps) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate()

  const categoryType = searchParams.get("categoryType");
  const folderId = searchParams.get("folderId");

  const [addFileType, setAddFileType] = useState<'Upload' | 'MoveAndCopy' | ''>('')

  function handleSelectAddFileType(type: 'Upload' | 'MoveAndCopy') {
    setAddFileType(type)
  }

  function handlerConfirmAddFileType() {
    if (addFileType === "Upload") {
      return
    }
    else if (addFileType === "MoveAndCopy") {
      navigate(`/library/category/archive/move-and-copy?categoryType=${categoryType}&folderId=${folderId}`)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="w-[90%]">
        <DialogHeader>
          <DialogTitle className="text-sm">Adicionar arquivo</DialogTitle>
          <DialogDescription className="text-xs">
            Informe como deseja adicionar um novo arquivo a esta lista.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-3">
          <FileActionCard
            title="Upload de arquivos"
            description="Realizie o <b>upload</b> de um novo arquivo para o seu acervo."
            Icon={UploadCloud}
            isSelected={addFileType === "Upload"}
            onSelectAddType={() => handleSelectAddFileType('Upload')}
          />
          <FileActionCard
            title="Mover/Copiar arquivos"
            description="<b>Mova</b> ou <b>Cópie</b> arquivos de pastas ou listas já existentes."
            Icon={FolderSync}
            isSelected={addFileType === "MoveAndCopy"}
            onSelectAddType={() => handleSelectAddFileType('MoveAndCopy')}
          />
        </div>
        <DialogFooter className="flex flex-row items-center justify-between w-full">
          <DialogClose asChild>
            <Button variant={'outline'}>Cancelar</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button onClick={handlerConfirmAddFileType}>
              <span>Confirmar</span>
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}