import { Either, right } from "src/errors/either/either";
import { PlanetRepository } from "../repository/planet.repository";
import { NotFoundException } from "@nestjs/common";
import { UpdatePlanetDto } from "../dto/update.planet.dto";
import Planet from "../entity/planet.entity";

type Request = {
    id: string;
    planet: UpdatePlanetDto;
}

type Response = Either<NotFoundException, Planet>

export class EditPlanetUseCase {

    constructor(private readonly planetRepository: PlanetRepository) { }

    async execute(planetData: Request): Promise<Response> {
        const { id, planet } = planetData;

        const existPlanet = await this.planetRepository.findById(id);

        if (!existPlanet) {
            throw new NotFoundException('planet not found.');
        }

        existPlanet.name = planet.name;
        existPlanet.climate = planet.climate;
        existPlanet.terrain = planet.terrain;
        existPlanet.population = planet.population;

        const planetUpdated = await this.planetRepository.update(existPlanet, id);

        return right(planetUpdated);
    }
}