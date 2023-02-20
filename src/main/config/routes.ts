import { Express, Router } from "express";
import { mapProjectFiles } from "@shared/utils/files";
import { SRC_FOLDER } from "@main/constants/path";

function mapRoutes(): string[] {
  const files = mapProjectFiles(SRC_FOLDER);

  return files.filter(file => file.includes(".route.ts"));
}

export default (app: Express): void => {
  const router = Router();
  app.use("/api", router);

  const routes = mapRoutes();

  routes.map(async route => {
    if (route.includes(".test.")) return;

    (await import(route)).default(router);
  });
};
