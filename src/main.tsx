import { createRoot } from 'react-dom/client'
import './styles/global.css'
import { RouterProvider } from 'react-router-dom'
import { Routers } from './routes'
import { ThemeProvider } from './components/theme-provider'
import InfoSidebarProvider from './provider/InfoSidebarProvider'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient(
  {
    defaultOptions:
    {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 5 * (60 * 1000) // 5 Minutos
      }
    }
  }
)

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="@PlaylistEngine">
      <InfoSidebarProvider>
        <RouterProvider router={Routers} />
      </InfoSidebarProvider>
    </ThemeProvider>
    <ReactQueryDevtools buttonPosition='bottom-left' initialIsOpen={false} />
  </QueryClientProvider>
)
