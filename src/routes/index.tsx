import { Overview, StationArchives, Login, Users, Archive, Settings, Library } from "@/app";
import { ArchivesLayout, MainLayout } from "@/components/Layouts";
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
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Route>
  )
)