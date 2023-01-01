import { makeSignUp } from "@contexts/user/external/factories/signup/make-signup.factory";
import { adaptRoute } from "@main/adapters/express-adapter";
import { Router } from "express";

export default (router: Router) => {
  router.post("/companie", adaptRoute(makeSignUp()));
};
