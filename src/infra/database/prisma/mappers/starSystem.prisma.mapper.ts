import { StarSystem as StarSystemDatabase, Planet as PlanetDatabase } from "@prisma/client";
import Identity from "src/core/generics/identity.generic";
import Planet from "src/domain/planet/entity/planet.entity";
import StarSystem from "src/domain/starSystem/entity/system.entity";
import { PrismaService } from "../prisma.service";

export class StarSystemPrismaMapper {

    static async toDomain(entity: StarSystemDatabase): Promise<StarSystem> {
        const prismaService = new PrismaService();

        const starSystemWithPlanets = await prismaService.starSystem.findUnique({
            where: { id: entity.id },
            include: { listPlanets: true }
        });

        const planetsMapped = starSystemWithPlanets.listPlanets.map((planetData: PlanetDatabase) => {
            return Planet.create(planetData, new Identity(planetData.id));
        });

        return StarSystem.create({
            name: starSystemWithPlanets.name,
            description: starSystemWithPlanets.description,
            listPlanets: planetsMapped
        },
            new Identity(starSystemWithPlanets.id));
    }

    static toDatabase(entity: StarSystem): StarSystemDatabase {
        return {
            id: entity.id.valueID,
            description: entity.description,
            name: entity.name
        }
    }
}
