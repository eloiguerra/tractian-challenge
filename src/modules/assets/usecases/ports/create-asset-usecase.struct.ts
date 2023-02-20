import { AssetModel } from "@main/database/mongodb/asset";
import { CreationModel } from "@shared/protocols/creation-model";
import { UseCase } from "@shared/protocols/usecase";

export type CreateAssetUseCaseParams = CreationModel<AssetModel>;

export type ICreateAssetUseCase = UseCase<CreateAssetUseCaseParams, AssetModel>;
