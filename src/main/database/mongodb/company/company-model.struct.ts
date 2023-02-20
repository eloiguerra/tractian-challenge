import { UnitModel } from "../unit";

export interface CompanyModel {
  _id: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
  units?: UnitModel[];
}
