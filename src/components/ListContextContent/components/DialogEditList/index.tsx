import { Button } from "@/components/ui/button"
import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { PingLoading } from "@/components/ui/ping-loading"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { EditPlaylist, editPlaylistSchema } from "@/contracts/Playlist"
import { useEditPlaylist } from "@/service/api/playlist/editPlaylist"
import { usePlaylist } from "@/service/api/playlist/getPlaylist"
import { zodResolver } from "@hookform/resolvers/zod"
import { useCallback, useEffect } from "react"
import { useForm } from "react-hook-form"
import { useSearchParams } from "react-router-dom"

interface DialogEditListProps {
  folderId: number
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const DialogEditList = ({ folderId, open, setOpen }: DialogEditListProps) => {
  const { mutate, isSuccess, isPending, isError } = useEditPlaylist()
  const [searchParams] = useSearchParams();

  const categoryType = searchParams.get("categoryType");
  const { data } = usePlaylist(categoryType)

  const findList = data?.find((list) => list.playlistId == folderId)

  const form = useForm<EditPlaylist>({
    resolver: zodResolver(editPlaylistSchema),
    defaultValues: findList ?
      {
        title: findList.title,
        playlistId: findList.playlistId,
        playlistType: findList.playlistType.toString() as EditPlaylist["playlistType"]
      }
      :
      undefined
    ,
  })

  const { handleSubmit, control, reset } = form

  function handleSubmitPlaylist({ playlistId, playlistType, title }: EditPlaylist) {
    mutate({ playlistId, playlistType, title })
  }

  const onSubmit = useCallback(handleSubmitPlaylist, [mutate])

  useEffect(() => {
    if (open) {
      reset(findList ? {
        title: findList.title,
        playlistId: findList.playlistId,
        playlistType: findList.playlistType.toString() as EditPlaylist["playlistType"]
      } : undefined);
    }
  }, [open, findList, reset]);

  useEffect(() => {
    if (isSuccess && !isError) {
      setOpen(false)
      reset()
    }
  }, [isSuccess])

  return (
    <DialogContent className="w-[90%]">
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Editar lista</DialogTitle>
            <DialogDescription>
              Preencha os campos abaixo para editar sua lista.
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
                  <span>Editar</span>
              }
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  )
}