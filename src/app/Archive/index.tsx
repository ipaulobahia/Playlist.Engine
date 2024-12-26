import { ArchiveTable } from "./components"

export const Archive = () => {
  return (
    <main className="flex-1 p-3">
      <div className="p-4 space-y-3 border rounded shadow-sm border-muted-foreground/25 bg-sidebar">
        <div className="flex flex-col gap-0.5">
          <span className="text-xl font-semibold">Acervo Musical Rede Aleluia</span>
          <span className="text-sm font-normal text-muted-foreground">Pasta de musica principal da emissora</span>
        </div>
        <ArchiveTable />
      </div>
    </main>
  )
}