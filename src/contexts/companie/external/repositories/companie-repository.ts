import { ICompanieRepository } from "@contexts/companie/usecases/ports/repositories/companie-repository.struct";
import { companieModel, CompanieModel } from "@main/database/mongodb/companie";
import { CreationModel } from "@shared/protocols/creation-model";

export class CompanieRepository implements ICompanieRepository {
  private companieModel = companieModel;

  async create(companie: CreationModel<CompanieModel>): Promise<CompanieModel> {
    const newCompanie = await this.companieModel.create({
      name: companie.name,
    });

    return newCompanie;
  }
}
