import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'
import { ThemeProvider } from './components/theme-provider'
import InfoSidebarProvider from './provider/InfoSidebarProvider'
import { UploadProvider } from './provider/UploadProvider'
import { Routers } from './routes'
import './styles/global.css'

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
        <UploadProvider>
          <RouterProvider router={Routers} />
          <Toaster position='top-right' expand={false} richColors/>
        </UploadProvider>
      </InfoSidebarProvider>
    </ThemeProvider>
    <ReactQueryDevtools buttonPosition='bottom-left' initialIsOpen={false} />
  </QueryClientProvider>
)
