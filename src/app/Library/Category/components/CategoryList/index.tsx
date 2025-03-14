import { ListContextContent } from "@/components";
import { ScrollList } from "@/components/ui/scroll-list";
import { usePlaylist } from "@/service/api/playlist/query/getPlaylist";
import { FAKE_LIST_CATEGORY } from "@/utils/fakeData";
import { useTranslation } from "react-i18next";
import { Link, useSearchParams } from "react-router-dom";
import { MainListContextContent, Toolbar } from "./components";

export const CategoryList = () => {
  const { t } = useTranslation()

  const [searchParams] = useSearchParams();

  const categoryType = searchParams.get("categoryType");
  const { data } = usePlaylist(categoryType)

  const emptyList = !data

  const FolderIcon = FAKE_LIST_CATEGORY.find(item => item.value === categoryType)?.icon;

  return (
    <div>
      <Toolbar />
      <MainListContextContent>
        {
          emptyList
            ?
            <div className="flex items-center justify-center flex-1 h-full p-5 align-middle">
              <span className="text-sm font-medium">
                {t('Empty-Categories')}
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
                          <img src={FolderIcon} className="size-4" />
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
      </MainListContextContent>
    </div>
  )
}