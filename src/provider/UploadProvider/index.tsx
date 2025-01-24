import { TXTSVG } from '@/assets/svg';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import UploadContext from '@/contexts/UploadContext';
import { RotateCcw } from 'lucide-react';
import { ReactNode, useState } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface UploadProviderProps {
  children: ReactNode;
}

export const UploadProvider: React.FC<UploadProviderProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  function toggleElement() {
    setIsVisible(prev => !prev)
  };

  return (
    <UploadContext.Provider value={{ isVisible, toggleElement }}>
      {children}
      <Accordion type="multiple" defaultValue={['upload']}>
        <AccordionItem className={`absolute px-3 bg-accent border border-sidebar-foreground/15 shadow-md rounded-md right-4 bottom-4 w-[20vw] transition-all duration-500 ease-linear
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`} value="upload">
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
              <div className='size-10'>
                <CircularProgressbar
                  className='block dark:hidden'
                  styles={buildStyles({ pathColor: '#000', textColor: '#000', trailColor: "#CDD1D6", textSize: '25px' })}
                  value={60}
                  text={`${60}%`} />
                <CircularProgressbar
                  className='hidden dark:block'
                  styles={buildStyles({ pathColor: '#FFF', textColor: '#FFF', trailColor: "#CDD1D6", textSize: '25px' })}
                  value={60}
                  text={`${60}%`} />
              </div>
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
              <div className='size-10'>
                <CircularProgressbar
                  className='block dark:hidden'
                  styles={buildStyles({ pathColor: '#000', textColor: '#000', trailColor: "#CDD1D6", textSize: '25px' })}
                  value={60}
                  text={`${60}%`} />
                <CircularProgressbar
                  className='hidden dark:block'
                  styles={buildStyles({ pathColor: '#FFF', textColor: '#FFF', trailColor: "#CDD1D6", textSize: '25px' })}
                  value={42}
                  text={`${42}%`} />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </UploadContext.Provider>
  );
};