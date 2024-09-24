import Planet from "src/domain/planet/entity/planet.entity";
import { StarSystemRepository } from "../repository/starSystem.repository";
import { Either, right } from "src/errors/either/either";
import StarSystem from "../entity/system.entity";

type Request = {
    name: string;
    description: string;
    listPlanets: Planet[];
}

type Response = Either<null, StarSystem>

export class CreateStarSystemUseCase {

    constructor(private readonly starSystemRepository: StarSystemRepository) { }

    async execute({ name, description, listPlanets }: Request): Promise<Response> {
        const starSystem = StarSystem.create({ name, description, listPlanets });

        await this.starSystemRepository.create(starSystem);

        return right(starSystem);
    }
}