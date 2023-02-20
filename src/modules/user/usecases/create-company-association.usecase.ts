import { Result } from "@shared/protocols";
import {
  CreateCompanyAssociationUseCaseParams,
  ICreateCompanyAssociationUseCase,
} from "./ports/create-company-association-usecase.struct";
import { UserDoesntExistException } from "./ports/errors/user-doesnt-exist.exception";
import { IUserRepository } from "./ports/repositories/user-repository.struct";

export class CreateCompanyAssociationUseCase
  implements ICreateCompanyAssociationUseCase
{
  constructor(private readonly userRepository: IUserRepository) {}

  async execute({
    userId,
    companyId,
  }: CreateCompanyAssociationUseCaseParams): Promise<Result<void>> {
    const company = await this.userRepository.updateCompany(companyId, userId);

    if (!company) {
      return Result.fail(new Error("Company not found"));
    }

    return Result.ok();
  }
}
