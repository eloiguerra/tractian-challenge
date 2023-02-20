import { Schema } from "mongoose";
import { UploadModel } from "./upload-model.struct";

export const UploadSchema = new Schema<UploadModel>({
  destination: { type: String, required: true },
  filename: { type: String, required: true },
});
