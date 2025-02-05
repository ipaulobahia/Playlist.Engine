"use client"

import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../ui/command"
import { Dialog } from "../ui/dialog"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"

const groups = [
  {
    label: "Matriz",
    teams: [
      {
        label: "Playlist WebRádio",
        value: "personal",
      },
    ],
  },
  {
    label: "Rede",
    teams: [
      {
        label: "Rádio Playlist Demonstração",
        value: "acme-inc",
      },
      {
        label: "Suporte Playlist",
        value: "monsters",
      },
    ],
  },
]

type Team = (typeof groups)[number]["teams"][number]

export const StationSwitcher = () => {
  const [open, setOpen] = useState(false)
  const [showNewTeamDialog, setShowNewTeamDialog] = useState(false)
  const [selectedTeam, setSelectedTeam] = useState<Team>(groups[0].teams[0])

  return (
    <Dialog open={showNewTeamDialog} onOpenChange={setShowNewTeamDialog}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            aria-label="Selecione uma station"
            className="justify-between w-56"
          >
            <Avatar className="size-5">
              <AvatarImage
                src={`https://avatar.vercel.sh/${selectedTeam.value}.png`}
                alt={selectedTeam.label}
                className="grayscale"
              />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <span className="overflow-hidden text-ellipsis whitespace-nowrap">
              {selectedTeam.label}
            </span>
            <ChevronsUpDown className="ml-auto opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-56 p-0">
          <Command>
            <CommandInput placeholder="Pesquise por uma Station..." className="placeholder:text-xs" />
            <CommandList>
              <CommandEmpty className="py-4 text-xs text-center">Nenhuma Station encontrada</CommandEmpty>
              {groups.map((group) => (
                <CommandGroup key={group.label} heading={group.label}>
                  {group.teams.map((team) => (
                    <CommandItem
                      key={team.value}
                      onSelect={() => { setSelectedTeam(team), setOpen(false) }}
                      className="text-xs"
                    >
                      <Avatar className="w-5 h-5">
                        <AvatarImage
                          src={`https://avatar.vercel.sh/${team.value}.png`}
                          alt={team.label}
                          className="grayscale"
                        />
                        <AvatarFallback>SC</AvatarFallback>
                      </Avatar>
                      <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                        {team.label}
                      </span>
                      <Check className={cn("ml-auto", selectedTeam.value === team.value ? "opacity-100" : "opacity-0")} />
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </Dialog>
  )
}