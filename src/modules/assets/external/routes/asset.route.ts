import { Router } from "express";

import { adaptRoute } from "@main/adapters/express-adapter";

import { adaptFileUpload } from "@main/adapters/multer-adapter";
import { makeCreateAssetFactory } from "../factories/make-create-asset.factory";

export default (router: Router) => {
  router.post(
    "/unit",
    adaptFileUpload.array("images"),
    adaptRoute(makeCreateAssetFactory()),
  );
};
