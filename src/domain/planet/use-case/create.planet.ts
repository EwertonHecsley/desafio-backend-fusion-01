import { Either, right } from "src/errors/either/either";
import Planet from "../entity/planet.entity";
import { PlanetRepository } from "../repository/planet.repository";

type Request = {
    name: string;
    climate: string;
    terrain: string;
    population: number;
}

type Response = Either<null, Planet>

export class CreatePlanetUseCase {

    constructor(private readonly planetRepository: PlanetRepository) { }

    async execute({ name, climate, population, terrain }: Request): Promise<Response> {
        const planet = Planet.create({ name, climate, population, terrain });

        await this.planetRepository.create(planet);

        return right(planet);
    }
}