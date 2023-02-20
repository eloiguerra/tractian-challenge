import { CompanyModel } from "@main/database/mongodb/company";
import { CreationModel } from "@shared/protocols/creation-model";
import { UseCase } from "@shared/protocols/usecase";

export type CreateCompanyUseCaseParams = CreationModel<CompanyModel> & {
  userId: string;
};

export type ICreateCompanyUseCase = UseCase<
  CreateCompanyUseCaseParams,
  CompanyModel
>;
