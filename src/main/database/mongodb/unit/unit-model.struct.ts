import { AssetModel } from "../asset/asset-model.struct";

export interface UnitModel {
  _id: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
  assets: AssetModel[];
}
