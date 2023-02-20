import { Environment } from "@main/config/environment";
import { makeAuthenticationMiddleware } from "@modules/user/external/factories/middlewares/authentication-middleware.factory";
import { HttpRequest, HttpResponse } from "@shared/protocols";

export const auth = async (request: HttpRequest): Promise<HttpResponse> => {
  const authMiddleware = makeAuthenticationMiddleware(Environment.secrets.jwt);
  return authMiddleware.handle(request);
};
