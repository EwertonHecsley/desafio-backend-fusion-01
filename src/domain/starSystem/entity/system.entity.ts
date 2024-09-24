import Entity from "src/core/generics/entity.generic";
import Identity from "src/core/generics/identity.generic";

type StarSystemType = {
    name: string;
    description: string;
}

export default class StarSystem extends Entity<StarSystemType> {

    static create(dataStarSystem: StarSystemType, id?: Identity): StarSystem {
        return new StarSystem(
            {
                name: dataStarSystem.name,
                description: dataStarSystem.description,
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

    set name(name: string) {
        this.attributes.name = name;
    }

    set description(description: string) {
        this.attributes.description = description;
    }
}
