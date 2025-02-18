import { ListContextContent } from "@/components";
import { ScrollList } from "@/components/ui/scroll-list";
import { usePlaylist } from "@/service/api/playlist/query/getPlaylist";
import { Folder } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { Toolbar } from "./components";

export const CategoryList = () => {
  const [searchParams] = useSearchParams();

  const categoryType = searchParams.get("categoryType");
  const { data } = usePlaylist(categoryType)

  const emptyList = !data

  return (
    <div>
      <Toolbar />
      {
        emptyList
          ?
          <div className="flex items-center justify-center p-5 align-middle">
            <span className="text-sm font-medium">
              Esta categoria está vazia.
            </span>
          </div>
          :
          <ScrollList>
            {
               data.map(({ title, playlistId }) => {
                return (
                  <ListContextContent key={playlistId} folderId={playlistId}>
                    <Link className="w-fit" to={`/library/category/archive?categoryType=${categoryType}&folderId=${playlistId}`}>
                      <div className="px-3 flex items-center gap-1.5 py-1.5 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground cursor-pointer rounded">
                        <Folder size={16} />
                        <span className="text-sm font-medium">
                          {title}
                        </span>
                      </div>
                    </Link>
                  </ListContextContent>
                )
              })
            }
          </ScrollList>
      }
    </div>
  )
}