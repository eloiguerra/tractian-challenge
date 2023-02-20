import { CompanyModel } from "@main/database/mongodb/company";
import { UserRepository } from "@modules/user/external/repositories/user.repository";
import { UserDoesntExistException } from "@modules/user/usecases/ports/errors/user-doesnt-exist.exception";
import { Result } from "@shared/protocols";
import { CompanyRepository } from "../external/repositories/company.repository";
import {
  CreateCompanyUseCaseParams,
  ICreateCompanyUseCase,
} from "./ports/create-company-usecase.struct";

export class CreateCompanyUseCase implements ICreateCompanyUseCase {
  constructor(
    private readonly companyRepository: CompanyRepository,
    private readonly userRepository: UserRepository,
  ) {}

  async execute({
    userId,
    ...companyData
  }: CreateCompanyUseCaseParams): Promise<Result<CompanyModel>> {
    const user = await this.userRepository.findById(userId);

    if (!user) {
      return Result.fail(new UserDoesntExistException());
    }

    if (user.company) {
      return Result.fail(new Error("User already has a company"));
    }

    const company = await this.companyRepository.create(companyData);

    return Result.ok(company);
  }
}
