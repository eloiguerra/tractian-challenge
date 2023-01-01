import { model } from "mongoose";
import { UnitModel } from "./unit-model.struct";
import { UnitSchema } from "./unit.model";

export const unitModel = model<UnitModel>("Unit", UnitSchema);
