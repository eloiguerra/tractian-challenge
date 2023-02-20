import { BcryptAdapter } from "@main/adapters/bcrypt-adapter";
import { badRequest, ok, serverError } from "@shared/helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "@shared/protocols";
import { SignUpUseCase } from "../usecases/signup.usecase";

export class SignUpController implements Controller {
  constructor(
    private readonly signUpUseCase: SignUpUseCase,
    private readonly bcryptAdapter: BcryptAdapter,
  ) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    try {
      const { email, name, password } = request.body;

      const hashedPassword: string = await this.bcryptAdapter.hash(password);

      const response = await this.signUpUseCase.execute({
        email,
        name,
        password: hashedPassword,
      });

      if (response.isFailure) return badRequest(response.error);

      return ok(response.getValue());
    } catch (error) {
      return serverError(error);
    }
  }
}
