import { model } from "mongoose";
import { UnitModel } from "./unit-model.struct";
import { UnitSchema } from "./unit.schema";

export const unitModel = model<UnitModel>("Unit", UnitSchema);
