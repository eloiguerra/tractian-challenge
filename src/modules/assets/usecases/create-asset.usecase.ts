import { AssetModel } from "@main/database/mongodb/asset";
import { Result } from "@shared/protocols";
import {
  CreateAssetUseCaseParams,
  ICreateAssetUseCase,
} from "./ports/create-asset-usecase.struct";
import { IAssetRepository } from "./ports/repositories/asset-repository.struct";

export class CreateAssetUseCase implements ICreateAssetUseCase {
  constructor(private readonly assetRepository: IAssetRepository) {}

  async execute(params: CreateAssetUseCaseParams): Promise<Result<AssetModel>> {
    const newAsset = await this.assetRepository.create(params);

    return Result.ok(newAsset);
  }
}
