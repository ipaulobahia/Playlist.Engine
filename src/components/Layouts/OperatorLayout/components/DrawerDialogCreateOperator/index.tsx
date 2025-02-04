import { useMediaQuery } from "@/hooks/use-media-query"
import { useState } from "react"
import { DialogCreateOperator, DrawerCreateOperator } from "./components"

export const DrawerDialogCreateOperator = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const [open, setOpen] = useState(false)

  if (isDesktop) {
    return (
      <DialogCreateOperator open={open} setOpen={setOpen} />
    )
  }
  else {
    return (
      <DrawerCreateOperator open={open} setOpen={setOpen} />
    )
  }
}