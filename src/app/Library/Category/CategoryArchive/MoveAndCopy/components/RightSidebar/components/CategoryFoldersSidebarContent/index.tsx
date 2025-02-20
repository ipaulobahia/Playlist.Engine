import { DialogCreateList, DialogDeleteList, DialogEditList } from "@/components";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { usePlaylistTabs } from "@/provider/PlaylistTabsProvider";
import { usePlaylist } from "@/service/api/playlist/query/getPlaylist";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { List } from "../../../../types";
import { FoldersContextMenu, MainFoldersContextMenu, MediaFolder } from "./components";

interface FoldersSidebarContentProps {
  category: { id: number; name: string; value: string; icon: string; }
  onSelectFolder(list: List): void
  onBack(): void
}

export const CategoryFoldersSidebarContent = ({ onSelectFolder, category, onBack }: FoldersSidebarContentProps) => {
  const { addTab } = usePlaylistTabs();

  const [open, setOpen] = useState<boolean>(false)
  const [typeDialog, setTypeDialog] = useState<"Create" | "Rename" | "Remove">("Rename")
  const [list, setList] = useState<List>()

  const { value, name } = category

  const { data } = usePlaylist(value)

  const emptyList = !data

  function handleOpenList(list: List) {
    onSelectFolder(list)
  }

  function handleEditContentList(list: List) {
    addTab(list)
  }

  function handleRemoveList(list: List) {
    setTypeDialog('Remove')
    setList(list)
  }

  function handleRenameList(list: List) {
    setTypeDialog('Rename')
    setList(list)
  }

  function handleCreateNewList() {
    setTypeDialog('Create')
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <MainFoldersContextMenu
        categoryName={name}
        onCreateNewList={() => handleCreateNewList()}
      >
        <div className="flex-1 w-full gap-0 p-2">
          <div className="flex flex-row items-center mb-2 gap-x-1">
            <Button onClick={onBack} size={'icon'} variant={'ghost'} className="p-1.5 w-fit h-fit">
              <ChevronLeft size={12} />
            </Button>
            <span className="font-semibold">
              {name}
            </span>
          </div>
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
                const { playlistId } = list

                return (
                  <FoldersContextMenu
                    onOpenList={() => handleOpenList(list)}
                    onEditContentList={() => handleEditContentList(list)}
                    onRemoveList={() => handleRemoveList(list)}
                    onRenameList={() => handleRenameList(list)}
                    key={playlistId}>
                    <MediaFolder onClick={() => onSelectFolder(list)} list={list} />
                  </FoldersContextMenu>
                )
              })
          }
        </div>
      </MainFoldersContextMenu>
      {typeDialog == "Create" && <DialogCreateList open={open} setOpen={setOpen} categoryValue={category.value}/>}
      {typeDialog == "Rename" && <DialogEditList open={open} setOpen={setOpen} folderId={list?.playlistId!} isDisableChangeCategory />}
      {typeDialog == "Remove" && <DialogDeleteList setOpen={setOpen} folderId={list?.playlistId!} />}
    </Dialog>
  )
}