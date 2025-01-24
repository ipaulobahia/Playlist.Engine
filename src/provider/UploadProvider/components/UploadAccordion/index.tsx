import { MP3SVG, TXTSVG } from "@/assets/svg"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react"
import { CircularProgressbar } from "./components/CircularProgressbar";

interface IUploadAccordionProps {
  isVisible: boolean
}

export const UploadAccordion = ({ isVisible }: IUploadAccordionProps) => {
  return (
    <Accordion type="multiple" defaultValue={['upload']}>
      <AccordionItem
        className={`absolute px-3 bg-accent border border-sidebar-foreground/15 shadow-md rounded-md right-4 bottom-4 w-[20vw] transition-all duration-500 ease-linear 
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
        value="upload"
      >
        <AccordionTrigger className='flex flex-row items-center justify-between hover:no-underline'>
          <div className='flex flex-col'>
            <span className="text-base font-bold">Upload</span>
            <span className="text-xs font-semibold text-red-600">Erro ao realizar o upload de 1 arquivo</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col my-2 gap-y-5">
          <div className='flex flex-row items-center justify-between'>
            <div className='flex flex-row items-center gap-2'>
              <div className="flex items-center justify-center size-10">
                <img src={TXTSVG} className="size-8" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold">Testemunhal_de_Natal.txt</span>
                <span className="text-xs font-normal text-muted-foreground">20KB / 443kB</span>
              </div>
            </div>
            <CircularProgressbar />
          </div>
          <div className='flex flex-row items-center justify-between'>
            <div className='flex flex-row items-center gap-2'>
              <div className="flex items-center justify-center size-10">
                <img src={MP3SVG} className="size-8" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold">What's Up.mp3</span>
                <span className="text-xs font-normal text-muted-foreground">506KB / 4.756kB</span>
              </div>
            </div>
            <Button size={'icon'} variant={'ghost'} className='hover:bg-accent-foreground/10'>
              <RotateCcw />
            </Button>
          </div>
          <div className='flex flex-row items-center justify-between'>
            <div className='flex flex-row items-center gap-2'>
              <div className="flex items-center justify-center size-10">
                <img src={TXTSVG} className="size-8" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold">Testemunhal_de_Natal.txt</span>
                <span className="text-xs font-normal text-muted-foreground">20KB / 443kB</span>
              </div>
            </div>
            <CircularProgressbar />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}