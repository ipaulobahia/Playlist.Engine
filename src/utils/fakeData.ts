import { FilesTable } from '@/app/Library/Category/Archive/components/ArchiveTable/components/Columns';
import {
  CalendarSVG,
  ClapperBoardSVG,
  CommercialSVG,
  DiscSVG,
  FlagSVG,
  FolderSVG,
  GuitarSVG,
  KeyboardMusicSVG,
  MicSVG,
  MusicNoteSVG,
  PendingFileSVG,
  PlayButton,
  SaxSVG,
  SingerSVG,
  StarSVG,
  TextSVG
} from '@/assets/svg/categories';
import { faker } from '@faker-js/faker';

export const FAKE_DATA_TRACKRS = [
  {
    id: 1,
    name: "Carnaval é na Playlist",
    color: "#DC2626"
  },
  {
    id: 2,
    name: "Hora do Brasil",
    color: "#DB2777"
  },
  {
    id: 3,
    name: "Background",
    color: "#EA580C"
  },
  {
    id: 4,
    name: "Som de Passarinho",
    color: "#16A34A"
  }
]

export const FAKE_USERS_DATA = [
  { id: 1, avatar: 'https://github.com/shadcn.png', name: 'João', profile: 'Operador Padrão' },
  { id: 2, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80', name: 'Davi', profile: 'Locutor' },
  { id: 3, avatar: 'https://github.com/matheus.png', name: 'Matheus', profile: 'Adminitrador' },
  { id: 4, avatar: 'https://github.com/jorge.png', name: 'Jorge', profile: 'Locutor' },
  { id: 5, avatar: '', name: 'Luisa Fernanda', profile: 'Operador Padrão' },
  { id: 6, avatar: 'https://github.com/maria.png', name: 'Maria', profile: 'Operador Padrão' },
  { id: 7, avatar: '', name: 'Fernanda', profile: 'Operador Padrão' },
  { id: 8, avatar: '', name: 'Raquel', profile: 'Operador Padrão' },
];

export const FAKE_FOLDERS =
{
  count: 58,
  shared: {
    "count": 3,
    "folders": [
      {
        "name": "Users",
        "path": "C:\\Users"
      },
      {
        "name": "Pública",
        "path": "C:\\Users\\Thiago\\Documents\\Pública"
      },
      {
        "name": "PlaylistD",
        "path": "C:\\PlaylistD"
      }
    ]
  },
  folders: [
    {
      "folderId": 1,
      "folderName": "Acervo Musical Rede Aleluia",
      "type": 4,
      "target": "C:\\PlaylistD\\Musics\\Rede Aleluia\\Acervo Musical",
      "icon": "Icones5_dll_329.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "M",
      "lnkFile": "C:\\PlaylistD\\pgm\\Atalhos\\Acervo Musical Rede Aleluia.lnk"
    },
    {
      "folderId": 2,
      "folderName": "Bumpers",
      "type": 8,
      "target": "C:\\PlaylistD\\Bumpers",
      "icon": "",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "V",
      "lnkFile": "c:\\PlaylistD\\pgm\\SHORTCUTS\\Bumpers.lnk"
    },
    {
      "folderId": 3,
      "folderName": "Camera Off",
      "type": 16384,
      "target": "C:\\PlaylistD\\pgm",
      "icon": "Icones10_dll_311.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "C CAMERAOFF",
      "lnkFile": "c:\\PlaylistD\\pgm\\SHORTCUTS\\Camera Off.lnk"
    },
    {
      "folderId": 4,
      "folderName": "Camera ON",
      "type": 16384,
      "target": "C:\\PlaylistD\\pgm",
      "icon": "Icones10_dll_326.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "C CAMERAON",
      "lnkFile": "c:\\PlaylistD\\pgm\\SHORTCUTS\\Camera ON.lnk"
    },
    {
      "folderId": 5,
      "folderName": "Cena tttthiagoooo",
      "type": 16384,
      "target": "C:\\PlaylistD\\pgm",
      "icon": "Icones5_dll_3.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "C Scene:tttthiagoooo",
      "lnkFile": "C:\\PlaylistD\\pgm\\Atalhos\\Cena tttthiagoooo.lnk"
    },
    {
      "folderId": 6,
      "folderName": "Cliente",
      "type": 4,
      "target": "C:\\PlaylistD\\Musics\\Cliente",
      "icon": "Icones5_dll_5.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "M",
      "lnkFile": "c:\\PlaylistD\\pgm\\SHORTCUTS\\Cliente.lnk"
    },
    {
      "folderId": 7,
      "folderName": "Comando Diretão",
      "type": 16384,
      "target": "C:\\PlaylistD\\pgm",
      "icon": "Icones5_dll_3.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "C UDP 127.0.0.1:58370 {DIRETO}",
      "lnkFile": "C:\\PlaylistD\\pgm\\Atalhos\\Comando Diretão.lnk"
    },
    {
      "folderId": 8,
      "folderName": "Comando Dolar 2",
      "type": 16384,
      "target": "C:\\PlaylistD\\pgm",
      "icon": "Icones5_dll_2.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "C Scene: Dolar | Layer:3",
      "lnkFile": "C:\\PlaylistD\\pgm\\Atalhos\\Comando Dolar 2.lnk"
    },
    {
      "folderId": 9,
      "folderName": "Comando Fechar App",
      "type": 16384,
      "target": "C:\\PlaylistD\\pgm",
      "icon": "Icones5_dll_19.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "C UDP {FECHAR}",
      "lnkFile": "C:\\PlaylistD\\pgm\\SHORTCUTS\\Comando Fechar App.lnk"
    },
    {
      "folderId": 10,
      "folderName": "Comando IP Parar",
      "type": 16384,
      "target": "C:\\PlaylistD\\pgm",
      "icon": "Icones5_dll_1.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "C UDP {PARAR}",
      "lnkFile": "C:\\PlaylistD\\pgm\\Atalhos\\Comando IP Parar.lnk"
    },
    {
      "folderId": 11,
      "folderName": "Comando IP Tocar",
      "type": 16384,
      "target": "C:\\PlaylistD\\pgm",
      "icon": "Icones5_dll_1.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "C UDP {TOCAR}",
      "lnkFile": "C:\\PlaylistD\\pgm\\Atalhos\\Comando IP Tocar.lnk"
    },
    {
      "folderId": 12,
      "folderName": "Comando Journalism",
      "type": 16384,
      "target": "C:\\PlaylistD\\pgm",
      "icon": "Icones5_dll_2.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "C Scene: Journalism | Layer:3",
      "lnkFile": "C:\\PlaylistD\\pgm\\Atalhos\\Comando Journalism.lnk"
    },
    {
      "folderId": 13,
      "folderName": "Comando Parar Playlist",
      "type": 16384,
      "target": "C:\\PlaylistD\\pgm",
      "icon": "Icones5_dll_24.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "C {STOP}",
      "lnkFile": "C:\\PlaylistD\\pgm\\Atalhos\\Comando Parar Playlist.lnk"
    },
    {
      "folderId": 14,
      "folderName": "Comando Play",
      "type": 16384,
      "target": "C:\\PlaylistD\\pgm",
      "icon": "Icones_dll_28.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "C COM3: 0XD021",
      "lnkFile": "c:\\PlaylistD\\pgm\\SHORTCUTS\\Comando Play.lnk"
    },
    {
      "folderId": 15,
      "folderName": "Comando Play JSON",
      "type": 16384,
      "target": "C:\\PlaylistD\\pgm",
      "icon": "Icones5_dll_2.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "C UDP {PLAY} JSON",
      "lnkFile": "C:\\PlaylistD\\pgm\\Atalhos\\Comando Play JSON.lnk"
    },
    {
      "folderId": 16,
      "folderName": "Comando Porta Mapeada",
      "type": 16384,
      "target": "C:\\PlaylistD\\pgm",
      "icon": "Icones5_dll_1.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "C UDP playlist.ddns.com.br:9999 {INTERNET}",
      "lnkFile": "C:\\PlaylistD\\pgm\\Atalhos\\Comando Porta Mapeada.lnk"
    },
    {
      "folderId": 17,
      "folderName": "Comando Stop",
      "type": 16384,
      "target": "C:\\PlaylistD\\pgm",
      "icon": "ícones15_dll_9.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "C STOP",
      "lnkFile": "c:\\PlaylistD\\pgm\\SHORTCUTS\\Comando Stop.lnk"
    },
    {
      "folderId": 18,
      "folderName": "Comando Stop JSON",
      "type": 16384,
      "target": "C:\\PlaylistD\\pgm",
      "icon": "Icones5_dll_24.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "C UDP {STOP} JSON",
      "lnkFile": "C:\\PlaylistD\\pgm\\Atalhos\\Comando Stop JSON.lnk"
    },
    {
      "folderId": 19,
      "folderName": "Comerciais",
      "type": 2,
      "target": "C:\\PlaylistD\\Comerciais",
      "icon": "Icones5_dll_330.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "$",
      "lnkFile": "C:\\PlaylistD\\pgm\\Atalhos\\Comerciais.lnk"
    },
    {
      "folderId": 20,
      "folderName": "Commercial Videos",
      "type": 2,
      "target": "C:\\PlaylistD\\Commercial Videos",
      "icon": "Icones5_dll_303.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "$",
      "lnkFile": "C:\\PlaylistD\\pgm\\Atalhos\\Commercial Videos.lnk"
    },
    {
      "folderId": 21,
      "folderName": "Resume",
      "type": 16384,
      "target": "C:\\PlaylistD\\pgm",
      "icon": "Icones10_dll_335.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "C UDP {RESUME} JSON",
      "lnkFile": "C:\\PlaylistD\\pgm\\Atalhos\\Resume.lnk"
    },
    {
      "folderId": 22,
      "folderName": "Downloaded",
      "type": 4,
      "target": "C:\\PlaylistD\\Musics\\Downloaded",
      "icon": "folders_dll_7.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "M",
      "lnkFile": "c:\\PlaylistD\\pgm\\SHORTCUTS\\Downloaded.lnk"
    },
    {
      "folderId": 23,
      "folderName": "Exact Time",
      "type": 4096,
      "target": "C:\\PlaylistD\\HC\\English",
      "icon": "relogios_dll_3.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "H",
      "lnkFile": "c:\\PlaylistD\\pgm\\SHORTCUTS\\Exact Time.lnk"
    },
    {
      "folderId": 24,
      "folderName": "Geral",
      "type": 2,
      "target": "C:\\PlaylistD\\Geral",
      "icon": "Icones5_dll_4.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "$",
      "lnkFile": "C:\\PlaylistD\\pgm\\Atalhos\\Geral.lnk"
    },
    {
      "folderId": 25,
      "folderName": "HC F1",
      "type": 4096,
      "target": "C:\\PlaylistD\\HC\\Feminina",
      "icon": "Icones5_dll_86.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "H",
      "lnkFile": "C:\\PlaylistD\\pgm\\Atalhos\\HC F1.lnk"
    },
    {
      "folderId": 26,
      "folderName": "HC M1",
      "type": 4096,
      "target": "C:\\PlaylistD\\HC\\Masculina",
      "icon": "Icones5_dll_86.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "H",
      "lnkFile": "C:\\PlaylistD\\pgm\\Atalhos\\HC M1.lnk"
    },
    {
      "folderId": 27,
      "folderName": "HC M2",
      "type": 4096,
      "target": "C:\\PlaylistD\\HC\\Masculina 2",
      "icon": "Icones5_dll_86.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "H",
      "lnkFile": "C:\\PlaylistD\\pgm\\Atalhos\\HC M2.lnk"
    },
    {
      "folderId": 28,
      "folderName": "HC M3",
      "type": 4096,
      "target": "C:\\PlaylistD\\HC\\Masculina 3",
      "icon": "Icones5_dll_86.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "H",
      "lnkFile": "C:\\PlaylistD\\pgm\\Atalhos\\HC M3.lnk"
    },
    {
      "folderId": 29,
      "folderName": "HCC Feminina",
      "type": 4096,
      "target": "C:\\PlaylistD\\HC\\Concatenada Feminina",
      "icon": "Icones_dll_86.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "H",
      "lnkFile": "C:\\PlaylistD\\pgm\\Atalhos\\HCC Feminina.lnk"
    },
    {
      "folderId": 30,
      "folderName": "Horário Politico",
      "type": 2,
      "target": "C:\\PlaylistD\\Horário Politico",
      "icon": "Icones5_dll_7.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "$",
      "lnkFile": "C:\\PlaylistD\\pgm\\Atalhos\\Horário Politico.lnk"
    },
    {
      "folderId": 31,
      "folderName": "Institutional audios",
      "type": 1,
      "target": "C:\\PlaylistD\\Institutional audios",
      "icon": "icones6_dll_0.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "",
      "lnkFile": "c:\\PlaylistD\\pgm\\SHORTCUTS\\Institutional audios.lnk"
    },
    {
      "folderId": 32,
      "folderName": "Jingles",
      "type": 1,
      "target": "C:\\PlaylistD\\Jingles",
      "icon": "icones6_dll_1.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "",
      "lnkFile": "c:\\PlaylistD\\pgm\\SHORTCUTS\\Jingles.lnk"
    },
    {
      "folderId": 33,
      "folderName": "Jornalismo",
      "type": 256,
      "target": "C:\\PlaylistD\\Jornalismo",
      "icon": "Icones5_dll_4.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "X",
      "lnkFile": "C:\\PlaylistD\\pgm\\Atalhos\\Jornalismo.lnk"
    },
    {
      "folderId": 34,
      "folderName": "Nacionais",
      "type": 4,
      "target": "C:\\PlaylistD\\Musics\\Nacionais",
      "icon": "icones6_dll_93.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "M",
      "lnkFile": "c:\\PlaylistD\\pgm\\SHORTCUTS\\Nacionais.lnk"
    },
    {
      "folderId": 35,
      "folderName": "News",
      "type": 1,
      "target": "C:\\PlaylistD\\News",
      "icon": "icones6_dll_66.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "",
      "lnkFile": "c:\\PlaylistD\\pgm\\SHORTCUTS\\News.lnk"
    },
    {
      "folderId": 36,
      "folderName": "Overlay Dollar",
      "type": 16384,
      "target": "C:\\PlaylistD\\pgm",
      "icon": "Icones10_dll_361.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "C Scene:Dolar | Layer:4 | Time:10",
      "lnkFile": "C:\\PlaylistD\\pgm\\Atalhos\\Overlay Dollar.lnk"
    },
    {
      "folderId": 37,
      "folderName": "Overlay Futebol",
      "type": 16384,
      "target": "C:\\PlaylistD\\pgm",
      "icon": "Icones5_dll_390.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "C Scene:Futebol | Layer:4 | Time:10",
      "lnkFile": "C:\\PlaylistD\\pgm\\Atalhos\\Overlay Futebol.lnk"
    },
    {
      "folderId": 38,
      "folderName": "Overlay Notícias",
      "type": 16384,
      "target": "C:\\PlaylistD\\pgm",
      "icon": "Icones5_dll_148.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "C Scene:Notícias | Layer: 4 | Time: 10",
      "lnkFile": "C:\\PlaylistD\\pgm\\Atalhos\\Overlay Notícias.lnk"
    },
    {
      "folderId": 39,
      "folderName": "Pausa",
      "type": 64,
      "target": "C:\\PlaylistD\\pgm",
      "icon": "Icones5_dll_393.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "P",
      "lnkFile": "c:\\PlaylistD\\pgm\\SHORTCUTS\\Pausa.lnk"
    },
    {
      "folderId": 40,
      "folderName": "Pausa 2",
      "type": 64,
      "target": "C:\\PlaylistD\\pgm",
      "icon": "Icones5_dll_395.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "P",
      "lnkFile": "C:\\PlaylistD\\pgm\\Atalhos\\Pausa 2.lnk"
    },
    {
      "folderId": 41,
      "folderName": "Play UDP",
      "type": 16384,
      "target": "C:\\PlaylistD\\pgm",
      "icon": "icones6_dll_188.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "C UDP {PLAY}",
      "lnkFile": "C:\\PlaylistD\\pgm\\Atalhos\\Play UDP.lnk"
    },
    {
      "folderId": 42,
      "folderName": "PlayStation",
      "type": 16384,
      "target": "C:\\PlaylistD\\pgm",
      "icon": "Icones_dll_23.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "C {PLAYSTATION}",
      "lnkFile": "c:\\PlaylistD\\pgm\\SHORTCUTS\\PlayStation.lnk"
    },
    {
      "folderId": 43,
      "folderName": "Pop",
      "type": 4,
      "target": "C:\\PlaylistD\\Musics\\Pop",
      "icon": "icones6_dll_2.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "M",
      "lnkFile": "c:\\PlaylistD\\pgm\\SHORTCUTS\\Pop.lnk"
    },
    {
      "folderId": 44,
      "folderName": "Pop Seq",
      "type": 1024,
      "target": "C:\\PlaylistD\\Musics\\Pop",
      "icon": "folders_dll_6.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "S",
      "lnkFile": "c:\\PlaylistD\\pgm\\SHORTCUTS\\Pop Seq.lnk"
    },
    {
      "folderId": 45,
      "folderName": "R&B",
      "type": 4,
      "target": "C:\\PlaylistD\\Musics\\R&B",
      "icon": "icones6_dll_4.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "M",
      "lnkFile": "c:\\PlaylistD\\pgm\\SHORTCUTS\\R&B.lnk"
    },
    {
      "folderId": 46,
      "folderName": "Reggae",
      "type": 4,
      "target": "C:\\PlaylistD\\Musics\\Reggae",
      "icon": "Icones5_dll_347.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "M",
      "lnkFile": "c:\\PlaylistD\\pgm\\SHORTCUTS\\Reggae.lnk"
    },
    {
      "folderId": 47,
      "folderName": "Remove Overlays",
      "type": 16384,
      "target": "C:\\PlaylistD\\pgm",
      "icon": "Icones5_dll_24.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "C Scene:RemoveAllOverlays",
      "lnkFile": "C:\\PlaylistD\\pgm\\Atalhos\\Remove Overlays.lnk"
    },
    {
      "folderId": 48,
      "folderName": "Rock",
      "type": 4,
      "target": "C:\\PlaylistD\\Musics\\Rock",
      "icon": "instrumentos_dll_3.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "M",
      "lnkFile": "c:\\PlaylistD\\pgm\\SHORTCUTS\\Rock.lnk"
    },
    {
      "folderId": 49,
      "folderName": "Seals",
      "type": 8,
      "target": "C:\\PlaylistD\\SEALS",
      "icon": "icones6_dll_42.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "V",
      "lnkFile": "c:\\PlaylistD\\pgm\\SHORTCUTS\\Seals.lnk"
    },
    {
      "folderId": 50,
      "folderName": "Skip",
      "type": 16384,
      "target": "C:\\PlaylistD\\pgm",
      "icon": "Icones10_dll_323.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "C UDP {SKIP} JSON",
      "lnkFile": "C:\\PlaylistD\\pgm\\Atalhos\\Skip.lnk"
    },
    {
      "folderId": 51,
      "folderName": "Sweeper Videos",
      "type": 8,
      "target": "C:\\PlaylistD\\Sweeper Videos",
      "icon": "Icones5_dll_356.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "V",
      "lnkFile": "C:\\PlaylistD\\pgm\\Atalhos\\Sweeper Videos.lnk"
    },
    {
      "folderId": 52,
      "folderName": "Sweppers",
      "type": 8,
      "target": "C:\\PlaylistD\\SWEEPERS",
      "icon": "ícones12_dll_75.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "V",
      "lnkFile": "c:\\PlaylistD\\pgm\\SHORTCUTS\\Sweppers.lnk"
    },
    {
      "folderId": 53,
      "folderName": "Texts",
      "type": 256,
      "target": "C:\\PlaylistD\\TEXTS",
      "icon": "Icones_dll_6.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "X",
      "lnkFile": "c:\\PlaylistD\\pgm\\SHORTCUTS\\Texts.lnk"
    },
    {
      "folderId": 54,
      "folderName": "Tracks",
      "type": 128,
      "target": "C:\\PlaylistD\\TRACKS",
      "icon": "icones6_dll_31.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "T",
      "lnkFile": "c:\\PlaylistD\\pgm\\SHORTCUTS\\Tracks.lnk"
    },
    {
      "folderId": 55,
      "folderName": "Video Clipes",
      "type": 4,
      "target": "C:\\PlaylistD\\Musics\\Video Clipes",
      "icon": "icones6_dll_209.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "M",
      "lnkFile": "c:\\PlaylistD\\pgm\\SHORTCUTS\\Video Clipes.lnk"
    },
    {
      "folderId": 56,
      "folderName": "Videos Emir",
      "type": 4,
      "target": "C:\\PlaylistD\\Musics\\Videos Emir",
      "icon": "folders_dll_4.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "M",
      "lnkFile": "c:\\PlaylistD\\pgm\\SHORTCUTS\\Videos Emir.lnk"
    },
    {
      "folderId": 57,
      "folderName": "Virar Geradora",
      "type": 16384,
      "target": "C:\\PlaylistD\\pgm",
      "icon": "Icones5_dll_83.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "C UDP {SETBROADCASTER} JSON",
      "lnkFile": "C:\\PlaylistD\\pgm\\Atalhos\\Virar Geradora.lnk"
    },
    {
      "folderId": 58,
      "folderName": "Voice Track",
      "type": 32,
      "target": "C:\\PlaylistD\\Voice Track",
      "icon": "icones6_dll_187.png",
      "hidden": false,
      "autoClose": true,
      "iconOnGrid": true,
      "args": "L",
      "lnkFile": "c:\\PlaylistD\\pgm\\SHORTCUTS\\Voice Track.lnk"
    }
  ]
}

export const FAKE_CONFIG_PROFILE: ProfileConfig = [
  {
    id: 1,
    name: "Geral",
    description: "[Descrição]",
    options: [
      {
        id: 1,
        name: "Personalizar fontes e cores",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 2,
        name: "Modo dark",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 3,
        name: "Relógio AM/PM",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 4,
        name: "Barra de espaço passa para a próxima inserção",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 5,
        name: "Trava painéis",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 6,
        name: "Bloqueia/desbloqueia blocos",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 7,
        name: "Adiciona inserções",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 8,
        name: "Remover inserções",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 9,
        name: "Move inserções",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 10,
        name: "Salvar edição de blocos",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 11,
        name: "Visualizar as pastas",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 12,
        name: "Toca inserções diretamente das pastas",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 13,
        name: "Edita os arquivos de áudio (Marcadores)",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 14,
        name: "Edita informações do áudio",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 15,
        name: "Converte nomes de arquivos para maiúsculas",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 15,
        name: "Usar carimbos de hora-certa e temperatura",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      }
    ]
  },
  {
    id: 2,
    name: "Edição",
    description: "[Descrição]",
    options: [
      {
        id: 1,
        name: "Inserir com um só clique",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 2,
        name: "Abrir pastas com um só clique",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 3,
        name: "Inserir antes do item selecionado",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
    ]
  },
  {
    id: 3,
    name: "QuickStart",
    description: "[Descrição]",
    options: [
      {
        id: 1,
        name: "Usa QuickStart",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 2,
        name: "Usa QuickStart via rede",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 3,
        name: "Executar QuickStart via rede",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 4,
        name: "Comprovar QuickStart via rede",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 5,
        name: "Criar QuickStart",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 5,
        name: "Painéis QuickStart individuais",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
    ]
  },
  {
    id: 4,
    name: "Mudança de blocos",
    description: "[Descrição]",
    options: [
      {
        id: 1,
        name: "Sempre pausar a execução ao final de um bloco",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 2,
        name: "Para em blocos vazios",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 3,
        name: "Se parado, exibir o próximo bloco automaticamente no horário",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 4,
        name: "Ignorar todas as trilhas e pausas",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      }
    ]
  },
  {
    id: 5,
    name: "Bloco comercial",
    description: "[Descrição]",
    options: [
      {
        id: 1,
        name: "Adiciona inserções",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 2,
        name: "Aceita músicas",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 3,
        name: "Remove inserções",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 4,
        name: "Move inserções",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 5,
        name: "Descarta inserções",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 6,
        name: "Remove inserções",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
    ]
  },
  {
    id: 6,
    name: "Bloco musical",
    description: "[Descrição]",
    options: [
      {
        id: 1,
        name: "Adiciona inserções",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 2,
        name: "Aceita músicas",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 3,
        name: "Remove inserções",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 4,
        name: "Move inserções",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 5,
        name: "Descarta inserções",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 6,
        name: "Remove inserções",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
    ]
  },
  {
    id: 7,
    name: "Comercial",
    description: "[Descrição]",
    options: [
      {
        id: 1,
        name: "Adiciona inserções",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 2,
        name: "Aceita músicas",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 3,
        name: "Remove inserções",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 4,
        name: "Move inserções",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 5,
        name: "Descarta inserções",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 6,
        name: "Remove inserções",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
    ]
  },
  {
    id: 8,
    name: "Músicas",
    description: "[Descrição]",
    options: [
      {
        id: 1,
        name: "Adiciona inserções",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 2,
        name: "Aceita músicas",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 3,
        name: "Remove inserções",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 4,
        name: "Move inserções",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 5,
        name: "Descarta inserções",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 6,
        name: "Remove inserções",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
    ]
  },
  {
    id: 9,
    name: "Vinhetas",
    description: "[Descrição]",
    options: [
      {
        id: 1,
        name: "Adiciona inserções",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 2,
        name: "Aceita músicas",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 3,
        name: "Remove inserções",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 4,
        name: "Move inserções",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 5,
        name: "Descarta inserções",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 6,
        name: "Remove inserções",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
    ]
  },
  {
    id: 10,
    name: "Inserções genéricas",
    description: "[Descrição]",
    options: [
      {
        id: 1,
        name: "Adiciona inserções",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 2,
        name: "Aceita músicas",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 3,
        name: "Remove inserções",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 4,
        name: "Move inserções",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 5,
        name: "Descarta inserções",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 6,
        name: "Remove inserções",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
    ]
  },
  {
    id: 11,
    name: "Pausas",
    description: "[Descrição]",
    options: [
      {
        id: 1,
        name: "Adiciona pausas",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 2,
        name: "Tempo máximo (segundos)",
        description: "[Descrição]",
        isChecked: false,
        active: false,
        inputValue: ""
      },
    ]
  },
  {
    id: 12,
    name: "Permitir exibir o painel",
    description: "[Descrição]",
    options: [
      {
        id: 1,
        name: "Progamação",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 2,
        name: "Display",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 3,
        name: "Tempo ao vivo",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 4,
        name: "Anotação",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 5,
        name: "Texto do dia",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 6,
        name: "Hoje",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 7,
        name: "Pasta",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 8,
        name: "Propriedades",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 9,
        name: "Mini-navegador",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 10,
        name: "Aparência",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 11,
        name: "Camera Controller",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
      {
        id: 12,
        name: "RSS",
        description: "[Descrição]",
        isChecked: true,
        active: false,
        inputValue: ""
      },
    ]
  },
  {
    id: 13,
    name: "Pastas",
    description: "[Descrição]",
    options: []
  }
]

export const FAKE_CONFIG_PREFERENCE: PreferenceConfig = [
  {
    id: 1,
    name: "Playlist Server",
    description: "",
    path: "playlist-server",
    options: {
      id: 1,
      name: "",
      description: "",
      status: false,
      value: "",
      type: "Input",
      isActive: true
    }
  },
  {
    id: 2,
    name: "Avançado",
    description: "",
    path: "advanced",
    options: {
      id: 1,
      name: "",
      description: "",
      status: false,
      value: "",
      type: "Input",
      isActive: true
    }
  },
  {
    id: 3,
    name: "Station Office",
    description: "",
    path: "station-office",
    options: {
      id: 1,
      name: "",
      description: "",
      status: false,
      value: "",
      type: "Input",
      isActive: true
    }
  },
  {
    id: 4,
    name: "Saídas",
    description: "",
    path: "outputs",
    options: {
      id: 1,
      name: "",
      description: "",
      status: false,
      value: "",
      type: "Input",
      isActive: true
    }
  },
  {
    id: 5,
    name: "Entrada de áudio",
    description: "",
    path: "audio-source",
    options: {
      id: 1,
      name: "",
      description: "",
      status: false,
      value: "",
      type: "Input",
      isActive: true
    }
  },
  {
    id: 6,
    name: "Disparo Remoto",
    description: "",
    path: "remote-triggering",
    options: {
      id: 1,
      name: "",
      description: "",
      status: false,
      value: "",
      type: "Input",
      isActive: true
    }
  },
  {
    id: 7,
    name: "Afiliada de rede",
    description: "",
    path: "control-satellite",
    options: {
      id: 1,
      name: "",
      description: "",
      status: false,
      value: "",
      type: "Input",
      isActive: true
    }
  },
  {
    id: 8,
    name: "XML para Web",
    description: "",
    path: "xml-web",
    options: {
      id: 1,
      name: "",
      description: "",
      status: false,
      value: "",
      type: "Input",
      isActive: true
    }
  },
  {
    id: 9,
    name: "RDS e RSS",
    description: "",
    path: "rds-rss",
    options: {
      id: 1,
      name: "",
      description: "",
      status: false,
      value: "",
      type: "Input",
      isActive: true
    }
  },
  {
    id: 10,
    name: "Metadata para streaming",
    description: "",
    path: "metadata-streaming",
    options: {
      id: 1,
      name: "",
      description: "",
      status: false,
      value: "",
      type: "Input",
      isActive: true
    }
  },
  {
    id: 11,
    name: "Diversos",
    description: "",
    path: "general",
    options: {
      id: 1,
      name: "",
      description: "",
      status: false,
      value: "",
      type: "Input",
      isActive: true
    }
  }
]

export const FAKE_DATA_ARCHIVE: FilesTable[] = [];

export const FAKE_DATA_ALL_FILES_TALBE: FilesTable[] = [];

function generateItem(id: number) {
  const fileType = faker.helpers.arrayElement(['.mp3', '.mp4', '.txt'])
  return {
    id: id.toString(),
    file: {
      name: faker.system.fileName().split(".")[0] + fileType,
      size: faker.number.int({ min: 1, max: 100 }) + 'KB',
      type: fileType,
    },
    folder: faker.helpers.arrayElement(["Acervo Musical Rede Aleluia", "Banda e Cantores Gospel", "Coleção Rock Clássico", "Documentos e Registros", "Fotos do Evento 2024", "Vídeos do Projeto 2023", "Diversos Arquivos", "Arquivos de Áudio", "Acervo de Discos Vinil", "Master de Gravações", "Projetos em Andamento", "Material Promocional"]),
    status: faker.helpers.arrayElement(["0", "1", "2"]),
    duration: faker.date.anytime().getSeconds().toFixed(0) + ' min',
    uploadedBy: faker.person.fullName(),
    lastModified: faker.date.past(),
  };
}

export const FAKE_LIST_LIBRARY = [
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

export const FAKE_LIST_CATEGORY = [
  {
    id: 1,
    name: "Lista",
    value: "List",
    icon: PlayButton
  },
  {
    id: 1,
    name: "Recentes",
    value: "Dynamic",
    icon: PendingFileSVG
  },
  {
    id: 2,
    name: "Gênero",
    value: "Genre",
    icon: SaxSVG
  },
  {
    id: 3,
    name: "Ritmo",
    value: "Rhythm",
    icon: KeyboardMusicSVG
  },
  {
    id: 4,
    name: "Classificação",
    value: "Concept",
    icon: StarSVG
  },
  {
    id: 5,
    name: "Idioma",
    value: "Language",
    icon: FlagSVG
  },
  {
    id: 6,
    name: "Vocal",
    value: "Vocal",
    icon: MicSVG
  }
]

export const FAKE_LIST_OTHER_CATEGORIES = [
  {
    id: 0,
    name: "Artistas",
    value: "Artist",
    icon: SingerSVG
  },
  {
    id: 1,
    name: "Ano",
    value: "Year",
    icon: CalendarSVG
  },
  {
    id: 2,
    name: "Album",
    value: "Album",
    icon: DiscSVG
  },
  {
    id: 3,
    name: "Compositor",
    value: "Composer",
    icon: GuitarSVG
  },
  {
    id: 4,
    name: "Gravadora",
    value: "Publisher",
    icon: ClapperBoardSVG
  },
  {
    id: 5,
    name: "Vinhetas",
    value: "",
    icon: MusicNoteSVG
  },
  {
    id: 6,
    name: "Comerciais",
    value: "",
    icon: CommercialSVG
  },
  {
    id: 7,
    name: "Textos",
    value: "",
    icon: TextSVG
  },
  {
    id: 8,
    name: "Pastas",
    value: "Folder",
    icon: FolderSVG
  }
]

for (let i = 1; i <= 200; i++) {
  FAKE_DATA_ARCHIVE.push(generateItem(i))
}

for (let i = 1; i <= 25; i++) {
  FAKE_DATA_ALL_FILES_TALBE.push(generateItem(i))
}