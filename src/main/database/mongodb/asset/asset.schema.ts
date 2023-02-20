import { Schema } from "mongoose";

import { AssetModel } from "./asset-model.struct";

import { config } from "../config";
import { UploadSchema } from "../upload/upload.schema";

export const AssetSchema = new Schema<AssetModel>(
  {
    name: { type: String, required: true },
    model: { type: String, required: true },
    owner: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, required: true },
    health: { type: Number, required: true },
    images: [UploadSchema],
  },
  config,
);
