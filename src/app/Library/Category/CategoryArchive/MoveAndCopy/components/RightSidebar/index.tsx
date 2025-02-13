import { useState } from "react";
import { List } from "../../types";
import { CategorySidebarContent, FilesSidebarContent, FoldersSidebarContent } from "./components";

export const RightSidebar = () => {
  const [selectedCategory, setSelectedCategory] = useState<{ id: number; name: string; value: string; icon: string; }>()
  const [selectedList, setSelectedList] = useState<List>()

  function handlerSelectCategory(category: { id: number; name: string; value: string; icon: string; }) {
    setSelectedCategory(category)
  }

  function handlerBackFolder() {
    setSelectedCategory(undefined)
  }

  function handlerSelectList(list: List) {
    setSelectedList(list)
  }

  function handlerBackFile() {
    setSelectedList(undefined)
  }

  const showCategorySidebarContent = !selectedCategory
  const showFoldersSidebarContent = (selectedCategory && !selectedList)
  const showFilesSidebarContent = selectedList

  return (
    <div className={`bg-sidebar fixed right-0 h-full flex ease-linear border-l border-muted-foreground/25 w-[24vw]`}>
      {showCategorySidebarContent && <CategorySidebarContent onSelectCategory={handlerSelectCategory} />}
      {showFoldersSidebarContent && <FoldersSidebarContent category={selectedCategory} onSelectFolder={handlerSelectList} onBack={handlerBackFolder} />}
      {showFilesSidebarContent && <FilesSidebarContent list={selectedList} onBack={handlerBackFile} />}
    </div>
  )
}