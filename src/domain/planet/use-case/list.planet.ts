import { Either, right } from "src/errors/either/either";
import Planet from "../entity/planet.entity";
import { PlanetRepository } from "../repository/planet.repository";

type Response = Either<null, Planet[]>

export class ListPlanetUseCase {

    constructor(private readonly planetRepository: PlanetRepository) { }

    async execute(): Promise<Response> {
        const listPlanets = await this.planetRepository.getAll();

        return right(listPlanets);
    }
}