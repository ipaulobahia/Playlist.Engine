export const profileColors = [
  { label: 'Cinza', value: '#6B7280', bg: 'bg-gray-500' },
  { label: 'Vermelho', value: '#EF4444', bg: 'bg-red-500' },
  { label: 'Azul', value: '#3B82F6', bg: 'bg-blue-500' },
  { label: 'Laranja', value: '#F97316', bg: 'bg-orange-500' },
  { label: 'Amarelo', value: '#EAB308', bg: 'bg-yellow-500' },
  { label: 'Roxo', value: '#A855F7', bg: 'bg-purple-500' },
  { label: 'Verde', value: '#22C55E', bg: 'bg-green-500' },
  { label: 'Rosa', value: '#F43F5E', bg: 'bg-rose-500' },
];

export enum CategoryEnum {
  Genre = "Genre",
  Artist = "Artist",
  Composer = "Composer",
  Publisher = "Publisher",
  Album = "Album",
  Rhythm = "Rhythm",
  Language = "Language",
  Year = "Year",
  Folder = "Folder",
  Concept = "Concept",
  Vocal = "Vocal",
  List = "List",
  Generic = "Generic",
  Dynamic = "Dynamic",
}

export const CategoryTranslations: Record<CategoryEnum, string> = {
  [CategoryEnum.Genre]: "Gênero",
  [CategoryEnum.Artist]: "Artista",
  [CategoryEnum.Composer]: "Compositor",
  [CategoryEnum.Publisher]: "Gravadora",
  [CategoryEnum.Album]: "Álbum",
  [CategoryEnum.Rhythm]: "Ritmo",
  [CategoryEnum.Language]: "Idioma",
  [CategoryEnum.Year]: "Ano",
  [CategoryEnum.Folder]: "Pasta",
  [CategoryEnum.Concept]: "Classificação",
  [CategoryEnum.Vocal]: "Vocal",
  [CategoryEnum.List]: "Lista",
  [CategoryEnum.Generic]: "Genérico",
  [CategoryEnum.Dynamic]: "Dinâmico"
};

export const translateToPT = (category: CategoryEnum): string => CategoryTranslations[category] || category;

export const translateToEN = (ptName: string): CategoryEnum | undefined => {
  return (Object.entries(CategoryTranslations) as [CategoryEnum, string][])
    .find(([_, value]) => value === ptName)?.[0];
};

export const CategoryIndexList = Object.values(CategoryTranslations);