import { Types } from "mongoose";
import { CompanyModel } from "../company";

export interface UserModel {
  _id: string;
  name: string;
  email: string;
  password: string;
  company?: Types.ObjectId | Record<string, unknown>;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserDocument {
  company: CompanyModel["_id"];
}

export interface UserPopulatedDocument {
  company: CompanyModel;
}
