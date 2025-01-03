import { Button } from "@/components/ui/button";
import { FAKE_USERS_DATA } from "@/utils/fakeData";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

export const BtnProfile = () => {
  const [stationProfiles] = useState([...new Set(['Todos', ...FAKE_USERS_DATA.map(item => item.profile)])]);
  const [selectedProfile, setSelectedProfile] = useState('Todos')

  function handlerSelectProfile(profile: string) {
    setSelectedProfile(profile)
  }

  return (
    <div className="space-y-1.5 hidden lg:block overflow-auto">
      {
        stationProfiles.map((profile, index) => {
          return (
            <Button onClick={() => handlerSelectProfile(profile)} key={index} className={`items-center justify-between w-full rounded ${selectedProfile == profile ? "bg-secondary dark:bg-secondary/50" : "dark:bg-transparent dark:hover:bg-secondary/50"}`} size={'sm'} variant={'ghost'} >
              <span>
                {profile}
              </span>
              <ChevronRight />
            </Button>
          )
        })
      }
    </div>
  )
}