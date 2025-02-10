import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { PingLoading } from "@/components/ui/ping-loading"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CreatePlaylist, createPlaylistSchema } from "@/contracts/Playlist"
import { useCreatePlaylist } from "@/service/api/playlist/createPlaylist"
import { CategoryEnum } from "@/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { ListPlus, Plus } from "lucide-react"
import { useCallback, useEffect } from "react"
import { useForm } from "react-hook-form"
import { useSearchParams } from "react-router-dom"

interface DrawerCreateListProps {
  children: React.ReactNode
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const DrawerCreateList = ({ open, setOpen }: DrawerCreateListProps) => {
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
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Card className="flex flex-col gap-3 p-3 bg-transparent rounded cursor-pointer border-muted-foreground/25 dark:hover:bg-muted/50 hover:bg-muted">
          <div className="flex flex-row justify-between w-full">
            <div className="flex items-center justify-center rounded bg-accent-foreground size-8">
              <ListPlus className="text-white dark:text-black size-5" />
            </div>
            <Plus size={16} />
          </div>
          <span className="text-sm font-medium">
            Criar lista
          </span>
        </Card>
      </DrawerTrigger>
      <DrawerContent className="px-4">
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <DrawerHeader>
              <DrawerTitle>Nova lista</DrawerTitle>
              <DrawerDescription>
                Preencha os campos abaixo para criar sua lista perfil. Defina um nome e uma categoria.
              </DrawerDescription>
            </DrawerHeader>
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
            <DrawerFooter className="flex flex-row items-center justify-between w-full">
              <DrawerClose>
                <Button variant={'outline'}>Cancelar</Button>
              </DrawerClose>
              <Button disabled={isPending} type="submit">
                {
                  isPending
                    ?
                    <PingLoading />
                    :
                    <span>Criar</span>
                }
              </Button>
            </DrawerFooter>
          </form>
        </Form>
      </DrawerContent>
    </Drawer>
  )
}