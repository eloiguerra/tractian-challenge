import { CompanieModel } from "@main/database/mongodb/companie";
import { CreationModel } from "@shared/protocols/creation-model";
import { UseCase } from "@shared/protocols/usecase";

export type CreateCompanieUseCaseParams = CreationModel<CompanieModel>;

export type ICreateCompanieUseCase = UseCase<
  CreateCompanieUseCaseParams,
  CompanieModel
>;
