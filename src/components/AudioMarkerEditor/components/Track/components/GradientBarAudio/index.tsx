import {
  ContextMenu,
  ContextMenuTrigger
} from "@/components/ui/context-menu";
import { ContextMenuContent } from "./components";

interface GradientBarAudioProps {
  color: string;
  name: string
}

export const GradientBarAudio = ({ color, name }: GradientBarAudioProps) => {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div
          style={{ borderColor: color, background: `linear-gradient(to top, ${color}30, transparent)`, }}
          className="relative flex items-center w-full h-full p-2 border-2 rounded-lg">
          <div
            className="absolute top-2 left-2 px-2 py-0.5 rounded-md"
            style={{ backgroundColor: color }}
          >
            <span className="text-xs font-medium text-white">
              {name}
            </span>
          </div>
          {[...Array(150)].map((_, index) => {
            const randomHeight = Math.floor(Math.random() * (95 - 2 + 1)) + 2;
            return (
              <div
                key={index}
                className="w-1 rounded-lg mx-0.5"
                style={{ height: `${randomHeight}%`, backgroundColor: color }}
              />
            );
          })}
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent />
    </ContextMenu>
  )
}