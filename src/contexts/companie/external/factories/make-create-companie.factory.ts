import { CreateCompanieController } from "@contexts/companie/controllers/create-companie.controller";
import { CreateCompanieUseCase } from "@contexts/companie/usecases/companie.usecase";
import { Controller } from "@shared/protocols";
import { CompanieRepository } from "../repositories/companie-repository";

export const makeCreateCompanieFactory = (): Controller => {
  const companieRepository = new CompanieRepository();
  const createCompanieUseCase = new CreateCompanieUseCase(companieRepository);
  const createCompanieController = new CreateCompanieController(
    createCompanieUseCase,
  );

  return createCompanieController;
};
