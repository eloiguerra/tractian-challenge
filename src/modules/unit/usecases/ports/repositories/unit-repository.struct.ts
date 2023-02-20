import { UnitModel } from "@main/database/mongodb/unit";
import { CreationModel } from "@shared/protocols/creation-model";

export interface IUnitRepository {
  create(unit: CreationModel<UnitModel>): Promise<UnitModel>;
}
