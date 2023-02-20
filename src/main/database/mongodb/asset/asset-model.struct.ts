import { UploadProps } from "@shared/protocols/upload";
import { Types } from "mongoose";

export type AssetStatus = "RUNNING" | "ALERTING" | "STOPPED";

export interface AssetModel {
  _id: Types.ObjectId;
  name: string;
  description: string;
  model: string;
  owner: string;
  health: number;
  status: AssetStatus;
  images?: any; // Pick<UploadProps, "destination" | "filename">[];
  createdAt?: Date;
  updatedAt?: Date;
}
