import { Either, left, right } from "src/errors/either/either";
import { PlanetRepository } from "../repository/planet.repository";
import { NotFoundException } from "@nestjs/common";

type Response = Either<NotFoundException, boolean>

export class DeletePlanetUseCase {

    constructor(private readonly planetRepository: PlanetRepository) { }

    async execute(id: string): Promise<Response> {
        const planet = await this.planetRepository.findById(id);

        if (!planet) {
            return left(new NotFoundException(`Planet with id ${id} not found.`));
        }

        await this.planetRepository.delete(id);

        return right(true);
    }
}