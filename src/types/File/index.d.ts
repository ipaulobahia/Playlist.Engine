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
