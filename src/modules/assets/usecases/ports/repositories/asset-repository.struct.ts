import { AssetModel } from "@main/database/mongodb/asset/asset-model.struct";
import { CreationModel } from "@shared/protocols/creation-model";

export interface IAssetRepository {
  create(user: CreationModel<AssetModel>): Promise<AssetModel>;
}
