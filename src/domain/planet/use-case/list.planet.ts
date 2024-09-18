import Planet from "../entity/planet.entity";
import { PlanetRepository } from "../repository/planet.repository";

export class ListPlanetUseCase {

    constructor(private readonly planetRepository: PlanetRepository) { }

    async execute(): Promise<Planet[]> {
        return await this.planetRepository.getAll();
    }
}