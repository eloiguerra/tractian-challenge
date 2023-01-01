import { Schema } from "mongoose";
import { config } from "../config";
import { AssetModel } from "./asset-model.struct";

export const AssetSchema = new Schema<AssetModel>(
  {
    name: { type: String, required: true },
  },
  config,
);
