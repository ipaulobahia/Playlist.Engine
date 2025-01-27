import { TXTSVG } from "@/assets/svg";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { useUpload } from "@/hooks/use-upload";
import { CloudUpload, Upload, X } from "lucide-react";
import { useRef } from "react";

interface DrawerDragInDropProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const DrawerDragInDrop = ({ open, setOpen }: DrawerDragInDropProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const { toggleElement } = useUpload()

  const openFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button size={'sm'} className="flex flex-row items-center">
          <CloudUpload size={16} />
          <span>
            Upload
          </span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="px-3">
        <DrawerHeader>
          <DrawerTitle>Adicionar novo arquivo</DrawerTitle>
        </DrawerHeader>
        <div
          onClick={openFileInput}
          className="flex flex-col cursor-pointer items-center justify-center border-2 rounded-md gap-y-1.5 py-14 border-dashed"
        >
          <Upload />
          <span className="text-sm font-medium">Escolha um <span className="text-blue-500">arquivo.</span></span>
          <span className="text-xs text-muted-foreground">Arquivos MP3, MP4 e TXT são permitidos.</span>
          <input
            type="file"
            accept=".mp3, .mp4, .txt"
            ref={fileInputRef}
            className="hidden"
          />
        </div>
        <div className="flex flex-col my-3">
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
        <DrawerFooter className="flex flex-row justify-end w-full gap-x-2">
          <DrawerClose>
            <Button size={'sm'} variant={'ghost'}>Cancelar</Button>
          </DrawerClose>
          <DrawerClose>
            <Button onClick={toggleElement} size={'sm'}>Realizar upload</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}