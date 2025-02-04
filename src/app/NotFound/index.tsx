import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export const NotFound = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full h-screen ">
      <div className="relative flex items-end justify-center text-center">
        <h1 className="font-extrabold tracking-widest text-white text-9xl">404</h1>
        <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>
      </div>
      <div className="flex flex-col my-6 text-center">
        <span className="tracking-wide">Parece que você encontrou a porta para o grande nada!</span>
        <span className="tracking-wide">Vamos te redirecionar para a página inicial para te auxiliar a chegar onde você precisa ir.</span>
      </div>
      <Link to={'/'}>
        <Button size={'lg'} className="mt-3">
          Ir para Home
        </Button>
      </Link>
    </main>
  )
}