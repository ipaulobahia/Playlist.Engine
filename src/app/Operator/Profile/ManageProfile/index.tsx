import { ProfilesTable } from "./components"

export const ManageProfile = () => {
  return (
    <main className="flex-1 w-full p-5 space-y-4">
      <div className="flex flex-col gap-0.5">
        <span className="text-xl font-semibold">Perfils da emissora</span>
        <span className="text-sm font-normal text-muted-foreground">Visualize e gerencie os perfils cadastrados na sua emissora</span>
      </div>
      <ProfilesTable />
    </main>
  )
}