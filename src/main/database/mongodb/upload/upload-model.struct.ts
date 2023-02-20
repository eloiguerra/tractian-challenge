import { UploadProps } from "@shared/protocols/upload";

export type UploadModel = Pick<UploadProps, "destination" | "filename">;
