import { AssetModel } from "@main/database/mongodb/asset";
import { ICompanyRepository } from "@modules/company/usecases/ports/repositories/company-repository.struct";
import { Result } from "@shared/protocols";
import {
  CreateAssetUseCaseParams,
  ICreateAssetUseCase,
} from "./ports/create-asset-usecase.struct";

export class CreateAssetUseCase implements ICreateAssetUseCase {
  constructor(private readonly companyRepository: ICompanyRepository) {}

  async execute({
    companyId,
    unitId,
    asset,
  }: CreateAssetUseCaseParams): Promise<Result<AssetModel>> {
    const newAsset = await this.companyRepository.createAsset({
      companyId,
      unitId,
      asset,
    });

    // return Result.ok(newAsset);
    return Result.ok(null);
  }
}
