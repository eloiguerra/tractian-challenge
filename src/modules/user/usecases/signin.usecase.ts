import { BcryptAdapter } from "@main/adapters/bcrypt-adapter";
import { JwtAdapter } from "@main/adapters/jwt-adapter";
import { Result } from "@shared/protocols";
import { UserRepository } from "../external/repositories/user.repository";
import { UserDoesntExistException } from "./ports/errors/user-doesnt-exist.exception";
import {
  ISignInUseCase,
  ISignInUseCaseResponse,
  SignInUseCaseParams,
} from "./ports/signin-usecase.struct";

export class SignInUseCase implements ISignInUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly bcryptAdapter: BcryptAdapter,
    private readonly jwtAdapter: JwtAdapter,
  ) {}

  async execute(
    params: SignInUseCaseParams,
  ): Promise<Result<ISignInUseCaseResponse>> {
    const { email, password } = params;

    const user = await this.userRepository.findByEmail(email);

    if (!user) return Result.fail(new UserDoesntExistException());

    const isValid = await this.bcryptAdapter.compare(password, user.password);

    if (!isValid) return Result.fail(new UserDoesntExistException());

    const token = await this.jwtAdapter.encrypt(user._id);

    return Result.ok({
      email: user.email,
      name: user.name,
      token,
    });
  }
}
