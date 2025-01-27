import { useMediaQuery } from "@/hooks/use-media-query"
import { DialogLicense, DrawerLicense } from "./components"

interface DrawerDialogLicenseProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const DrawerDialogLicense = ({ open, setOpen }: DrawerDialogLicenseProps) => {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
      <DialogLicense open={open} setOpen={setOpen} />
    )
  }
  else {
    return (
      <DrawerLicense open={open} setOpen={setOpen} />
    )
  }
}