import {
  Advanced,
  Affiliates,
  AnotherTypes,
  AudioSource,
  BasicSettings,
  Category,
  CategoryArchive,
  CommercialBlocks,
  Commercials,
  ControlSatellite,
  CreateProfile,
  Dashboard,
  DisplayPanel,
  Edition,
  Folder,
  FolderArchive,
  General,
  GeneralPreference,
  Library,
  LibraryFolder,
  Login,
  ManageOperators,
  ManageProfile,
  MetadataStreaming,
  MoveAndCopy,
  MusicalBlock,
  Musics,
  MyAccount,
  NotFound,
  Operator,
  Outputs,
  Pause,
  PendingFiles,
  PlaylistServer,
  QuickStart,
  RdsRss,
  RecentUploads,
  RemoteTriggering,
  Settings,
  StationOffice,
  Sweepers,
  SwitchingBlocks,
  Users,
  XmlWeb
} from "@/app";
import {
  LibraryLayout,
  MainLayout,
  OperatorLayout,
  SettingsLayout
} from "@/components/Layouts";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

export const Routers = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Login />} />
      <Route path="/users" element={<Users />} />
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/library" element={<LibraryLayout />}>
          <Route path="" element={<Library />} />
          <Route path="folder">
            <Route path="" element={<LibraryFolder />} />
            <Route path="archive" element={<FolderArchive />} />
          </Route>
          <Route path="category">
            <Route path="" element={<Category />} />
            <Route path="archive" >
              <Route path="" element={<CategoryArchive />} />
              <Route path="move-and-copy" element={<MoveAndCopy />} />
            </Route>
          </Route>
          <Route path="recent-uploads" element={<RecentUploads />} />
          <Route path="pending-files" element={<PendingFiles />} />
        </Route>
        <Route path="/operator" element={<OperatorLayout />}>
          <Route path="" element={<Operator />} />
          <Route path="my-account" element={<MyAccount />} />
          <Route path="manage-operators" element={<ManageOperators />} />
          <Route path="profile">
            <Route path="manage-profile" element={<ManageProfile />} />
            <Route path="create-profile">
              <Route path="" element={<CreateProfile />} />
              <Route path="general" element={<General />} />
              <Route path="edition" element={<Edition />} />
              <Route path="quickstart" element={<QuickStart />} />
              <Route path="switching-blocks" element={<SwitchingBlocks />} />
              <Route path="commercial-block" element={<CommercialBlocks />} />
              <Route path="musical-block" element={<MusicalBlock />} />
              <Route path="commercials" element={<Commercials />} />
              <Route path="musics" element={<Musics />} />
              <Route path="sweepers" element={<Sweepers />} />
              <Route path="another-types" element={<AnotherTypes />} />
              <Route path="pause" element={<Pause />} />
              <Route path="display-panel" element={<DisplayPanel />} />
              <Route path="folder" element={<Folder />} />
            </Route>
          </Route>
        </Route>
        <Route path="/settings" element={<SettingsLayout />}>
          <Route path="" element={<Settings />} />
          <Route path="playlist-ini">
            <Route path="basic-settings" element={<BasicSettings />} />
            <Route path="affiliates" element={<Affiliates />} />
          </Route>
          <Route path="preference">
            <Route path="playlist-server" element={<PlaylistServer />} />
            <Route path="advanced" element={<Advanced />} />
            <Route path="station-office" element={<StationOffice />} />
            <Route path="outputs" element={<Outputs />} />
            <Route path="audio-source" element={<AudioSource />} />
            <Route path="remote-triggering" element={<RemoteTriggering />} />
            <Route path="control-satellite" element={<ControlSatellite />} />
            <Route path="xml-web" element={<XmlWeb />} />
            <Route path="rds-rss" element={<RdsRss />} />
            <Route path="metadata-streaming" element={<MetadataStreaming />} />
            <Route path="general" element={<GeneralPreference />} />
          </Route>
        </Route>
      </Route>
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)