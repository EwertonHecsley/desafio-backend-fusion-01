import Entity from "src/core/generics/entity.generic";
import Identity from "src/core/generics/identity.generic";
import Planet from "src/domain/planet/entity/planet.entity";

type StarSystemType = {
    name: string;
    description: string;
    listPlanets: Planet[];
}

export default class StarSystem extends Entity<StarSystemType> {

    static create(dataStarSystem: StarSystemType, id?: Identity): StarSystem {
        return new StarSystem(
            {
                name: dataStarSystem.name,
                description: dataStarSystem.description,
                listPlanets: dataStarSystem.listPlanets.map((planetData) => {
                    return Planet.create(planetData, id);
                })
            },
            id
        )
    }

    get name(): string {
        return this.attributes.name;
    }

    get description(): string {
        return this.attributes.description;
    }

    get listPlanets(): Planet[] {
        return this.attributes.listPlanets;
    }

    set name(name: string) {
        this.attributes.name = name;
    }

    set description(description: string) {
        this.attributes.description = description;
    }

    set listPlanets(listPlanets: Planet[]) {
        this.attributes.listPlanets = listPlanets;
    }
}
