import { CreateAssetController } from "@modules/company/controllers/create-asset.controller";
import { CreateAssetUseCase } from "@modules/company/usecases/create-asset.usecase";
import { Controller } from "@shared/protocols";
import { CompanyRepository } from "../repositories/company.repository";

export const makeCreateAssetFactory = (): Controller => {
  const companyRepository = new CompanyRepository();

  const createAssetUseCase = new CreateAssetUseCase(companyRepository);

  const createAssetController = new CreateAssetController(createAssetUseCase);

  return createAssetController;
};
