import { useMediaQuery } from "@/hooks/use-media-query"
import { useState } from "react"
import { DialogCreateProfile, DrawerCreateProfile } from "./components"

export const DrawerDialogCreateProfile = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const [open, setOpen] = useState(false)

  if (isDesktop) {
    return (
      <DialogCreateProfile open={open} setOpen={setOpen} />
    )
  }
  else {
    return (
      <DrawerCreateProfile open={open} setOpen={setOpen} />
    )
  }
}