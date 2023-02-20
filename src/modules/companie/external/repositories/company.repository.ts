import { CompanyModel, companyModel } from "@main/database/mongodb/company";
import { ICompanyRepository } from "@modules/companie/usecases/ports/repositories/company-repository.struct";
import { CreationModel } from "@shared/protocols/creation-model";

export class CompanyRepository implements ICompanyRepository {
  private companyModel = companyModel;

  async create(company: CreationModel<CompanyModel>): Promise<CompanyModel> {
    const newCompany = await this.companyModel.create({
      name: company.name,
      units: company.units,
    });

    return newCompany;
  }
}
