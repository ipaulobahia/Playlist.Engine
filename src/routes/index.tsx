import { Overview, StationArchives, Login, Users, Archive, Library, Profile, General, Appearance, Password, ManageTeam } from "@/app";
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
          <Route path="/archive/:id" element={<Archive />} />
        </Route>
        <Route element={<SettingsLayout />}>
          <Route path="/settings/my-account/profile" element={<Profile />} />
          <Route path="/settings/my-account/general" element={<General />} />
          <Route path="/settings/my-account/appearance" element={<Appearance />} />
          <Route path="/settings/security/password" element={<Password />} />
          <Route path="/settings/operators/manage-team" element={<ManageTeam />} />
        </Route>
      </Route>
    </Route>
  )
)