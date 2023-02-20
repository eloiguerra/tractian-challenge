import { CompanyModel } from "@main/database/mongodb/company";
import { CreationModel } from "@shared/protocols/creation-model";

export interface ICompanyRepository {
  create(company: CreationModel<CompanyModel>): Promise<CompanyModel>;
}
