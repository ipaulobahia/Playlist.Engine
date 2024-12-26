import { Dashboard, StationArchives, Login, Users, Archive } from "@/app";
import { MainLayout } from "@/app/Layouts";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

export const Routers = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Login />} />
      <Route path="/users" element={<Users />} />
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/station-archives" element={<StationArchives />} />
        <Route path="/archive/:id" element={<Archive />} />
      </Route>
    </Route>
  )
)