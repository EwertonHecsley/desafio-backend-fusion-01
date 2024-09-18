import { Injectable } from "@nestjs/common";
import { PlanetRepository } from "src/domain/planet/repository/planet.repository";
import Planet from "src/domain/planet/entity/planet.entity";
import { PlanetPrismaMapper } from "../prisma/mappers/planet.prisma.mapper";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class PlanetPrismaRepository implements PlanetRepository {

    constructor(private readonly prismaService: PrismaService) { }

    async getAll(): Promise<Planet[]> {
        const planets = await this.prismaService.planet.findMany();

        return planets.map(PlanetPrismaMapper.toDomain);
    }
}