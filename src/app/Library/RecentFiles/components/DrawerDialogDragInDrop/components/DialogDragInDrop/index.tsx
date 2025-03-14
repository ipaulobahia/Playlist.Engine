import { TXTSVG } from "@/assets/svg";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { useUpload } from "@/hooks/use-upload";
import { formatDuration } from "@/utils";
import { fromFile } from 'id3js';
import { FileUp, Upload, X } from "lucide-react";
import { ChangeEvent, DragEvent, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { ListFileContextMenu } from "./components";

interface DialogDragInDropProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const DialogDragInDrop = ({ open, setOpen }: DialogDragInDropProps) => {
  const { t } = useTranslation()

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [filesList, setFilesList] = useState<FileInfo[]>([])

  const { toggleElement } = useUpload()

  const getDuration = (file: File): Promise<number> => {
    return new Promise((resolve, reject) => {
      const url = URL.createObjectURL(file);
      const media = document.createElement(file.type.startsWith("audio") ? "audio" : "video");

      media.src = url;
      media.preload = "metadata";

      media.onloadedmetadata = () => {
        resolve(media.duration);
        URL.revokeObjectURL(url);
      };

      media.onerror = () => reject(new Error("Não foi possível obter a duração"));
    });
  };

  const extractMetadata = async (file: File) => {
    try {
      const { name, lastModified, size, type } = file
      const tags = await fromFile(file);

      const duration = file.type.startsWith("audio") || file.type.startsWith("video")
        ? formatDuration(await getDuration(file))
        : null;

      setFilesList((prev: FileInfo[]) => {
        const prevList = prev || [];

        const alreadyExists = prevList.some((f: any) => f.name === name && f.lastModified === lastModified && f.size === Math.round(size / 1024).toLocaleString('pt-BR'));

        if (alreadyExists) {
          return prevList;
        }

        const fileExtension = name.split('.').pop()?.toUpperCase();

        return [
          ...prevList,
          {
            ...tags,
            id: crypto.randomUUID() as string,
            name,
            lastModified,
            duration,
            type: fileExtension ? fileExtension : type,
            size: Math.round(size / 1024).toLocaleString('pt-BR'),
          },
        ];
      });
    } catch (error) {
      toast.error("Erro!", { description: "Não foi possível carregar o arquivo" });
      console.error("Erro ao extrair metadados:", error);
    }
  };

  const handleRemove = (id: string) => {
    setFilesList(prevFiles => prevFiles.filter(file => file.id !== id));
  };

  const openFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleDragEnter = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    setIsHovered(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    e.stopPropagation();

    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
      setIsHovered(false);
    }
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const file = files[0];
      await extractMetadata(file);
    }
  };

  const handleDrop = async (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsHovered(false);

    const files = e.dataTransfer.files;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      await extractMetadata(file);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size={'sm'} className="flex flex-row items-center">
          <FileUp size={16} />
          <span>
            {t("Add-New-File")}
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] gap-y-3">
        <DialogHeader>
          <DialogTitle>{t("Add-New-File")}</DialogTitle>
        </DialogHeader>
        <div
          onClick={openFileInput}
          className={`flex flex-col cursor-pointer items-center justify-center border-2 rounded-md gap-y-1.5 py-14 ${isHovered ? 'border-primary bg-primary/15' : 'border-dashed'}`}
          onDragOver={(e) => e.preventDefault()}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <Upload />
          <span className="text-sm font-medium">{t("Choose-File")} <span className="text-blue-500">{t("Drop-Here")}</span></span>
          <span className="text-xs text-muted-foreground">{t("Files-Allowed")}</span>
          <input
            type="file"
            accept=".mp3, .mp4, .txt"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
        <div className="flex flex-col p-1 overflow-auto gap-y-2 max-h-52">
          {
            filesList.map((file) => {
              const { name, size, id } = file

              return (
                <ListFileContextMenu file={file} onRemove={() => handleRemove(id)} key={id}>
                  <div className="flex flex-col">
                    <div className="flex flex-row items-start justify-between w-full px-2 py-3 rounded-md bg-sidebar">
                      <div className="flex flex-row items-center gap-1">
                        <div className="flex items-center justify-center size-10">
                          <img src={TXTSVG} className="size-8" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-bold">{name}</span>
                          <span className="text-xs font-normal text-muted-foreground">{size} KB</span>
                        </div>
                      </div>
                      <X onClick={() => handleRemove(id)} size={16} className="cursor-pointer text-muted-foreground hover:text-accent-foreground" />
                    </div>
                  </div>
                </ListFileContextMenu>
              )
            })
          }
        </div>
        {
          filesList.length > 0 &&
          <Separator />
        }
        <DialogFooter className="flex flex-row justify-end w-full gap-x-2">
          <DialogClose asChild>
            <Button size={'sm'} variant={'ghost'}>{t("Cancel")}</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button disabled onClick={toggleElement} size={'sm'}>Realizar upload</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}