import { AudioLines, ChevronRight, Cog, Folders, LayoutPanelTop, ListEnd, ListMusic, Music, Music2, PanelsRightBottom, PauseCircle, Pencil } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

export const CreateProfile = () => {
  const { t } = useTranslation()

  return (
    <main className="relative flex flex-1 p-5 pb-20">
      <div className="flex flex-col items-center justify-center w-full max-w-full mx-auto gap-y-5 lg:max-w-3xl">
        <div className="flex flex-col items-center gap-y-1">
          <span className="text-3xl font-semibold text-accent-foreground">{t('Create-Profile')}</span>
          <span className="text-base font-normal text-muted-foreground">{t('Create-Description')}</span>
        </div>
        <div className="flex flex-col w-full gap-y-3">
          <div className="flex flex-col items-center w-full gap-y-3">
            <Link className="w-full" to={'/operator/profile/create-profile/general'}>
              <div className="flex flex-col w-full border rounded-lg shadow cursor-pointer border-muted-foreground/25">
                <div className="grid w-full grid-cols-3 p-4">
                  <div className="flex flex-col justify-center col-span-2 gap-y-1">
                    <span className="text-base font-medium">{t('General')}</span>
                    <span className="text-xs font-normal text-muted-foreground">[Descrição]</span>
                  </div>
                  <div className="flex items-center justify-center ml-auto rounded-full size-24 bg-muted-foreground/10">
                    <Cog className="size-[55%]" />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between flex-1 px-4 py-3 border-t hover:bg-muted-foreground/10 border-muted-foreground/25">
                  <span className="text-xs font-medium text-accent-foreground">
                    {t("See-More")}
                  </span>
                  <ChevronRight size={16} />
                </div>
              </div>
            </Link>
            <div className="grid items-center w-full grid-cols-2 gap-x-3">
              <Link to={'/operator/profile/create-profile/edition'}>
                <div className="flex flex-col flex-1 border rounded-lg shadow cursor-pointer border-muted-foreground/25">
                  <div className="grid items-center w-full grid-cols-3 p-4">
                    <div className="flex flex-col col-span-2 gap-y-1">
                      <span className="text-sm font-medium">Edição</span>
                      <span className="text-xs font-normal text-muted-foreground">[Descrição]</span>
                    </div>
                    <div className="flex items-center justify-center ml-auto rounded-full size-24 bg-muted-foreground/10">
                      <Pencil className="size-[55%]" />
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between flex-1 px-4 py-3 border-t hover:bg-muted-foreground/10 border-muted-foreground/25">
                    <span className="text-xs font-medium text-accent-foreground">
                      {t("See-More")}
                    </span>
                    <ChevronRight size={16} />
                  </div>
                </div>
              </Link>
              <Link to={'/operator/profile/create-profile/quickstart'}>
                <div className="flex flex-col flex-1 border rounded-lg shadow cursor-pointer border-muted-foreground/25">
                  <div className="grid items-center w-full grid-cols-3 p-4">
                    <div className="flex flex-col col-span-2 gap-y-1">
                      <span className="text-sm font-medium">QuickStart</span>
                      <span className="text-xs font-normal text-muted-foreground">[Descrição]</span>
                    </div>
                    <div className="flex items-center justify-center ml-auto rounded-full size-24 bg-muted-foreground/10">
                      <LayoutPanelTop className="size-[55%]" />
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between flex-1 px-4 py-3 border-t hover:bg-muted-foreground/10 border-muted-foreground/25 ">
                    <span className="text-xs font-medium text-accent-foreground">
                      {t("See-More")}
                    </span>
                    <ChevronRight size={16} />
                  </div>
                </div>
              </Link>
            </div>
            <Link className="w-full" to={'/operator/profile/create-profile/switching-blocks'}>
              <div className="flex flex-col w-full border rounded-lg shadow cursor-pointer border-muted-foreground/25">
                <div className="grid w-full grid-cols-3 p-4">
                  <div className="flex flex-col justify-center col-span-2 gap-y-1">
                    <span className="text-base font-medium">Mudança de blocos</span>
                    <span className="text-xs font-normal text-muted-foreground">[Descrição]</span>
                  </div>
                  <div className="flex items-center justify-center ml-auto rounded-full size-24 bg-muted-foreground/10">
                    <ListEnd className="size-[55%]" />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between flex-1 px-4 py-3 border-t hover:bg-muted-foreground/10 border-muted-foreground/25">
                  <span className="text-xs font-medium text-accent-foreground">
                    {t("See-More")}
                  </span>
                  <ChevronRight size={16} />
                </div>
              </div>
            </Link>
            <div className="grid items-center w-full grid-cols-2 gap-x-3">
              <Link to={'/operator/profile/create-profile/commercial-block'}>
                <div className="flex flex-col flex-1 border rounded-lg shadow cursor-pointer border-muted-foreground/25">
                  <div className="grid items-center w-full grid-cols-3 p-4">
                    <div className="flex flex-col col-span-2 gap-y-1">
                      <span className="text-sm font-medium">Bloco comercial</span>
                      <span className="text-xs font-normal text-muted-foreground">[Descrição]</span>
                    </div>
                    <div className="flex items-center justify-center ml-auto rounded-full size-24 bg-muted-foreground/10">
                      <ListMusic className="size-[55%]" />
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between flex-1 px-4 py-3 border-t hover:bg-muted-foreground/10 border-muted-foreground/25">
                    <span className="text-xs font-medium text-accent-foreground">
                      {t("See-More")}
                    </span>
                    <ChevronRight size={16} />
                  </div>
                </div>
              </Link>
              <Link to={'/operator/profile/create-profile/musical-block'}>
                <div className="flex flex-col flex-1 border rounded-lg shadow cursor-pointer border-muted-foreground/25">
                  <div className="grid items-center w-full grid-cols-3 p-4">
                    <div className="flex flex-col col-span-2 gap-y-1">
                      <span className="text-sm font-medium">{t("Musical-Block")}</span>
                      <span className="text-xs font-normal text-muted-foreground">[Descrição]</span>
                    </div>
                    <div className="flex items-center justify-center ml-auto rounded-full size-24 bg-muted-foreground/10">
                      <ListMusic className="size-[55%]" />
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between flex-1 px-4 py-3 border-t hover:bg-muted-foreground/10 border-muted-foreground/25 ">
                    <span className="text-xs font-medium text-accent-foreground">
                      {t("See-More")}
                    </span>
                    <ChevronRight size={16} />
                  </div>
                </div>
              </Link>
            </div>
            <Link className="w-full" to={'/operator/profile/create-profile/commercials'}>
              <div className="flex flex-col w-full border rounded-lg shadow cursor-pointer border-muted-foreground/25">
                <div className="grid w-full grid-cols-3 p-4">
                  <div className="flex flex-col justify-center col-span-2 gap-y-1">
                    <span className="text-base font-medium">Comercial</span>
                    <span className="text-xs font-normal text-muted-foreground">[Descrição]</span>
                  </div>
                  <div className="flex items-center justify-center ml-auto rounded-full size-24 bg-muted-foreground/10">
                    <Music className="size-[55%]" />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between flex-1 px-4 py-3 border-t hover:bg-muted-foreground/10 border-muted-foreground/25">
                  <span className="text-xs font-medium text-accent-foreground">
                    {t("See-More")}
                  </span>
                  <ChevronRight size={16} />
                </div>
              </div>
            </Link>
            <div className="grid items-center w-full grid-cols-2 gap-x-3">
              <Link to={'/operator/profile/create-profile/musics'}>
                <div className="flex flex-col flex-1 border rounded-lg shadow cursor-pointer border-muted-foreground/25">
                  <div className="grid items-center w-full grid-cols-3 p-4">
                    <div className="flex flex-col col-span-2 gap-y-1">
                      <span className="text-sm font-medium">Músicas</span>
                      <span className="text-xs font-normal text-muted-foreground">[Descrição]</span>
                    </div>
                    <div className="flex items-center justify-center ml-auto rounded-full size-24 bg-muted-foreground/10">
                      <Music className="size-[55%]" />
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between flex-1 px-4 py-3 border-t hover:bg-muted-foreground/10 border-muted-foreground/25">
                    <span className="text-xs font-medium text-accent-foreground">
                      {t("See-More")}
                    </span>
                    <ChevronRight size={16} />
                  </div>
                </div>
              </Link>
              <Link to={'/operator/profile/create-profile/sweepers'}>
                <div className="flex flex-col flex-1 border rounded-lg shadow cursor-pointer border-muted-foreground/25">
                  <div className="grid items-center w-full grid-cols-3 p-4">
                    <div className="flex flex-col col-span-2 gap-y-1">
                      <span className="text-sm font-medium">Vinhetas</span>
                      <span className="text-xs font-normal text-muted-foreground">[Descrição]</span>
                    </div>
                    <div className="flex items-center justify-center ml-auto rounded-full size-24 bg-muted-foreground/10">
                      <Music2 className="size-[55%]" />
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between flex-1 px-4 py-3 border-t hover:bg-muted-foreground/10 border-muted-foreground/25 ">
                    <span className="text-xs font-medium text-accent-foreground">
                      {t("See-More")}
                    </span>
                    <ChevronRight size={16} />
                  </div>
                </div>
              </Link>
            </div>
            <Link className="w-full" to={'/operator/profile/create-profile/another-types'}>
              <div className="flex flex-col w-full border rounded-lg shadow cursor-pointer border-muted-foreground/25">
                <div className="grid w-full grid-cols-3 p-4">
                  <div className="flex flex-col justify-center col-span-2 gap-y-1">
                    <span className="text-base font-medium">Inserções genéricas</span>
                    <span className="text-xs font-normal text-muted-foreground">[Descrição]</span>
                  </div>
                  <div className="flex items-center justify-center ml-auto rounded-full size-24 bg-muted-foreground/10">
                    <AudioLines className="size-[55%]" />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between flex-1 px-4 py-3 border-t hover:bg-muted-foreground/10 border-muted-foreground/25">
                  <span className="text-xs font-medium text-accent-foreground">
                    {t("See-More")}
                  </span>
                  <ChevronRight size={16} />
                </div>
              </div>
            </Link>
            <div className="grid items-center w-full grid-cols-2 gap-x-3">
              <Link to={'/operator/profile/create-profile/pause'}>
                <div className="flex flex-col flex-1 border rounded-lg shadow cursor-pointer border-muted-foreground/25">
                  <div className="grid items-center w-full grid-cols-3 p-4">
                    <div className="flex flex-col col-span-2 gap-y-1">
                      <span className="text-sm font-medium">Pausas</span>
                      <span className="text-xs font-normal text-muted-foreground">[Descrição]</span>
                    </div>
                    <div className="flex items-center justify-center ml-auto rounded-full size-24 bg-muted-foreground/10">
                      <PauseCircle className="size-[55%]" />
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between flex-1 px-4 py-3 border-t hover:bg-muted-foreground/10 border-muted-foreground/25">
                    <span className="text-xs font-medium text-accent-foreground">
                      {t("See-More")}
                    </span>
                    <ChevronRight size={16} />
                  </div>
                </div>
              </Link>
              <Link to={'/operator/profile/create-profile/display-panel'}>
                <div className="flex flex-col flex-1 border rounded-lg shadow cursor-pointer border-muted-foreground/25">
                  <div className="grid items-center w-full grid-cols-3 p-4">
                    <div className="flex flex-col col-span-2 gap-y-1">
                      <span className="text-sm font-medium">Gerenciar painés</span>
                      <span className="text-xs font-normal text-muted-foreground">[Descrição]</span>
                    </div>
                    <div className="flex items-center justify-center ml-auto rounded-full size-24 bg-muted-foreground/10">
                      <PanelsRightBottom className="size-[55%]" />
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between flex-1 px-4 py-3 border-t hover:bg-muted-foreground/10 border-muted-foreground/25 ">
                    <span className="text-xs font-medium text-accent-foreground">
                      {t("See-More")}
                    </span>
                    <ChevronRight size={16} />
                  </div>
                </div>
              </Link>
            </div>
            <Link className="w-full" to={'/operator/profile/create-profile/folder'}>
              <div className="flex flex-col w-full border rounded-lg shadow cursor-pointer border-muted-foreground/25">
                <div className="grid w-full grid-cols-3 p-4">
                  <div className="flex flex-col justify-center col-span-2 gap-y-1">
                    <span className="text-base font-medium">{t("Folders")}</span>
                    <span className="text-xs font-normal text-muted-foreground">[Descrição]</span>
                  </div>
                  <div className="flex items-center justify-center ml-auto rounded-full size-24 bg-muted-foreground/10">
                    <Folders className="size-[55%]" />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between flex-1 px-4 py-3 border-t hover:bg-muted-foreground/10 border-muted-foreground/25">
                  <span className="text-xs font-medium text-accent-foreground">
                    {t("See-More")}
                  </span>
                  <ChevronRight size={16} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}