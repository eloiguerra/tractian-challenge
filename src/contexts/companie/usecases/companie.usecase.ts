import { CompanieModel } from "@main/database/mongodb/companie";
import { Result } from "@shared/protocols";
import { CompanieRepository } from "../external/repositories/companie-repository";
import {
  CreateCompanieUseCaseParams,
  ICreateCompanieUseCase,
} from "./companie-usecase.struct";

export class CreateCompanieUseCase implements ICreateCompanieUseCase {
  constructor(private readonly companieRepository: CompanieRepository) {}

  async execute(
    params: CreateCompanieUseCaseParams,
  ): Promise<Result<CompanieModel>> {
    const companie = await this.companieRepository.create(params);

    return Result.ok(companie);
  }
}
