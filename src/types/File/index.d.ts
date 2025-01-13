interface IFile {
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

interface GetFileResponse extends IFile { }

interface IFiles {
  count: number;
  folder: {
    id: number;
    folderName: string;
    folderIcon: string
  }
  files: IFile[];
}

interface GetFilesResponse extends IFiles { }
