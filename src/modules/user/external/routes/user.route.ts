import { adaptRoute } from "@main/adapters/express-adapter";
import { Router } from "express";
import { makeSignIn } from "../factories/make-signin.factory";
import { makeSignUp } from "../factories/signup/make-signup.factory";

export default (router: Router) => {
  router.post("/signup", adaptRoute(makeSignUp()));
  router.post("/signin", adaptRoute(makeSignIn()));
};
