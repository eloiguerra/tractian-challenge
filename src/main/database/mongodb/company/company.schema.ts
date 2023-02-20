import { Schema } from "mongoose";

import { UnitSchema } from "../unit";
import { config } from "../config";

import { CompanyModel } from "./company-model.struct";

export const CompanySchema = new Schema<CompanyModel>(
  {
    name: { type: String, required: true },
    units: [UnitSchema],
  },
  config,
);
