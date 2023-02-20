import { UploadProps } from "@shared/protocols/upload";

export type AssetStatus = "RUNNING" | "ALERTING" | "STOPPED";

export interface AssetModel {
  _id: string;
  name: string;
  description: string;
  model: string;
  owner: string;
  health: number;
  status: AssetStatus;
  images?: Pick<UploadProps, "destination" | "filename">[];
  createdAt?: Date;
  updatedAt?: Date;
}
