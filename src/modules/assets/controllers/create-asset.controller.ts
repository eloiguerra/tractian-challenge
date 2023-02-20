import { ok, serverError } from "@shared/helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "@shared/protocols";
import { ICreateAssetUseCase } from "../usecases/ports/create-asset-usecase.struct";

export class CreateAssetController implements Controller {
  constructor(private readonly createAssetUseCase: ICreateAssetUseCase) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    try {
      const response = await this.createAssetUseCase.execute({
        ...request.body,
        images: request.files,
      });

      return ok(response.getValue());
    } catch (error) {
      return serverError(error);
    }
  }
}
