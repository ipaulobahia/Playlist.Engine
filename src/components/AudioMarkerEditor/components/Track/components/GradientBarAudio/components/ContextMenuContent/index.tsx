import {
  ContextMenuContent as ContextMenuContentUI,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger
} from "@/components/ui/context-menu"
import {
  Info,
  Mic,
  Play,
  Square,
  StepForward,
  SwatchBook,
  TriangleRight,
  ZoomIn,
  ZoomOut
} from "lucide-react"

export const ContextMenuContent = () => {
  return (
    <ContextMenuContentUI className="w-44">
      <ContextMenuItem className="flex flex-row items-center gap-x-2">
        <Play className="text-accent-foreground " size={14} />
        <span>
          Tocar
        </span>
      </ContextMenuItem>
      <ContextMenuItem className="flex flex-row items-center gap-x-2">
        <StepForward className="text-accent-foreground " size={14} />
        <span>
          Tocar do início
        </span>
      </ContextMenuItem>
      <ContextMenuSub>
        <ContextMenuSubTrigger>
          <span>
            Marcadores
          </span>
        </ContextMenuSubTrigger>
        <ContextMenuSubContent className="w-44">
          <ContextMenuItem className="flex flex-row items-center gap-x-2">
            <Mic className="text-accent-foreground " size={14} />
            <span>
              Locução
            </span>
          </ContextMenuItem>
          <ContextMenuItem className="flex flex-row items-center gap-x-2">
            <SwatchBook className="text-accent-foreground " size={14} />
            <span>
              Refrão
            </span>
          </ContextMenuItem>
          <ContextMenuItem className="flex flex-row items-center gap-x-2">
            <Info className="text-accent-foreground " size={14} />
            <span>
              Anotação
            </span>
          </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>
              <span>
                Carimbo
              </span>
            </ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-44">

            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuItem className="flex flex-row items-center gap-x-2">
            <TriangleRight className="text-accent-foreground " size={14} />
            <span>
              Fade-in
            </span>
          </ContextMenuItem>
          <ContextMenuItem className="flex flex-row items-center gap-x-2">
            <TriangleRight className="text-accent-foreground scale-x-[-1]" size={14} />
            <span>
              Fade-out
            </span>
          </ContextMenuItem>
          <ContextMenuItem className="flex flex-row items-center gap-x-2">
            <StepForward className="text-accent-foreground " size={14} />
            <span>
              Início do áudio
            </span>
          </ContextMenuItem>
          <ContextMenuItem className="flex flex-row items-center gap-x-2">
            <Square className="text-accent-foreground " size={14} />
            <span>
              Fim do áudio
            </span>
          </ContextMenuItem>
        </ContextMenuSubContent>
      </ContextMenuSub>
      <ContextMenuSeparator />
      <ContextMenuItem className="flex flex-row items-center gap-x-2">
        <ZoomIn className="text-accent-foreground " size={14} />
        <span>
          Zoom in
        </span>
        <ContextMenuShortcut>Ctrl +</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem className="flex flex-row items-center gap-x-2">
        <ZoomOut className="text-accent-foreground " size={14} />
        <span>
          Zoom out
        </span>
        <ContextMenuShortcut>Ctrl -</ContextMenuShortcut>
      </ContextMenuItem>
    </ContextMenuContentUI>
  )
}