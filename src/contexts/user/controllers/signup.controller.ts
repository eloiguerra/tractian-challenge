import { badRequest, ok, serverError } from "@shared/helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "@shared/protocols";
import { SignUpUseCase } from "../usecases/signup.usecase";

export class SignUpController implements Controller {
  constructor(private readonly signUpUseCase: SignUpUseCase) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    try {
      const { email, name } = request.body;

      const response = await this.signUpUseCase.execute({ email, name });

      if (response.isFailure) return badRequest(response.error);

      return ok(response.getValue());
    } catch (error) {
      return serverError(error);
    }
  }
}
