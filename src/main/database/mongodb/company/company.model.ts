import { model } from "mongoose";
import { CompanyModel } from "./company-model.struct";
import { CompanySchema } from "./company.schema";

export const companyModel = model<CompanyModel>("Company", CompanySchema);
