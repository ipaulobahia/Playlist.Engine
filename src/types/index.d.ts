interface File {
  fileId: string,
  folderId: number,
  title: string,
  filename: string,
  modifiedDate: string,
  fileFormat: string,
  mimeType: string,
  createdDate: string,
  size: number,
  duration: number,
  fileType: number,
  uploadStatus: number
}

interface GetFileResponse extends File { }

interface Files {
  count: number;
  folder: {
    id: number;
    folderName: string;
    folderIcon: string
  }
  files: File[];
}

interface GetFilesResponse extends Files { }

type ProfileConfig = {
  id: number;
  name: string;
  description: string;
  options: {
    id: number;
    name: string;
    description: string;
    isChecked: boolean;
    active: boolean;
    inputValue: string;
  }[];
}[]

type PreferenceConfig = {
  id: number;
  name: string;
  description: string;
  path: string;
  options: {
    id: number;
    name: string;
    description: string;
    status: boolean;
    value: string;
    type: "Input" | "Switch";
    isActive: boolean;
  };
}[]

type FileInfo = {
  id: string;
  name: string;
  duration?: string | null;
  type: string
  size: string;
  band?: string;
  lastModified: number;
  title?: string | null;
  artist?: string | null;
  album?: string | null;
  year?: string | null;
  genre?: string | null;
  publisher?: string;
  "recording-time"?: string
  picture?: {
    mime: string;
    type: string;
    description: string;
    data: Uint8Array;
  };
}