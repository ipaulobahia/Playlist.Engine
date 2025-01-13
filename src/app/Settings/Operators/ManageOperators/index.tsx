import { OperatorsTable } from "./components"

export const ManageOperators = () => {
  return (
    <main className="p-3">
      <div className="p-4 space-y-3 border rounded shadow-sm border-muted-foreground/25 bg-sidebar">
        <div className="flex flex-col gap-0.5">
          <span className="text-xl font-semibold">Operadores da emissora</span>
          <span className="text-sm font-normal text-muted-foreground">Visualize e gerencie os operadores cadastrados na sua emissora</span>
        </div>
        <OperatorsTable />
      </div>
    </main>
  )
}