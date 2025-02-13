import { usePlaylistTabs } from "@/provider/PlaylistTabsProvider";
import { CloseBtn, TabItem } from "./components";

export const NavigationTabs = () => {
  const { tabs } = usePlaylistTabs();

  return (
    <header className="flex flex-row items-end w-full h-8 border-b shadow gap-x-2 border-muted-foreground/20 bg-sidebar">
      <div className="flex flex-row items-center ml-1">
        {tabs.map((tab) => (<TabItem key={tab.playlistId} tab={tab} />))}
      </div>
      <CloseBtn />
    </header >
  )
}