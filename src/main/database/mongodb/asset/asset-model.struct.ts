export type AssetStatus = "RUNNING" | "ALERTING" | "STOPPED";

export interface AssetModel {
  _id: string;
  name: string;
  description: string;
  model: string;
  owner: string;
  health: number;
  images: string[];
  status: AssetStatus;
  createdAt?: Date;
  updatedAt?: Date;
}
