import { Button } from "@/components/ui/button";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from '@dnd-kit/utilities';
import { GripVertical } from "lucide-react";
import { GradientBarAudio } from "./components";

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
      <div className="flex flex-row items-start flex-1 p-4 pt-6 border-l gap-x-5 border-y border-muted-foreground/30 group-even:border-t-0">
        <div className="flex items-center gap-x-1 min-w-24">
          <Button
            {...attributes}
            {...listeners}
            className="w-8 cursor-grab aria-pressed:cursor-grabbing" variant="ghost" size="icon">
            <GripVertical />
          </Button>
          <span className="text-sm font-medium">Track  {(index + 1).toString().padStart(2, "0")}</span>
        </div>
        <GradientBarAudio color={color} name={name} />
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