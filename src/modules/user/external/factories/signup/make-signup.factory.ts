import { SignUpController } from "@modules/user/controllers/signup.controller";
import { SignUpUseCase } from "@modules/user/usecases/signup.usecase";
import { Controller } from "@shared/protocols";
import { BcryptAdapter } from "@main/adapters/bcrypt-adapter";
import { salt } from "@main/constants/salt";
import { UserRepository } from "../../repositories/user.repository";

export const makeSignUp = (): Controller => {
  const bcryptAdapter = new BcryptAdapter(salt);

  const userRepository = new UserRepository();

  const signUpUseCase = new SignUpUseCase(userRepository);

  const signUpController = new SignUpController(signUpUseCase, bcryptAdapter);

  return signUpController;
};
