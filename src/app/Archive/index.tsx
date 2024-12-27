import { ArchiveBreadchumbs, ArchiveTable } from "./components"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { useNavigate } from "react-router-dom";

export const Archive = () => {
  const navigate = useNavigate();

  function goBack() { navigate(-1) }

  return (
    <main className="flex-1 p-3">
      <ArchiveBreadchumbs />
      <div className="p-4 space-y-3 border rounded shadow-sm border-muted-foreground/25 bg-sidebar">
        <div className="flex flex-row items-start gap-1">
          <Button onClick={goBack} size={'icon'} variant={'ghost'}>
            <ChevronLeft size={16} />
          </Button>
          <div className="flex flex-col gap-0.5">
            <span className="text-xl font-semibold">Acervo Musical Rede Aleluia</span>
            <span className="text-sm font-normal text-muted-foreground">Pasta de musica principal da emissora</span>
          </div>
        </div>
        <ArchiveTable />
      </div>
    </main>
  )
}