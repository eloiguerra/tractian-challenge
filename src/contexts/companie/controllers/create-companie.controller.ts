import { ok, serverError } from "@shared/helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "@shared/protocols";
import { ICreateCompanieUseCase } from "../usecases/companie-usecase.struct";

export class CreateCompanieController implements Controller {
  constructor(
    private readonly createControllerUseCase: ICreateCompanieUseCase,
  ) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    try {
      const { name } = request.body;

      const response = await this.createControllerUseCase.execute({ name });

      return ok(response.getValue());
    } catch (error) {
      return serverError(error);
    }
  }
}
