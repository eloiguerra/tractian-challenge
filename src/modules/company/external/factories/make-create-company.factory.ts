import { CreateCompanyController } from "@modules/company/controllers/create-company.controller";
import { CreateCompanyUseCase } from "@modules/company/usecases/create-company.usecase";
import { UserRepository } from "@modules/user/external/repositories/user.repository";
import { CreateCompanyAssociationUseCase } from "@modules/user/usecases/create-company-association.usecase";
import { Controller } from "@shared/protocols";
import { CompanyRepository } from "../repositories/company.repository";

export const makeCreateCompanyFactory = (): Controller => {
  const userRepository = new UserRepository();
  const companyRepository = new CompanyRepository();

  const createCompanyUseCase = new CreateCompanyUseCase(
    companyRepository,
    userRepository,
  );
  const createCompanyAssociationUseCase = new CreateCompanyAssociationUseCase(
    userRepository,
  );
  const createCompanyController = new CreateCompanyController(
    createCompanyUseCase,
    createCompanyAssociationUseCase,
  );

  return createCompanyController;
};
