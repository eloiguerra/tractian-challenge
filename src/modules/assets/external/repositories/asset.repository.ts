import { IAssetRepository } from "@modules/assets/usecases/ports/repositories/asset-repository.struct";
import { assetModel, AssetModel } from "@main/database/mongodb/asset";
import { CreationModel } from "@shared/protocols/creation-model";

export class AssetRepository implements IAssetRepository {
  private assetModel = assetModel;

  async create(asset: CreationModel<AssetModel>): Promise<AssetModel> {
    const newAsset = await this.assetModel.create(asset);

    return newAsset;
  }
}
