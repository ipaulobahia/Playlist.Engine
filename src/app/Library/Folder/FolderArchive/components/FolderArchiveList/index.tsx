import { ScrollList } from "@/components/ui/scroll-list";
import { faker } from "@faker-js/faker";
import { File } from "lucide-react";
import { Toolbar } from "./components";

export const FolderArchiveList = () => {

  return (
    <section>
      <Toolbar />
      <ScrollList>
        {
          [...Array(250)].map((_, index) => {
            return (
              <div
                key={index}
                className={`px-3 flex w-fit items-center gap-1.5 py-1.5 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground cursor-pointer rounded'}`}
              >
                <File size={16} />
                <span className="text-sm font-medium">
                  {faker.system.fileName().split('.') + ".mp3"}
                </span>
              </div>
            )
          })
        }
      </ScrollList>
    </section>
  )
}