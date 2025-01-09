import {
  Overview,
  StationArchives,
  Login,
  Users,
  Archive,
  Library,
  Operator,
  General,
  Appearance,
  Password,
  ManageProfile,
  ManageOperators,
  CreateProfile
} from "@/app";
import { ArchivesLayout, MainLayout, SettingsLayout } from "@/components/Layouts";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

export const Routers = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Login />} />
      <Route path="/users" element={<Users />} />
      <Route element={<MainLayout />}>
        <Route path="/overview" element={<Overview />} />
        <Route path="/library" element={<Library />} />
        <Route element={<ArchivesLayout />}>
          <Route path="/station-archives" element={<StationArchives />} />
          <Route path="/archive" element={<Archive />} />
        </Route>
        <Route element={<SettingsLayout />}>
          <Route path="/settings/my-account/operator" element={<Operator />} />
          <Route path="/settings/my-account/general" element={<General />} />
          <Route path="/settings/my-account/appearance" element={<Appearance />} />
          <Route path="/settings/security/password" element={<Password />} />
          <Route path="/settings/operators/manage-operators" element={<ManageOperators />} />
          <Route path="/settings/profile/manage-profile" element={<ManageProfile />} />
          <Route path="/settings/profile/create-profile" element={<CreateProfile />} />
        </Route>
      </Route>
    </Route>
  )
)