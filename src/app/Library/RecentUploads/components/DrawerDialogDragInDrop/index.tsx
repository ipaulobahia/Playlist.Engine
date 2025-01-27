import { useMediaQuery } from "@/hooks/use-media-query";
import { useState } from "react";
import { DialogDragInDrop, DrawerDragInDrop } from "./components";

export const DrawerDialogDragInDrop = () => {
  const [open, setOpen] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
      <DialogDragInDrop open={open} setOpen={setOpen} />
    )
  }
  else {
    return (
      <DrawerDragInDrop open={open} setOpen={setOpen} />
    )
  }
}