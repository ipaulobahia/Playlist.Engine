import { useMediaQuery } from "@/hooks/use-media-query"
import { useState } from "react"
import { DialogAddFile, DrawerAddFile } from "./components"

interface DrawerDialogAddFileProps {
  children: React.ReactNode
}

export const DrawerDialogAddFile = ({ children }: DrawerDialogAddFileProps) => {
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const [open, setOpen] = useState(false)

  if (isDesktop) {
    return (
      <DialogAddFile children={children} open={open} setOpen={setOpen} />
    )
  }
  else {
    return (
      <DrawerAddFile children={children} open={open} setOpen={setOpen} />
    )
  }
}