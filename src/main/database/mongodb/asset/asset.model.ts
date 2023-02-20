import { model } from "mongoose";
import { AssetModel } from "./asset-model.struct";
import { AssetSchema } from "./asset.schema";

export const assetModel = model<AssetModel>("Asset", AssetSchema);
