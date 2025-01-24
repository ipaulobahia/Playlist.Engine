import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

export const AudioSource = () => {
  return (
    <main className="relative flex flex-1 p-5 pb-20">
      <div className="justify-center w-full max-w-full mx-auto lg:max-w-3xl">
        <div className="space-y-5">
          <div>
            <header className="justify-between px-4 py-6 mx-auto border rounded-md rounded-b-none border-muted-foreground/25 sm:flex sm:px-6">
              <div className="flex items-center w-full">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight">Entrada de áudio</h1>
                  <p className="text-sm text-muted-foreground">[Descrição]</p>
                </div>
              </div>
            </header>
            <div className="flex flex-col items-center gap-4 px-4 py-8 border border-t-0 rounded-md rounded-t-none gap-x-4 border-muted-foreground/25 sm:px-6">
              <div className="flex flex-row items-center justify-between w-full gap-x-4">
                <Label className="flex flex-col text-sm font-medium leading-none gap-y-1 w-[65%]">
                  <span>Entrada de áudio</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Fonte do áudio da rede via satélite.</span>
                </Label>
                <Select>
                  <SelectTrigger className="flex-1 h-8 text-xs border bg-muted border-muted-foreground/10">
                    <SelectValue placeholder="Selecione o fonte do áudio" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Fonte do áudio</SelectLabel>
                      <SelectItem value="1">Driver de captura de som primário</SelectItem>
                      <SelectItem value="2">Microfone (Iriun Webcam)</SelectItem>
                      <SelectItem value="3">MIDI (DroidCam Virtual Audio)</SelectItem>
                      <SelectItem value="4">Microfone (DroidCam Audio)</SelectItem>
                      <SelectItem value="5">Microfone (DroidCam Virtual Audio)</SelectItem>
                      <SelectItem value="6">MIDI (Iriun Webcam)</SelectItem>
                      <SelectItem value="7">Headset (WH-1000XM5)</SelectItem>
                      <SelectItem value="8">MIDI (DoidCam Audio)</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-row items-center justify-between w-full gap-x-4">
                <Label className="flex flex-col text-sm font-medium leading-none gap-y-1 w-[65%]">
                  <span>Plugin DSP</span>
                </Label>
                <Select>
                  <SelectTrigger className="flex-1 h-8 text-xs border bg-muted border-muted-foreground/10">
                    <SelectValue placeholder="Selecione o plugin DSP" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Plugin DSP</SelectLabel>
                      <SelectItem value="1">Não utilizar plugin DSP</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-row items-center justify-between w-full gap-x-4">
                <Label className="flex flex-col text-sm font-medium leading-none gap-y-1 w-[65%]">
                  <span>Exibir entrada de linha enquanto parado</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Fecha entrada de linha ao iniciar a programação e abre ao parar.</span>
                </Label>
                <Switch checked id="adm" />
              </div>
              <div className="flex flex-row items-center justify-between w-full gap-x-4">
                <Label className="flex flex-col text-sm font-medium leading-none gap-y-1 w-[65%]">
                  <span>Tempo de espera ates de fechar linha</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Informe o teempo de espera em segundos.</span>
                </Label>
                <Input placeholder="0" className="flex-1 dark:bg-black border-muted-foreground/25 placeholder:text-xs" />
              </div>
              <div className="flex flex-row items-center justify-between w-full gap-x-4">
                <Label className="flex flex-col text-sm font-medium leading-none gap-y-1 w-[65%]">
                  <span>Comando DTMF Play</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Executar o comando remoto PLAY quando receber a sequência na entrada de áudio.</span>
                </Label>
                <Input className="flex-1 dark:bg-black border-muted-foreground/25 placeholder:text-xs" />
              </div>
              <div className="flex flex-row items-center justify-between w-full gap-x-4">
                <Label className="flex flex-col text-sm font-medium leading-none gap-y-1 w-[65%]">
                  <span>Comando DTMF Stop</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Executar o comando remoto STOP quando receber a sequência na entrada de áudio.</span>
                </Label>
                <Input className="flex-1 dark:bg-black border-muted-foreground/25 placeholder:text-xs" />
              </div>
              <div className="flex flex-row items-center justify-between w-full gap-x-4">
                <Label className="flex flex-col text-sm font-medium leading-none gap-y-1 w-[65%]">
                  <span>Nivel DTMF</span>
                  <span className="text-xs font-normal leading-snug text-muted-foreground">Um valor alto pode fazer comm que disparos sejam ignorados, Um valor muito baixo pode causar falsos disparos.</span>
                </Label>
                <Input type="number" placeholder="800" className="flex-1 dark:bg-black border-muted-foreground/25 placeholder:text-xs" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="fixed bottom-0 left-0 flex justify-end w-full p-4 border border-t shadow border-muted-foreground/25 bg-muted">
        <div className="flex flex-row items-center justify-between gap-x-2">
          <Button variant={'ghost'} disabled>
            Cancelar
          </Button>
          <Button disabled>
            Salvar
          </Button>
        </div>
      </footer>
    </main>
  )
}