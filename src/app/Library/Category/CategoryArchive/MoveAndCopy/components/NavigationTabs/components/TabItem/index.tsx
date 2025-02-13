import { usePlaylistTabs } from "@/provider/PlaylistTabsProvider";
import clsx from "clsx";
import { LibraryBig, X } from "lucide-react";
import { List } from "../../../../types";

interface TabItemProps {
  tab: List
}

export const TabItem = ({ tab }: TabItemProps) => {
  const { tabs, selectedTab, selectTab, removeTab } = usePlaylistTabs();

  const { playlistId, title } = tab;
  const isSelected = selectedTab?.playlistId === playlistId;

  return (
    <div
      onClick={() => selectTab(tab)}
      className={clsx(
        "flex items-center px-2 cursor-pointer border-b-0 py-1.5 rounded-t-lg group gap-x-2 transition-colors",
        isSelected
          ? "bg-card border border-muted-foreground/20 hover:bg-card-foreground/10"
          : "hover:bg-card-foreground/5"
      )}
    >
      <div className="flex flex-row items-center gap-x-1">
        <LibraryBig size={12} />
        <span className="text-xs font-medium">{title}</span>
      </div>
      {tabs.length > 1 && <X onClick={(e) => { e.stopPropagation(); removeTab(tab); }} size={12} className="text-muted-foreground hover:text-accent-foreground" />}
    </div>
  )
}