import { Controller } from "@shared/protocols";
import { BcryptAdapter } from "@main/adapters/bcrypt-adapter";
import { salt } from "@main/constants/salt";
import { SignInUseCase } from "@modules/user/usecases/signin.usecase";
import { SignInController } from "@modules/user/controllers/signin-controller";
import { JwtAdapter } from "@main/adapters/jwt-adapter";
import { Environment } from "@main/config/environment";
import { UserRepository } from "../repositories/user.repository";

export const makeSignIn = (): Controller => {
  const bcryptAdapter = new BcryptAdapter(salt);
  const jwtAdapter = new JwtAdapter(Environment.secrets.jwt);

  const userRepository = new UserRepository();

  const signInUseCase = new SignInUseCase(
    userRepository,
    bcryptAdapter,
    jwtAdapter,
  );

  const signInController = new SignInController(signInUseCase);

  return signInController;
};
