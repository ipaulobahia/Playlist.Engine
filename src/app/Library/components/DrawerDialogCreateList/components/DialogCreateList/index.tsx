import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { PingLoading } from "@/components/ui/ping-loading"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CreatePlaylist, createPlaylistSchema } from "@/contracts/Playlist"
import { useCreatePlaylist } from "@/service/api/playlist/mutate/createPlaylist"
import { CategoryEnum } from "@/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { useCallback, useEffect } from "react"
import { useForm } from "react-hook-form"
import { useSearchParams } from "react-router-dom"

interface DialogCreateListProps {
  children: React.ReactNode
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const DialogCreateList = ({ children, open, setOpen }: DialogCreateListProps) => {
  const { mutate, isSuccess, isPending, isError } = useCreatePlaylist()

  const [searchParams] = useSearchParams();
  const categoryTypeIndex = (Object.values(CategoryEnum).indexOf(searchParams.get("categoryType") as CategoryEnum) + 1).toString();
  const categoryType = categoryTypeIndex.toString();

  const form = useForm<CreatePlaylist>({
    resolver: zodResolver(createPlaylistSchema),
    defaultValues: {
      title: "",
      playlistId: 0,
      playlistType: categoryType == "0" ? undefined : categoryType as CreatePlaylist["playlistType"]
    },
  })

  const { handleSubmit, control, reset } = form

  function handleSubmitPlaylist({ playlistId, playlistType, title }: CreatePlaylist) {
    mutate({ playlistId, playlistType, title })
  }

  const onSubmit = useCallback(handleSubmitPlaylist, [mutate])

  useEffect(() => {
    if (open) {
      reset()
    }
  }, [open])

  useEffect(() => {
    if (isSuccess && !isError) {
      setOpen(false)
      reset()
    }
  }, [isSuccess])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="w-[90%]">
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>Nova lista</DialogTitle>
              <DialogDescription>
                Preencha os campos abaixo para criar sua lista perfil. Defina um nome e uma categoria.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <FormField
                control={control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Nome</FormLabel>
                    <FormControl>
                      <Input className="text-xs placeholder:text-xs" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="playlistType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Categoria</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="text-xs placeholder:text-xs">
                          <SelectValue placeholder="Selecione uma categoria" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1">Gênero</SelectItem>
                        <SelectItem value="2">Artista</SelectItem>
                        <SelectItem value="3">Compositor</SelectItem>
                        <SelectItem value="4">Gravadora</SelectItem>
                        <SelectItem value="5">Album</SelectItem>
                        <SelectItem value="6">Ritmo</SelectItem>
                        <SelectItem value="7">Idioma</SelectItem>
                        <SelectItem value="8">Ano</SelectItem>
                        <SelectItem value="10">Classificação</SelectItem>
                        <SelectItem value="11">Vocal</SelectItem>
                        <SelectItem value="12">Lista</SelectItem>
                        <SelectItem value="13">Vinhetas</SelectItem>
                        <SelectItem value="14">Dinâmico</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter className="flex flex-row items-center justify-between w-full">
              <DialogClose asChild>
                <Button variant={'outline'}>Cancelar</Button>
              </DialogClose>
              <Button disabled={isPending} type="submit">
                {
                  isPending
                    ?
                    <PingLoading />
                    :
                    <span>Criar</span>
                }
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}