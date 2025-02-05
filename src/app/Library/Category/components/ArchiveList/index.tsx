import { ArchiveContextContent } from "@/components/ArchiveContextContent";
import { ScrollList } from "@/components/ui/scroll-list";
import { usePlaylist } from "@/service/api/playlist/getPlaylist";
import { Folder } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { Toolbar } from "./components";

export const ArchiveList = () => {
  const [searchParams] = useSearchParams();

  const categoryType = searchParams.get("categoryType");
  const { data } = usePlaylist(categoryType)

  return (
    <div>
      <Toolbar />
      <ScrollList>
        {
          data && data.map(({ title, playlistId }) => {
            return (
              <ArchiveContextContent key={playlistId} folderId={playlistId}>
                <Link to={`/library/category/archive?categoryType=${categoryType}&folderId=${playlistId}`}>
                  <div className="px-3 w-fit   flex items-center gap-1.5 py-1.5 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground cursor-pointer rounded">
                    <Folder size={16} />
                    <span className="text-sm font-medium">
                      {title}
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