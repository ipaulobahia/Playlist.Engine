import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useState } from "react";

interface IAccordionContentOptions {
  option: {
    id: number;
    name: string;
    description: string;
    isChecked: boolean;
    active: boolean;
    inputValue: string;
  }
}

export const AccordionContentOptions = ({ option }: IAccordionContentOptions) => {
  const { id, description, isChecked, active, name, inputValue } = option
  const [isActive, setIsActive] = useState<boolean>(active)
  const [input, setInput] = useState<string>(inputValue)

  return (
    <div key={id} className="flex flex-row items-center justify-between w-full gap-x-4">
      <Label className="flex flex-col text-sm font-medium leading-none gap-y-1">
        <span>{name}</span>
        <span className="text-xs font-normal leading-snug text-muted-foreground">{description}</span>
      </Label>
      {
        isChecked
          ?
          <Switch checked={isActive} onCheckedChange={setIsActive} id={id.toString()} />
          :
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Segundos"
            className="dark:bg-black w-fit border-muted-foreground/25 placeholder:text-xs"
          />
      }
    </div>
  )
}