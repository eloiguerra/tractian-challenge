import { model } from "mongoose";
import { UserModel } from "./user-model.struct";
import { UserSchema } from "./user.schema";

export const userModel = model<UserModel>("User", UserSchema);
