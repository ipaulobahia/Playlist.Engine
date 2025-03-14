import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreVertical } from "lucide-react"
import { useTranslation } from "react-i18next"

type DropdownMenuRowActionsProps = {
  currentStatus: string
}

export const DropdownMenuRowActions = ({ currentStatus }: DropdownMenuRowActionsProps) => {
  const { t } = useTranslation()

  return (
    <DropdownMenu>
      <div className="flex justify-end">
        <DropdownMenuTrigger asChild>
          <Button size={'sm'} variant="ghost" className="p-0 size-8">
            <span className="sr-only">{t("Open-Menu")}</span>
            <MoreVertical />
          </Button>
        </DropdownMenuTrigger>
      </div>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          {t("Edit")}
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>{t("Status")}</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuRadioGroup value={currentStatus}>
              <DropdownMenuRadioItem disabled={currentStatus == "0"} value="0">
                Inativo
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem disabled={currentStatus == "1"} value="1">
                Pendente
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem disabled={currentStatus == "2"} value="2">
                Ativo
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Remover</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}