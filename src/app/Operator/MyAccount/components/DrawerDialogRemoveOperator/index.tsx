import { useMediaQuery } from "@/hooks/use-media-query"
import { useState } from "react"
import { DialogRemoveOperator } from "./components"
import { DrawerRemoveOperator } from "./components/DrawerRemoveOperator"

export const DrawerDialogRemoveOperator = () => {
  const [open, setOpen] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
      <DialogRemoveOperator open={open} setOpen={setOpen} />
    )
  }
  else {
    return (
      <DrawerRemoveOperator open={open} setOpen={setOpen} />
    )
  }
}