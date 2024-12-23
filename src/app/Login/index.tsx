import { LoginForm } from "./components"

export const Login = () => {
  return (
    <main className="flex min-h-svh w-[100vw] flex-col items-center justify-center dark:bg-black p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginForm />
      </div>
    </main>
  )
}