import { CreateAssetController } from "@modules/assets/controllers/create-asset.controller";
import { CreateAssetUseCase } from "@modules/assets/usecases/create-asset.usecase";
import { Controller } from "@shared/protocols";
import { AssetRepository } from "../repositories/asset.repository";

export const makeCreateAssetFactory = (): Controller => {
  const assetRepository = new AssetRepository();
  const createAssetUseCase = new CreateAssetUseCase(assetRepository);
  const createAssetController = new CreateAssetController(createAssetUseCase);

  return createAssetController;
};
