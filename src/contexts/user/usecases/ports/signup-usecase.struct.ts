import { UserModel } from "@main/database/mongodb/user";
import { CreationModel } from "@shared/protocols/creation-model";
import { UseCase } from "@shared/protocols/usecase";

export type SignUpUseCaseParams = CreationModel<UserModel>;

export type ISignUpUseCase = UseCase<SignUpUseCaseParams, UserModel>;
