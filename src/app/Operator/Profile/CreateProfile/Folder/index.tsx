export const Folder = () => {
  return (
    <div className="relative flex flex-1 p-5 pb-20">
      <div className="justify-center w-full max-w-full mx-auto lg:max-w-3xl">
        <div className="space-y-5">
          <header className="justify-between px-4 py-6 mx-auto border rounded-md rounded-b-none border-muted-foreground/25 sm:flex sm:px-6">
            <div className="flex items-center w-full">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Pastas</h1>
                <p className="text-sm text-muted-foreground">[Descrição]</p>
              </div>
            </div>
          </header>
        </div>
      </div>
    </div>
  )
}