import { adaptRoute } from "@main/adapters/express-adapter";
import { Router } from "express";
import { makeSignUp } from "../factories/signup/make-signup.factory";

export default (router: Router) => {
  router.post("/signup", adaptRoute(makeSignUp()));
};
