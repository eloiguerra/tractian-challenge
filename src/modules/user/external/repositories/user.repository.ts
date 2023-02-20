import { IUserRepository } from "@modules/user/usecases/ports/repositories/user-repository.struct";
import { UserModel, userModel } from "@main/database/mongodb/user";
import { CreationModel } from "@shared/protocols/creation-model";

export class UserRepository implements IUserRepository {
  private userModel = userModel;

  async create({
    email,
    name,
    password,
  }: CreationModel<UserModel>): Promise<UserModel> {
    const newUser = await this.userModel.create({
      email,
      name,
      password,
    });

    return newUser;
  }

  async findByEmail(email: string): Promise<UserModel> {
    const user = await this.userModel.findOne({ email });

    return user;
  }

  async findById(id: string): Promise<UserModel> {
    const user = await this.userModel.findOne({ _id: id });

    return user;
  }

  async updateCompany(companyId: string, userId): Promise<UserModel> {
    const user = await this.userModel.findOneAndUpdate({
      company: companyId,
      _id: userId,
    });

    return user;
  }
}
