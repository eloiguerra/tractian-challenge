import { CompanieModel } from "@main/database/mongodb/companie";
import { CreationModel } from "@shared/protocols/creation-model";

export interface ICompanieRepository {
  create(companie: CreationModel<CompanieModel>): Promise<CompanieModel>;
}
