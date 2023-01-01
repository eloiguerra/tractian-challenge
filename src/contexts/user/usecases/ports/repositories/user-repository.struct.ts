import { UserModel } from "@main/database/mongodb/user";
import { CreationModel } from "@shared/protocols/creation-model";

export interface IUserRepository {
  create(user: CreationModel<UserModel>): Promise<UserModel>;
}
