import { UserModel } from "@main/database/mongodb/user";
import { UseCase } from "@shared/protocols/usecase";

export type SignInUseCaseParams = Pick<UserModel, "email" | "password">;

export type ISignInUseCaseResponse = Pick<UserModel, "email" | "name"> & {
  token: string;
};

export type ISignInUseCase = UseCase<
  SignInUseCaseParams,
  ISignInUseCaseResponse
>;
