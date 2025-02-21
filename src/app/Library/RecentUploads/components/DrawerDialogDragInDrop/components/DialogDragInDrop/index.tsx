import { TXTSVG } from "@/assets/svg";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { useUpload } from "@/hooks/use-upload";
import { CloudUpload, Upload, X } from "lucide-react";
import { useRef, useState } from "react";

interface DialogDragInDropProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const DialogDragInDrop = ({ open, setOpen }: DialogDragInDropProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const { toggleElement } = useUpload()

  const openFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleDragEnter = () => {
    setIsHovered(true);
  };

  const handleDragLeave = () => {
    setIsHovered(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size={'sm'} className="flex flex-row items-center">
          <CloudUpload size={16} />
          <span>
            Upload
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Adicionar novo arquivo</DialogTitle>
        </DialogHeader>
        <div
          onClick={openFileInput}
          className={`flex flex-col cursor-pointer items-center justify-center border-2 rounded-md gap-y-1.5 py-14 ${isHovered ? 'border-primary bg-primary/15' : 'border-dashed'}`}
          onDragOver={(e) => e.preventDefault()}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
        >
          <Upload />
          <span className="text-sm font-medium">Escolha um arquivo <span className="text-blue-500">ou solte ele aqui.</span></span>
          <span className="text-xs text-muted-foreground">Arquivos MP3, MP4 e TXT são permitidos.</span>
          <input
            type="file"
            accept=".mp3, .mp4, .txt"
            ref={fileInputRef}
            className="hidden"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row items-start justify-between w-full px-2 py-3 rounded-md bg-sidebar">
            <div className="flex flex-row items-center gap-1">
              <div className="flex items-center justify-center size-10">
                <img src={TXTSVG} className="size-8" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold">Testemunhal_de_Natal.txt</span>
                <span className="text-xs font-normal text-muted-foreground">443KB</span>
              </div>
            </div>
            <X size={16} className="cursor-pointer text-muted-foreground" />
          </div>
        </div>
        <Separator />
        <DialogFooter className="flex flex-row justify-end w-full gap-x-2">
          <DialogClose asChild>
            <Button size={'sm'} variant={'ghost'}>Cancelar</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button onClick={toggleElement} size={'sm'}>Realizar upload</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}