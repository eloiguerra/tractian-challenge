import { Schema } from "mongoose";
import { UserModel } from "./user-model.struct";

export const UserSchema = new Schema<UserModel>(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    company: { type: Schema.Types.ObjectId, ref: "Company" },
  },
  {
    timestamps: true,
  },
);
