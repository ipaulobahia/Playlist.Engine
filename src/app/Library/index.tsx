import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileClock, FolderUp, ListMusic, ListPlus, MoreVertical, Plus } from "lucide-react";
import {
  CalendarSVG,
  ClapperBoardSVG,
  DiscSVG,
  FlagSVG,
  FolderSVG,
  GuitarSVG,
  KeyboardMusicSVG,
  MicSVG,
  MusicNoteSVG,
  SaxSVG,
  SingerSVG,
  StarSVG,
  CommercialSVG,
  TextSVG,
  PendingFileSVG
} from '@/assets/svg/categories'

const FAKE_LIST_LIBRARY = [
  {
    name: "Flashback",
    info: {
      name: "Flashback",
      description: "Coleção de músicas ou áudios de décadas passadas, trazendo uma viagem ao passado com grandes sucessos de diferentes épocas."
    },
    archiveCount: 520,
  },
  {
    name: "Midback",
    info: {
      name: "Midback",
      description: "Lista com áudios ou músicas de meio de carreira de artistas, possivelmente com foco em períodos intermediários ou transições na indústria musical."
    },
    archiveCount: 75,
  },
  {
    name: "Sucesssos 2023",
    info: {
      name: "Sucesssos 2023",
      description: "Compilação dos maiores sucessos musicais ou vídeos mais populares do ano de 2023, trazendo as músicas que dominaram as paradas durante o ano."
    },
    archiveCount: 861,
  },
  {
    name: "Top 20 (Petra FM)",
    info: {
      name: "Top 20 (Petra FM)",
      description: "Lista das 20 músicas mais tocadas ou populares na rádio Petra FM, com um foco em hits do momento ou músicas mais solicitadas pelos ouvintes."
    },
    archiveCount: 120,
  },
  {
    name: "Top 20 (Pure Pop)",
    info: {
      name: "Top 20 (Pure Pop)",
      description: "Uma seleção das 20 faixas mais populares do gênero pop, possivelmente destacando as canções mais tocadas ou influentes desse estilo musical."
    },
    archiveCount: 74,
  },
  {
    name: "Acervo de Vídeos",
    info: {
      name: "Acervo de Vídeos",
      description: "Arquivo de vídeos variados, que podem incluir desde clipes musicais, gravações históricas até outros tipos de conteúdo visual de interesse geral."
    },
    archiveCount: 14,
  },
  {
    name: "Dicas Dr. Yano - Cardiologista",
    info: {
      name: "Dicas Dr. Yano - Cardiologista",
      description: "Coleção de áudios ou vídeos com orientações e dicas sobre saúde cardiovascular, fornecidas pelo Dr. Yano, um cardiologista especializado."
    },
    archiveCount: 36,
  },
  {
    name: "Giro de Notícias",
    info: {
      name: "Giro de Notícias",
      description: "Compilação de áudios ou vídeos que trazem um resumo das notícias mais relevantes, abordando eventos atuais e informações de interesse público."
    },
    archiveCount: 5,
  }
]

const FAKE_LIST_CATEGORY = [
  {
    name: "Gênero",
    icon: SaxSVG
  },
  {
    name: "Ritmo",
    icon: KeyboardMusicSVG
  },
  {
    name: "Classificação",
    icon: StarSVG
  },
  {
    name: "Idioma",
    icon: FlagSVG
  },
  {
    name: "Vocal",
    icon: MicSVG
  },
  {
    name: "Recentes",
    icon: PendingFileSVG
  },
  {
    name: "Artistas",
    icon: SingerSVG
  },
  {
    name: "Ano",
    icon: CalendarSVG
  },
  {
    name: "Album",
    icon: DiscSVG
  },
  {
    name: "Compositor",
    icon: GuitarSVG
  },
  {
    name: "Gravadora",
    icon: ClapperBoardSVG
  },
  {
    name: "Vinhetas",
    icon: MusicNoteSVG
  },
  {
    name: "Comerciais",
    icon: CommercialSVG
  },
  {
    name: "Textos",
    icon: TextSVG
  },
  {
    name: "Pastas",
    icon: FolderSVG
  }
]

export const Library = () => {

  return (
    <main className="flex-1 w-full py-5 space-y-4">
      {/* <LibraryBreadchumbs /> */}
      <div className="flex flex-col px-5 gap-0.5">
        <span className="text-xl font-semibold">Biblioteca</span>
        <span className="text-sm font-normal text-muted-foreground">Organize suas listas e arquivos de forma prática e eficiente</span>
      </div>
      <div className="grid grid-cols-1 gap-3 px-5 md:grid-cols-2 xl:grid-cols-4">
        <Card className="flex flex-col gap-3 p-3 bg-transparent rounded cursor-pointer border-muted-foreground/25 dark:hover:bg-muted/50 hover:bg-muted">
          <div className="flex flex-row justify-between w-full">
            <div className="flex items-center justify-center rounded bg-accent-foreground size-8">
              <ListPlus className="text-white dark:text-black size-5" />
            </div>
            <Plus size={16} />
          </div>
          <span className="text-sm font-medium">
            Criar lista
          </span>
        </Card>
        <Card className="flex flex-col gap-3 p-3 bg-transparent rounded cursor-pointer border-muted-foreground/25 dark:hover:bg-muted/50 hover:bg-muted">
          <div className="flex flex-row justify-between w-full">
            <div className="flex items-center justify-center rounded bg-accent-foreground size-8">
              <ListMusic className="text-white dark:text-black size-5" />
            </div>
            <Plus size={16} />
          </div>
          <span className="text-sm font-medium">
            Criar lista dinâmica
          </span>
        </Card>
        <Card className="flex flex-col gap-3 p-3 bg-transparent rounded cursor-pointer border-muted-foreground/25 dark:hover:bg-muted/50 hover:bg-muted">
          <div className="flex flex-row justify-between w-full">
            <div className="flex items-center justify-center rounded bg-accent-foreground size-8">
              <FolderUp className="text-white dark:text-black size-5" />
            </div>
            <Plus size={16} />
          </div>
          <span className="text-sm font-medium">
            Uploads recentes
          </span>
        </Card>
        <Card className="flex flex-col gap-3 p-3 bg-transparent rounded cursor-pointer border-muted-foreground/25 dark:hover:bg-muted/50 hover:bg-muted">
          <div className="flex flex-row justify-between w-full">
            <div className="flex items-center justify-center rounded bg-accent-foreground size-8">
              <FileClock className="text-white dark:text-black size-5" />
            </div>
            <Plus size={16} />
          </div>
          <span className="text-sm font-medium">
            Arquivos pendentes
          </span>
        </Card>
      </div>
      <div className="flex flex-col px-5">
        <span className="text-base font-medium">
          Categorias
        </span>
        <div className="grid grid-cols-1 gap-2 mt-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {FAKE_LIST_CATEGORY.map(({ name, icon }, index) => {
            return (
              <Card key={index} className="flex flex-row items-start gap-2 p-3 bg-transparent rounded cursor-pointer border-muted-foreground/25 dark:hover:bg-muted/50 hover:bg-muted">
                <div className="flex items-center justify-center rounded bg-accent-foreground/30 dark:bg-accent min-w-9 min-h-9">
                  <img src={icon} className="w-4 h-4" />
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex flex-row items-start justify-between">
                    <span className="text-[13px] font-medium">
                      {name}
                    </span>
                  </div>
                  <div className="flex flex-row items-center gap-0.5">
                    <span className="text-xs font-normal text-muted-foreground">{Math.floor(Math.random() * (20 - 0 + 1) + 0)} arquivos</span>
                  </div>
                </div>
              </Card>
            )
          })
          }
        </div>
      </div>
      <div className="flex flex-col gap-2 px-5">
        <span className="text-base font-semibold">Listas</span>
        <div className="grid grid-cols-4 gap-3">
          {
            FAKE_LIST_LIBRARY.map(({ name, info, archiveCount }) => {
              return (
                <Card className="flex flex-col items-center justify-start py-3 border rounded shadow-sm cursor-pointer h-60 bg-sidebar border-muted-foreground/25 hover:bg-sidebar-accent/80">
                  <div className="flex flex-row justify-between w-full px-3 pb-3 border-b border-muted-foreground/25">
                    <div className="flex flex-row items-center gap-x-1">
                      <ListMusic className="size-4" />
                      <span className="text-xs font-semibold">
                        {name}
                      </span>
                    </div>
                    <Button size={'icon'} className="size-4" variant={'ghost'}>
                      <MoreVertical />
                    </Button>
                  </div>
                  <div className="flex flex-col flex-1 w-full p-3 pt-5 gap-y-3">
                    <div className="flex flex-col gap-y-1">
                      <span className="text-xs font-semibold uppercase text-muted-foreground">Nome</span>
                      <span className="text-xs font-medium">{info.name}</span>
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <span className="text-xs font-semibold uppercase text-muted-foreground">Descrição</span>
                      <span className="text-xs font-normal">{info.description}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full px-3">
                    <Badge variant={'default'}>
                      {archiveCount} arquivos
                    </Badge>
                    <span className="text-xs font-medium text-muted-foreground">
                      Modificado a 2 semanas atrás
                    </span>
                  </div>
                </Card>
              )
            })
          }
        </div>
      </div>
    </main >
  )
}