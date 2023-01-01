import { UserModel } from "@main/database/mongodb/user";
import { Result } from "@shared/protocols";
import { UserRepository } from "../external/repositories/user-repository";
import { UserAlreadyExistException } from "./ports/errors/user-already-exist.exception";
import {
  ISignUpUseCase,
  SignUpUseCaseParams,
} from "./ports/signup-usecase.struct";

export class SignUpUseCase implements ISignUpUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(params: SignUpUseCaseParams): Promise<Result<UserModel>> {
    const { email, name } = params;

    const user = await this.userRepository.findByEmail(email);

    if (user) return Result.fail(new UserAlreadyExistException());

    const newUser = await this.userRepository.create({ email, name });

    return Result.ok(newUser);
  }
}
