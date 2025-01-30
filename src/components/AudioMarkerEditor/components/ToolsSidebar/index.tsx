import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Volume1 } from "lucide-react"

export const ToolsSidebar = () => {
  return (
    <div className="lg:flex hidden flex-col p-4 border-l shadow w-full max-w-[30%] bg-sidebar gap-y-2 border-muted-foreground/20">
      <Label className="text-base top-3">Ferramentas</Label>
      <div className="flex flex-col gap-y-2">
        <Label className="text-xs">Período selecionada</Label>
        <div className="grid grid-cols-2 mt-1 gap-x-2">
          <Input readOnly placeholder="Início: 00:00:00" className="h-8 text-xs rounded-md placeholder:text-xs bg-muted" />
          <Input readOnly placeholder="Fim: 00:00:00" className="h-8 text-xs rounded-md placeholder:text-xs bg-muted" />
        </div>
      </div>
      <Separator className="my-2 bg-sidebar-foreground/25 h-[0.5px]" />
      <div className="flex flex-col gap-y-2">
        <div className="flex flex-col gap-y-0.5">
          <Label className="text-xs">Nível do Som</Label>
          <Label className="text-xs font-normal text-muted-foreground">Volume máximo</Label>
        </div>
        <div className="flex flex-row items-center p-2 border rounded-md bg-muted">
          <Volume1 size={15} className="dark:fill-white fill-black" />
          <Slider
            defaultValue={[50]}
            max={100}
            step={1}
            className="w-full"
          />
        </div>
        <div className="grid grid-cols-2 mt-1 gap-x-2">
          <div className="flex gap-x-2 items-center p-1.5 text-muted-foreground justify-between rounded-md bg-muted">
            <span className="text-xs">
              L
            </span>
            <Slider
              defaultValue={[50]}
              max={100}
              step={1}
              className="w-full"
            />
            <span className="text-xs">
              0.0dB
            </span>
          </div>
          <div className="flex gap-x-2 items-center p-1.5 text-muted-foreground justify-between rounded-md bg-muted">
            <span className="text-xs">
              R
            </span>
            <Slider
              defaultValue={[50]}
              max={100}
              step={1}
              className="w-full"
            />
            <span className="text-xs">
              0.0dB
            </span>
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <Button className="w-full">
          Salvar
        </Button>
      </div>
    </div>
  )
}