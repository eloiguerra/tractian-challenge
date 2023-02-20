import { JwtAdapter } from "@main/adapters/jwt-adapter";
import { AuthMiddleware } from "@modules/user/middlewares/authentication.middleware";

export const makeAuthenticationMiddleware = (secret: string) => {
  const jwtAdapter = new JwtAdapter(secret);

  return new AuthMiddleware(jwtAdapter);
};
