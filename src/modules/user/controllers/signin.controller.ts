import { badRequest, ok, serverError } from "@shared/helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "@shared/protocols";
import { SignInUseCase } from "../usecases/signin.usecase";

export class SignInController implements Controller {
  constructor(private readonly signInUseCase: SignInUseCase) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    try {
      const { email, password } = request.body;

      const response = await this.signInUseCase.execute({
        email,
        password,
      });

      if (response.isFailure) return badRequest(response.error);

      return ok(response.getValue());
    } catch (error) {
      console.log(error);
      return serverError(error);
    }
  }
}
