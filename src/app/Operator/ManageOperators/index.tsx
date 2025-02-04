import { OperatorsTable } from "./components"

export const ManageOperators = () => {
  return (
    <main className="flex-1 w-full p-5 space-y-4">
      <div className="flex flex-col gap-0.5">
        <span className="text-xl font-semibold">Operadores da emissora</span>
        <span className="text-sm font-normal text-muted-foreground">Visualize e gerencie os operadores cadastrados na sua emissora</span>
      </div>
      <OperatorsTable />
    </main>
  )
}