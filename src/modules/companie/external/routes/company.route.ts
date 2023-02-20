import { adaptRoute } from "@main/adapters/express-adapter";
import { auth } from "@main/middlewares/auth";
import { Router } from "express";
import { makeCreateCompanyFactory } from "../factories/make-create-company.factory";

export default (router: Router) => {
  router.post("/company", adaptRoute(makeCreateCompanyFactory(), [auth]));
};
