import {
  Overview,
  Login,
  Users,
  Archive,
  Library,
  Operator,
  Appearance,
  ManageProfile,
  ManageOperators,
  CreateProfile,
  Category,
  Advanced,
  AudioSource,
  ControlSatellite,
  GeneralPreference,
  MetadataStreaming,
  Outputs,
  PlaylistServer,
  RdsRss,
  RemoteTriggering,
  StationOffice,
  XmlWeb,
  NotFound,
  BasicSettings,
  Affiliates,
  RecentUploads
} from "@/app";
import {
  LibraryLayout,
  MainLayout, SettingsLayout
} from "@/components/Layouts";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

export const Routers = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Login />} />
      <Route path="/users" element={<Users />} />
      <Route element={<MainLayout />}>
        <Route path="/overview" element={<Overview />} />
        <Route path="/library" element={<LibraryLayout />}>
          <Route path="" element={<Library />} />
          <Route path="category" element={<Category />} />
          <Route path="category/archive" element={<Archive />} />
          <Route path="recent-uploads" element={<RecentUploads />} />
        </Route>
        <Route path="/settings" element={<SettingsLayout />}>
          <Route path="my-account">
            <Route path="operator" element={<Operator />} />
            <Route path="appearance" element={<Appearance />} />
          </Route>
          <Route path="operators">
            <Route path="manage-operators" element={<ManageOperators />} />
          </Route>
          <Route path="profile">
            <Route path="manage-profile" element={<ManageProfile />} />
            <Route path="create-profile" element={<CreateProfile />} />
          </Route>
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