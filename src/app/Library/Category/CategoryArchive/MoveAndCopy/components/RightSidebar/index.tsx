import { useState } from "react";
import { List } from "../../types";
import { CategoryFoldersSidebarContent, CategorySidebarContent, FilesOnlyFoldersSidebarContent, FilesSidebarContent, OnlyFoldersSidebarContent } from "./components";

export const RightSidebar = () => {
  const [selectedCategory, setSelectedCategory] = useState<{ id: number; name: string; value: string; icon: string; }>()
  const [selectedOnlyFolders, setSelectedOnlyFolders] = useState<boolean>(false)
  const [selectedFilesOnlyFolders, setSelectedFilesOnlyFolders] = useState<number>()
  const [selectedList, setSelectedList] = useState<List>()

  function handleSelectCategory(category: { id: number; name: string; value: string; icon: string; }) {
    setSelectedCategory(category)
  }

  function handleBackFolder() {
    setSelectedCategory(undefined)
  }

  function handleSelectList(list: List) {
    setSelectedList(list)
  }

  function handleBackFile() {
    setSelectedList(undefined)
  }

  function handleSelectOnlyFolders() {
    setSelectedOnlyFolders(true)
  }

  function hanldeBackOnlyFolders() {
    setSelectedOnlyFolders(false)
  }

  function handleSelectOnlyFolder(folderId: number) {
    setSelectedFilesOnlyFolders(folderId)
  }

  function handleBackFileOnlyFolders() {
    setSelectedFilesOnlyFolders(undefined)
  }

  const showCategorySidebarContent = !selectedCategory && !selectedOnlyFolders
  const showOnlyFoldersSidebarContent = (selectedOnlyFolders && !selectedFilesOnlyFolders)
  const showCategoryFoldersSidebarContent = (selectedCategory && !selectedList)
  const showFilesOnlyFoldersSidebarContent = selectedFilesOnlyFolders
  const showFilesSidebarContent = selectedList

  return (
    <div className={`bg-sidebar fixed right-0 h-full flex ease-linear border-l border-muted-foreground/25 w-[24vw]`}>
      {showCategorySidebarContent && <CategorySidebarContent onSelectCategory={handleSelectCategory} onSelectOnlyFolders={handleSelectOnlyFolders} />}
      {showOnlyFoldersSidebarContent && <OnlyFoldersSidebarContent onBack={hanldeBackOnlyFolders} onSelectOnlyFolder={handleSelectOnlyFolder} />}
      {showCategoryFoldersSidebarContent && <CategoryFoldersSidebarContent category={selectedCategory} onSelectFolder={handleSelectList} onBack={handleBackFolder} />}
      {showFilesOnlyFoldersSidebarContent && <FilesOnlyFoldersSidebarContent folderId={selectedFilesOnlyFolders} onBack={handleBackFileOnlyFolders} />}
      {showFilesSidebarContent && <FilesSidebarContent list={selectedList} onBack={handleBackFile} />}
    </div>
  )
}