import { ButtonTooltip } from "@/components/ButtonTooltip"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { FAKE_DATA_TRACKRS } from "@/utils/fakeData"
import {
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import { restrictToVerticalAxis } from '@dnd-kit/modifiers'
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy
} from '@dnd-kit/sortable'
import {
  AudioLines,
  FastForward,
  Info,
  Mic,
  Minus,
  MousePointer2,
  Play,
  Plus,
  Redo2,
  Rewind,
  Save,
  Scissors,
  Square,
  SquareArrowOutUpRight,
  StepForward,
  SwatchBook,
  TriangleRight,
  Undo2,
  Wand,
  X
} from "lucide-react"
import { useState } from "react"
import Draggable from 'react-draggable'
import { ToolsSidebar, Track } from "./components"

export const AudioMarkerEditor = () => {
  const [trackList, setTrackList] = useState(FAKE_DATA_TRACKRS);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setTrackList((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  return (
    <Draggable bounds="body" defaultPosition={{ x: -160, y: -250 }} handle=".drag">
      <Card className="z-50 absolute min-h-[80vh] flex flex-col w-full max-w-[85vw] 2xl:max-w-[65vw] rounded-lg">
        <div className="flex flex-row items-end w-full border-b shadow gap-x-2 h-9 border-muted-foreground/20 bg-sidebar drag">
          <div className="flex flex-row items-center">
            <Button variant={'ghost'} className="flex items-center justify-center cursor-default hover:bg-transparent" size={'icon'}>
              <AudioLines size={16} />
            </Button>
          </div>
          <div className="flex flex-row items-center">
            <div className="flex items-center px-2 cursor-default hover:bg-card-foreground/10 border-b-0 py-1.5 border rounded-t-lg group gap-x-2 border-muted-foreground/20 bg-card">
              <span className="text-xs font-medium">Carnavel é na Playlist.mp3</span>
              <X size={12} className="cursor-pointer hover:text-accent-foreground text-muted-foreground" />
            </div>
            <div className="flex items-center cursor-default hover:bg-card-foreground/5 px-2 border-b-0 py-1.5 rounded-t-lg group gap-x-2">
              <span className="text-xs font-medium">What's Up.mp3</span>
              <X size={12} className="cursor-pointer hover:text-accent-foreground text-muted-foreground" />
            </div>
          </div>
          <div className="flex flex-row items-center ml-auto">
            <Button variant={'ghost'} className="flex items-center justify-center" size={'icon'}>
              <Minus size={16} />
            </Button>
            <Button variant={'ghost'} className="flex items-center justify-center" size={'icon'}>
              <SquareArrowOutUpRight size={16} />
            </Button>
            <Button variant={'destructive'} className="flex items-center justify-center bg-transparent" size={'icon'}>
              <X className="text-accent-foreground" size={16} />
            </Button>
          </div>
        </div>
        <div className="flex flex-row justify-center flex-1 gap-x-4">
          <div className="relative flex flex-col flex-1 w-full lg:max-w-[70%] max-w-[100%] py-4">
            <div className="static flex items-center justify-center w-full gap-x-2 top-5">
              <ButtonTooltip icon={<MousePointer2 />} message="Cursor" />
              <ButtonTooltip icon={<Plus />} message="Adicionar faixa" />
              <ButtonTooltip icon={<Mic />} message="Adicionar locução" />
              <ButtonTooltip icon={<Scissors />} message="Cortar" />
              <ButtonTooltip icon={<StepForward />} message="Inicio do áudio" />
              <ButtonTooltip icon={<Square />} message="Fim do áudio" />
              <ButtonTooltip icon={<SwatchBook />} message="Refrão" />
              <ButtonTooltip icon={<Info />} message="Anotação" />
              <ButtonTooltip icon={<TriangleRight />} message="Fade-in" />
              <ButtonTooltip icon={<TriangleRight className="scale-x-[-1]" />} message="Fade-out" />
              <ButtonTooltip icon={<Wand className="scale-x-[-1]" />} message="Restaura mixagem" />
              <ButtonTooltip className="flex lg:hidden" icon={<Save />} message="Salvar" />
            </div>
            <div
              className="flex flex-col max-h-[700px] pl-4 py-2 overflow-x-auto overflow-y-auto">
              <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
                modifiers={[restrictToVerticalAxis]}
              >
                <SortableContext
                  items={trackList}
                  strategy={verticalListSortingStrategy}
                >
                  {
                    trackList.map((track, index) => {
                      return (
                        <Track key={track.id} track={{ ...track, index }} />
                      )
                    }
                    )
                  }
                </SortableContext>
              </DndContext>
            </div>
            <div className="flex flex-row items-center justify-between w-full px-4 mt-auto">
              <div className="z-10 flex flex-row items-center gap-x-1">
                <div className="flex items-center justify-center p-2 rounded-lg bg-muted">
                  <span className="text-xs">00:00:00</span>
                  <span className="text-xs text-muted-foreground"> / 00:30:25</span>
                </div>
                <Button size={'icon'} className="size-8 bg-muted hover:fill-white hover:text-white group" variant={'default'}>
                  <Undo2 className="text-accent-foreground group-hover:text-white" />
                </Button>
                <Button disabled size={'icon'} className="size-8 bg-muted hover:fill-white hover:text-white group" variant={'default'}>
                  <Redo2 className="text-accent-foreground group-hover:text-white" />
                </Button>
              </div>
              <div className="absolute right-0 z-0 flex items-center w-full md:left-1/2 gap-x-2">
                <Button size={'icon'} className="size-8 bg-muted group" variant={'default'}>
                  <Rewind className="fill-accent-foreground text-accent-foreground group-hover:fill-white group-hover:text-white" />
                </Button>
                <Button size={'icon'} className="bg-accent-foreground size-8 hover:fill-white hover:text-white group" variant={'default'}>
                  <Play className="text-accent fill-accent group-hover:fill-white group-hover:text-white" />
                </Button>
                <Button size={'icon'} className="size-8 bg-muted group" variant={'default'}>
                  <FastForward className="fill-accent-foreground text-accent-foreground group-hover:fill-white group-hover:text-white" />
                </Button>
              </div>
              <div className="z-10 flex-row justify-center hidden w-40 p-2 rounded-lg md:flex gap-x-2 bg-muted">
                <Plus size={16} />
                <Slider
                  defaultValue={[50]}
                  max={100}
                  step={1}
                />
                <Minus size={16} />
              </div>
            </div>
          </div>
          <ToolsSidebar />
        </div>
      </Card>
    </Draggable>
  )
}