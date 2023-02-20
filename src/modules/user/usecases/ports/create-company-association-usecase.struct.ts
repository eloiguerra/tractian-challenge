import { UseCase } from "@shared/protocols/usecase";

export type CreateCompanyAssociationUseCaseParams = {
  userId: string;
  companyId: string;
};

export type ICreateCompanyAssociationUseCase = UseCase<
  CreateCompanyAssociationUseCaseParams,
  void
>;
