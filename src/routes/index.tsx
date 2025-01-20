import {
  Overview,
  Login,
  Users,
  Archive,
  Library,
  Operator,
  Appearance,
  Password,
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
  XmlWeb
} from "@/app";
import {
  LibraryLayout,
  MainLayout,
  SettingsLayout
} from "@/components/Layouts";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

export const Routers = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Login />} />
      <Route path="/users" element={<Users />} />
      <Route element={<MainLayout />}>
        <Route path="/overview" element={<Overview />} />
        <Route element={<LibraryLayout />}>
          <Route path="/library" element={<Library />} />
          <Route path="/library/category" element={<Category />} />
          <Route path="/library/category/archive" element={<Archive />} />
        </Route>
        <Route element={<SettingsLayout />}>
          <Route path="/settings/my-account/operator" element={<Operator />} />
          <Route path="/settings/my-account/appearance" element={<Appearance />} />
          <Route path="/settings/security/password" element={<Password />} />
          <Route path="/settings/operators/manage-operators" element={<ManageOperators />} />
          <Route path="/settings/profile/manage-profile" element={<ManageProfile />} />
          <Route path="/settings/profile/create-profile" element={<CreateProfile />} />
          <Route path="/settings/preference/playlist-server" element={<PlaylistServer />} />
          <Route path="/settings/preference/advanced" element={<Advanced />} />
          <Route path="/settings/preference/station-office" element={<StationOffice />} />
          <Route path="/settings/preference/outputs" element={<Outputs />} />
          <Route path="/settings/preference/audio-source" element={<AudioSource />} />
          <Route path="/settings/preference/remote-triggering" element={<RemoteTriggering />} />
          <Route path="/settings/preference/control-satellite" element={<ControlSatellite />} />
          <Route path="/settings/preference/xml-web" element={<XmlWeb />} />
          <Route path="/settings/preference/rds-rss" element={<RdsRss />} />
          <Route path="/settings/preference/metadata-streaming" element={<MetadataStreaming />} />
          <Route path="/settings/preference/general" element={<GeneralPreference />} />
        </Route>
      </Route>
    </Route>
  )
)