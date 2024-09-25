import { StarSystemRepository } from "../repository/starSystem.repository";
import { Either, right } from "src/errors/either/either";
import StarSystem from "../entity/system.entity";

type Request = {
    name: string;
    description: string;
}

type Response = Either<null, StarSystem>

export class CreateStarSystemUseCase {

    constructor(private readonly starSystemRepository: StarSystemRepository) { }

    async execute({ name, description }: Request): Promise<Response> {
        const starSystem = StarSystem.create({ name, description });

        await this.starSystemRepository.create(starSystem);

        return right(starSystem);
    }
}