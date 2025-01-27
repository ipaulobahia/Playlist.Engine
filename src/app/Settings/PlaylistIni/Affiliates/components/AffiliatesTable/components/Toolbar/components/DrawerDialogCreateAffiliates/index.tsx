import { useMediaQuery } from "@/hooks/use-media-query"
import { useState } from "react"
import { DialogCreateAffiliates, DrawerCreateAffiliates } from "./components"

export const DrawerDialogCreateAffiliates = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const [open, setOpen] = useState(false)

  if (isDesktop) {
    return (
      <DialogCreateAffiliates open={open} setOpen={setOpen} />
    )
  }
  else {
    return (
      <DrawerCreateAffiliates open={open} setOpen={setOpen} />
    )
  }
}