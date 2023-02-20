import { JwtAdapter } from "@main/adapters/jwt-adapter";
import { InvalidParamError, UnauthorizedError } from "@shared/errors";
import { forbidden } from "@shared/helpers/http-helper";
import { HttpRequest, HttpResponse } from "@shared/protocols";
import { Middleware } from "@shared/protocols/middleware";

export class AuthMiddleware implements Middleware {
  constructor(private readonly jwtAdapter: JwtAdapter) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    try {
      const { authorization } = request.headers;

      if (!authorization) {
        return forbidden(new UnauthorizedError());
      }

      const [, token] = authorization.split(" ");

      const { id, companyId } = (await this.jwtAdapter.decrypt(token)) as any;

      request.user = { id, companyId };
    } catch (error) {
      return forbidden(new InvalidParamError("token"));
    }
  }
}
