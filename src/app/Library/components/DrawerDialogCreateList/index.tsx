import { useMediaQuery } from "@/hooks/use-media-query"
import { useState } from "react"
import { DialogCreateList, DrawerCreateList } from "./components"

interface DrawerDialogCreateListProps {
  children: React.ReactNode
}

export const DrawerDialogCreateList = ({ children }: DrawerDialogCreateListProps) => {
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const [open, setOpen] = useState(false)

  if (isDesktop) {
    return (
      <DialogCreateList children={children} open={open} setOpen={setOpen} />
    )
  }
  else {
    return (
      <DrawerCreateList children={children} open={open} setOpen={setOpen} />
    )
  }
}