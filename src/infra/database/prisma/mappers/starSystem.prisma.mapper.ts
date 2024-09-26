import { StarSystem as StarSystemDatabase } from "@prisma/client";
import Identity from "src/core/generics/identity.generic";
import StarSystem from "src/domain/starSystem/entity/system.entity";
import { PrismaService } from "../prisma.service";

export class StarSystemPrismaMapper {

    static async toDomain(entity: StarSystemDatabase): Promise<StarSystem> {
        const prismaService = new PrismaService();

        const starSystemWithPlanets = await prismaService.starSystem.findUnique({
            where: { id: entity.id }
        });

        return StarSystem.create({
            name: starSystemWithPlanets.name,
            description: starSystemWithPlanets.description
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
