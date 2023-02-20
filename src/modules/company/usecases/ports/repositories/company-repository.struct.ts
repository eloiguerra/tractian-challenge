import { AssetModel } from "@main/database/mongodb/asset";
import { CompanyModel } from "@main/database/mongodb/company";
import { CreationModel } from "@shared/protocols/creation-model";

export interface CreateAssetParams {
  companyId: string;
  unitId: string;
  asset: AssetModel | CreationModel<AssetModel>;
}

export interface ICompanyRepository {
  create(company: CreationModel<CompanyModel>): Promise<CompanyModel>;
  findById(id: string): Promise<CompanyModel>;
  createAsset({ companyId, unitId, asset }: CreateAssetParams): Promise<void>;
}
