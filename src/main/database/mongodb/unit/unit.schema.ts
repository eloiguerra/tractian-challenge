import { Schema } from "mongoose";
import { AssetSchema } from "../asset";
import { config } from "../config";
import { UnitModel } from "./unit-model.struct";

export const UnitSchema = new Schema<UnitModel>(
  {
    name: { type: String, required: true },
    assets: [AssetSchema],
  },
  config,
);
