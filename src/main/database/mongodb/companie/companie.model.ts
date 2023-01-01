import { model } from "mongoose";
import { CompanieModel } from "./companie-model.struct";
import { CompanieSchema } from "./companie.schema";

export const companieModel = model<CompanieModel>("Companie", CompanieSchema);
