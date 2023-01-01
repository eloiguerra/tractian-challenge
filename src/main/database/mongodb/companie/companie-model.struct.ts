import { UnitModel } from "../unit";

export interface CompanieModel {
  _id: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
  units?: UnitModel[];
}
