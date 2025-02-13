import { List } from "@/app/Library/Category/CategoryArchive/MoveAndCopy/types";
import { createContext } from "react";

interface PlaylistTabsContextProps {
  tabs: List[];
  selectedTab: List | null;
  addTab: (newTab: List) => void;
  selectTab: (tab: List) => void;
  removeTab: (tab: List) => void;
}

export const PlaylistTabsContext = createContext<PlaylistTabsContextProps | undefined>(undefined);