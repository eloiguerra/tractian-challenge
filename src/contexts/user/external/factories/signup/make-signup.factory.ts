import { SignUpController } from "@contexts/user/controllers/signup.controller";
import { SignUpUseCase } from "@contexts/user/usecases/signup.usecase";
import { Controller } from "@shared/protocols";
import { UserRepository } from "../../repositories/user-repository";

export const makeSignUp = (): Controller => {
  const userRepository = new UserRepository();
  const signUpUseCase = new SignUpUseCase(userRepository);
  const signUpController = new SignUpController(signUpUseCase);

  return signUpController;
};
