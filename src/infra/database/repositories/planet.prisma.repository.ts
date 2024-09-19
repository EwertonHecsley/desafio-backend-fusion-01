import { Injectable } from "@nestjs/common";
import { PlanetRepository } from "src/domain/planet/repository/planet.repository";
import Planet from "src/domain/planet/entity/planet.entity";
import { PlanetPrismaMapper } from "../prisma/mappers/planet.prisma.mapper";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class PlanetPrismaRepository implements PlanetRepository {

    constructor(private readonly prismaService: PrismaService) { }

    async create(planetData: Planet): Promise<Planet> {
        const data = PlanetPrismaMapper.toDatabase(planetData);

        const planet = await this.prismaService.planet.create({ data });

        return PlanetPrismaMapper.toDomain(planet);
    }

    async getAll(): Promise<Planet[]> {
        const planets = await this.prismaService.planet.findMany();

        return planets.map(PlanetPrismaMapper.toDomain);
    }

    async findById(id: string): Promise<Planet | null> {
        const planet = await this.prismaService.planet.findFirst({ where: { id } });

        if (!planet) {
            return null;
        }

        return PlanetPrismaMapper.toDomain(planet);
    }
}