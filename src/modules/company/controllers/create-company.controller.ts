import { ICreateCompanyAssociationUseCase } from "@modules/user/usecases/ports/create-company-association-usecase.struct";
import { badRequest, ok, serverError } from "@shared/helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "@shared/protocols";
import { ICreateCompanyUseCase } from "../usecases/ports/create-company-usecase.struct";

export class CreateCompanyController implements Controller {
  constructor(
    private readonly createCompanyUseCase: ICreateCompanyUseCase,
    private readonly createCompanyAssociationUseCase: ICreateCompanyAssociationUseCase,
  ) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    try {
      const { name, units } = request.body;
      const { id: userId } = request.user;

      const company = await this.createCompanyUseCase.execute({
        name,
        units,
        userId,
      });

      if (company.isFailure) {
        return badRequest(company.error);
      }

      const { _id: companyId } = company.getValue();

      await this.createCompanyAssociationUseCase.execute({
        userId,
        companyId,
      });

      return ok(company.getValue());
    } catch (error) {
      return serverError(error);
    }
  }
}
