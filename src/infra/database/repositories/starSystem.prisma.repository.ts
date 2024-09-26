import { StarSystemRepository } from "src/domain/starSystem/repository/starSystem.repository";
import { PrismaService } from "../prisma/prisma.service";
import StarSystem from "src/domain/starSystem/entity/system.entity";
import { StarSystemPrismaMapper } from "../prisma/mappers/starSystem.prisma.mapper";
import { InternalServerErrorException } from "@nestjs/common";

export class StarSystemPrismaRepository implements StarSystemRepository {

    constructor(private readonly prismaService: PrismaService) { }

    async create(starSystem: StarSystem): Promise<StarSystem> {
        const data = StarSystemPrismaMapper.toDatabase(starSystem);

        if (!data) {
            throw new InternalServerErrorException();
        }

        const newStarSystem = await this.prismaService.starSystem.create({ data });

        return StarSystemPrismaMapper.toDomain(newStarSystem);
    }
}