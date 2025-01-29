import { ArchiveContextContent } from "@/components/ArchiveContextContent";
import { ScrollList } from "@/components/ui/scroll-list";
import { faker } from "@faker-js/faker";
import { Folder } from "lucide-react";
import { Link } from "react-router-dom";
import { Toolbar } from "./components";

export const ArchiveList = () => {
  return (
    <div>
      <Toolbar />
      <ScrollList>
        {
          [...Array(250)].map((_, index) => {
            return (
              <ArchiveContextContent key={index} folderId={index}>
                <Link to={`/library/category/archive?folderId=${index}`}>
                  <div
                    className="px-3 flex items-center gap-1.5 py-1.5 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground cursor-pointer rounded"
                  >
                    <Folder size={16} />
                    <span className="text-sm font-medium">
                      {faker.system.fileName().split(".")[0]}
                    </span>
                  </div>
                </Link>
              </ArchiveContextContent>
            )
          })
        }
      </ScrollList>
    </div>
  )
}