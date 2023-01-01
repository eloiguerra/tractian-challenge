import { Schema } from "mongoose";
import { UserModel } from "./user-model.struct";

export const UserSchema = new Schema<UserModel>(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);
