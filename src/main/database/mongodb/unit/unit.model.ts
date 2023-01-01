import { Schema } from "mongoose";
import { config } from "../config";
import { UnitModel } from "./unit-model.struct";

export const UnitSchema = new Schema<UnitModel>(
  {
    name: { type: String, required: true },
  },
  config,
);
