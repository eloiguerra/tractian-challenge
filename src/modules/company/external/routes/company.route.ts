import { adaptRoute } from "@main/adapters/express-adapter";
import { adaptFileUpload } from "@main/adapters/multer-adapter";
import { auth } from "@main/middlewares/auth";
import { Router } from "express";
import { makeCreateAssetFactory } from "../factories/make-create-asset.factory";
import { makeCreateCompanyFactory } from "../factories/make-create-company.factory";

export default (router: Router) => {
  router.post("/company", adaptRoute(makeCreateCompanyFactory(), [auth]));
  router.post(
    "/company/unit/:unitId/asset",
    adaptFileUpload.array("images"),
    adaptRoute(makeCreateAssetFactory(), [auth]),
  );
};
