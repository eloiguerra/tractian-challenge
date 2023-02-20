export interface UploadProps {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
}

export type Upload = UploadProps[] | { [fieldname: string]: UploadProps[] };
