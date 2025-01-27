import { useMediaQuery } from "@/hooks/use-media-query"
import { useState } from "react"
import { DialogOperatorPin, DrawerOperatorPin } from "./components"

interface DrawerDialogOperatorPinProps {
  operator: {
    id: number;
    avatar: string;
    name: string;
    profile: string;
  }
}

export const DrawerDialogOperatorPin = ({ operator }: DrawerDialogOperatorPinProps) => {
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const [open, setOpen] = useState(false)

  if (isDesktop) {
    return (
      <DialogOperatorPin open={open} setOpen={setOpen} operator={operator} />
    )
  }
  else {
    return (
      <DrawerOperatorPin open={open} setOpen={setOpen} operator={operator} />
    )
  }
}