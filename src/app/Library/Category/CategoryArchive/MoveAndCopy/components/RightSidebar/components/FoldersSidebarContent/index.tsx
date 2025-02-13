import { DialogDeleteList } from "@/components/DialogDeleteList";
import { DialogEditList } from "@/components/DialogEditList";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { ScrollList } from "@/components/ui/scroll-list";
import { usePlaylistTabs } from "@/provider/PlaylistTabsProvider";
import { usePlaylist } from "@/service/api/playlist/getPlaylist";
import { ChevronLeft, Folder } from "lucide-react";
import { useState } from "react";
import { List } from "../../../../types";
import { FoldersContextMenu } from "./components";

interface FoldersSidebarContentProps {
  category: { id: number; name: string; value: string; icon: string; }
  onSelectFolder(list: List): void
  onBack(): void
}

export const FoldersSidebarContent = ({ onSelectFolder, category, onBack }: FoldersSidebarContentProps) => {
  const { addTab } = usePlaylistTabs();

  const [open, setOpen] = useState<boolean>(false)
  const [typeDialog, setTypeDialog] = useState<"Rename" | "Remove">("Rename")
  const [list, setList] = useState<List>()

  const { value, name } = category

  const { data } = usePlaylist(value)

  const emptyList = !data

  function handlerOpenList(list: List) {
    onSelectFolder(list)
  }

  function handlerEditContentList(list: List) {
    addTab(list)
  }

  function handlerRemoveList(list: List) {
    setTypeDialog('Remove')
    setList(list)
  }

  function handlerRenameList(list: List) {
    setTypeDialog('Rename')
    setList(list)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="gap-0 p-2">
        <div>
          <div className="flex flex-row items-center mb-2 gap-x-2">
            <Button onClick={onBack} size={'icon'} variant={'ghost'} className="p-1.5 w-fit h-fit">
              <ChevronLeft size={12} />
            </Button>
            <span>
              {name}
            </span>
          </div>
          <div>
            <ScrollList className="grid-rows-21">
              {
                emptyList
                  ?
                  <div className="flex items-center justify-center w-full h-full p-5 align-middle">
                    <span className="text-sm font-medium">
                      Esta lista está vazia.
                    </span>
                  </div>
                  :
                  data.map((list) => {
                    const { title, playlistId } = list
                    return (
                      <FoldersContextMenu
                        onOpenList={() => handlerOpenList(list)}
                        onEditContentList={() => handlerEditContentList(list)}
                        onRemoveList={() => handlerRemoveList(list)}
                        onRenameList={() => handlerRenameList(list)}
                        key={playlistId}>
                        <div onClick={() => onSelectFolder(list)} className="px-3 w-fit flex items-center gap-1.5 py-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground cursor-pointer rounded">
                          <Folder size={16} />
                          <span className="text-sm font-medium">
                            {title}
                          </span>
                        </div>
                      </FoldersContextMenu>
                    )
                  })
              }
            </ScrollList>
          </div>
        </div>
      </div>
      {typeDialog == "Remove" && <DialogDeleteList setOpen={setOpen} folderId={list?.playlistId!} />}
      {typeDialog == "Rename" && <DialogEditList open={open} setOpen={setOpen} folderId={list?.playlistId!} isDisableChangeCategory />}
    </Dialog>
  )
}