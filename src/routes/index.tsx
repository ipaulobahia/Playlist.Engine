import { Dashboard, StationArchives, Login, Users, Archive, Settings } from "@/app";
import { ArchivesLayout, MainLayout } from "@/components/Layouts";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

export const Routers = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Login />} />
      <Route path="/users" element={<Users />} />
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route element={<ArchivesLayout />}>
          <Route path="/station-archives" element={<StationArchives />} />
          <Route path="/archive/:id" element={<Archive />} />
        </Route>
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Route>
  )
)