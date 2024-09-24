import { Planet as PlanetDatabase } from "@prisma/client";
import Identity from "src/core/generics/identity.generic";
import Planet from "src/domain/planet/entity/planet.entity";

export class PlanetPrismaMapper {

    static toDomain(entity: PlanetDatabase): Planet {
        return Planet.create(
            {
                name: entity.name,
                climate: entity.climate,
                terrain: entity.terrain,
                population: entity.population
            },
            new Identity(entity.id)
        )
    }

    static toDatabase(entity: Planet): PlanetDatabase {
        return {
            id: entity.id.valueID,
            name: entity.name,
            climate: entity.climate,
            terrain: entity.terrain,
            population: entity.population,
            starSystemId: null
        }
    }
}