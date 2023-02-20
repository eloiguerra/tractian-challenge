import { badRequest, ok, serverError } from "@shared/helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "@shared/protocols";
import { ICreateAssetUseCase } from "../usecases/ports/create-asset-usecase.struct";

export class CreateAssetController implements Controller {
  constructor(private readonly createAssetUseCase: ICreateAssetUseCase) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    try {
      const { companyId } = request.user;
      const { unitId } = request.params;

      if (!companyId)
        return badRequest(new Error("User is not associated to a company"));

      const response = await this.createAssetUseCase.execute({
        companyId,
        unitId,
        asset: {
          images: request.files,
          name: request.body.name,
          description: request.body.description,
          model: request.body.model,
          owner: request.body.owner,
          health: request.body.health,
          status: request.body.status,
        },
      });

      return ok(response.getValue());
    } catch (error) {
      console.log(error);
      return serverError(error);
    }
  }
}
