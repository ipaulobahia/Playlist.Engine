import { List } from "@/app/Library/Category/CategoryArchive/MoveAndCopy/types";
import { PlaylistTabsContext } from "@/contexts/PlaylistTabsContext";
import { usePlaylistList } from "@/service/api/playlist/query/getPlaylistList";
import { ReactNode, useContext, useEffect, useState } from "react";

interface PlaylistTabsProviderProps {
  folderId: string | null;
  children: ReactNode
}

export const PlaylistTabsProvider = ({ folderId, children }: PlaylistTabsProviderProps) => {
  const { data } = usePlaylistList(folderId);
  const [tabs, setTabs] = useState<List[]>([]);
  const [selectedTab, setSelectedTab] = useState<List | null>(null);

  useEffect(() => {
    if (data) {
      const { playlistId, playlistType, title } = data;
      setTabs((prev) => {
        const exists = prev.some((tab) => tab.playlistId === playlistId);
        return exists ? prev : [...prev, { playlistId, playlistType, title }];
      });
      setSelectedTab({ playlistId, playlistType, title });
    }
  }, [data]);

  const addTab = (newTab: List) => {
    setTabs((prev) => {
      const exists = prev.some((tab) => tab.playlistId === newTab.playlistId);
      return exists ? prev : [...prev, newTab];
    });
    setSelectedTab(newTab);
  };

  const selectTab = (tab: List) => {
    setSelectedTab(tab);
  };

  const removeTab = (tabToRemove: List) => {
    setTabs((prev) => {
      const updatedTabs = prev.filter((tab) => tab.playlistId !== tabToRemove.playlistId);

      if (selectedTab?.playlistId === tabToRemove.playlistId) {
        setSelectedTab(updatedTabs.length > 0 ? updatedTabs[0] : null);
      }

      return updatedTabs;
    });
  };

  return (
    <PlaylistTabsContext.Provider value={{ tabs, selectedTab, addTab, selectTab, removeTab }}>
      {children}
    </PlaylistTabsContext.Provider>
  );
};

export const usePlaylistTabs = () => {
  const context = useContext(PlaylistTabsContext);
  if (!context) {
    throw new Error("usePlaylistTabs deve ser usado dentro de um PlaylistTabsProvider");
  }
  return context;
};