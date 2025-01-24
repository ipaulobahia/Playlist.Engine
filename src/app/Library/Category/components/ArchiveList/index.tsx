import { faker } from "@faker-js/faker";
import { Folder } from "lucide-react";
import { Toolbar } from "./components";
import { Link } from "react-router-dom";
import { ArchiveContextContent } from "@/components/ArchiveContextContent";
import { ScrollList } from "@/components/ui/scroll-list";

export const ArchiveList = () => {
  return (
    <section>
      <Toolbar />
      <ScrollList>
        {
          [...Array(250)].map((_, index) => {
            return (
              <ArchiveContextContent folderId={index}>
                <Link
                  key={index}
                  to={`/library/category/archive?folderId=${index}`}
                >
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
    </section>
  )
}