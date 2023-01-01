import { IUserRepository } from "@contexts/user/usecases/ports/repositories/user-repository.struct";
import { UserModel, userModel } from "@main/database/mongodb/user";
import { CreationModel } from "@shared/protocols/creation-model";

export class UserRepository implements IUserRepository {
  private userModel = userModel;

  async create(user: CreationModel<UserModel>): Promise<UserModel> {
    const newUser = await this.userModel.create({
      email: user.email,
      name: user.name,
    });

    return newUser;
  }

  async findByEmail(email: string): Promise<UserModel> {
    const user = await this.userModel.findOne({ email });

    return user;
  }
}
