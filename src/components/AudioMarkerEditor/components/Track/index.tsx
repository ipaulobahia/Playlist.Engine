import { Button } from "@/components/ui/button";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from '@dnd-kit/utilities';
import clsx from "clsx";
import { GripVertical } from "lucide-react";

interface TrackProps {
  track: {
    index: number;
    id: number;
    name: string;
    color: string;
  }
}

export const Track = ({ track }: TrackProps) => {
  const { id, name, color, index } = track;
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      key={id}
      className="relative flex min-h-[200px] min-w-[800px] group"
    >
      <div className="flex flex-row items-start flex-1 p-4 pt-6 border-l rounded-r-none rounded-bl-lg gap-x-5 border-y border-muted-foreground/30 group-first:rounded-tl-lg group-first:rounded-b-none group-first:border-b-0">
        <div className="flex items-center gap-x-1 min-w-24">
          <Button
            {...attributes}
            {...listeners}
            className="w-8 cursor-grab aria-pressed:cursor-grabbing" variant="ghost" size="icon">
            <GripVertical />
          </Button>
          <span className="text-sm font-medium">Track  {(index + 1).toString().padStart(2, "0")}</span>
        </div>
        <div className={clsx("relative flex w-full h-full items-center p-2 border-2 rounded-lg bg-gradient-to-t", `from-${color}-600/35`, `border-${color}-600`)}>
          <div className={clsx("absolute top-2 left-2 px-2 py-0.5 rounded-md", `bg-${color}-600`)}>
            <span className="text-xs font-medium text-white">
              {name}
            </span>
          </div>
          {[...Array(150)].map((_, index) => {
            const randomHeight = Math.floor(Math.random() * (95 - 2 + 1)) + 2;
            return (
              <div
                key={index}
                className={clsx("w-1 rounded-lg mx-0.5", `bg-${color}-600`)}
                style={{ height: `${randomHeight}%` }}
              />
            );
          })}
        </div>
      </div>
      <div className="sticky top-0 -right-0.5 flex flex-col items-center h-full border shadow-md border-muted-foreground/30 bg-card group-first:border-b-0">
        <div className="px-2 border-b border-muted-foreground/30">
          <span className="text-xs text-muted-foreground">dB</span>
        </div>
        <div className="flex flex-col items-center justify-around flex-1">
          {
            ["-7", "-14", "-20", "-14", "-7"].map((dB, i) => {
              return (
                <span key={i} className="text-xs rotate-90 text-muted-foreground">
                  {dB}
                </span>
              )
            })
          }
        </div>
        <div className="h-3" />
      </div>
    </div>
  )
}