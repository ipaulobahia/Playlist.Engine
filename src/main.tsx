import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import { RouterProvider } from 'react-router-dom'
import { Routers } from './routes'
import { ThemeProvider } from './components/theme-provider'
import InfoSidebarProvider from './provider/InfoSidebarProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="@PlaylistEngine">
      <InfoSidebarProvider>
        <RouterProvider router={Routers} />
      </InfoSidebarProvider>
    </ThemeProvider>
  </StrictMode>,
)
