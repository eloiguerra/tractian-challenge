import { CompanyModel, companyModel } from "@main/database/mongodb/company";
import {
  CreateAssetParams,
  ICompanyRepository,
} from "@modules/company/usecases/ports/repositories/company-repository.struct";
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

  async findById(id: string): Promise<CompanyModel> {
    const company = await this.companyModel.findOne({ _id: id });

    return company;
  }

  async createAsset({
    asset,
    companyId,
    unitId,
  }: CreateAssetParams): Promise<void> {
    const teste = await this.companyModel.findOneAndUpdate(
      {
        _id: companyId,
        $and: [{ units: { $elemMatch: { _id: unitId } } }],
      },
      { $push: { "units.$.assets": asset } },
    );
  }
}
