import { Schema } from "mongoose";
import { config } from "../config";
import { CompanieModel } from "./companie-model.struct";

export const CompanieSchema = new Schema<CompanieModel>(
  {
    name: { type: String, required: true },
    units: [{ type: Schema.Types.ObjectId, ref: "Unit" }],
  },
  config,
);
