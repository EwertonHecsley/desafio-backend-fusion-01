import Entity from "src/core/generics/entity.generic";
import Identity from "src/core/generics/identity.generic";
import Planet from "src/domain/planet/entity/planet.entity";

type CharacterType = {
    name: string;
    race: string;
    affiliation: string;
    homeworld: Planet;
}

export default class Character extends Entity<CharacterType> {

    static create(dataCharacter: CharacterType, id?: Identity): Character {
        return new Character(
            {
                name: dataCharacter.name,
                race: dataCharacter.race,
                affiliation: dataCharacter.affiliation,
                homeworld: Planet.create(dataCharacter.homeworld)
            },
            id
        )
    }

    get name(): string {
        return this.attributes.name;
    }

    get race(): string {
        return this.attributes.race;
    }

    get affiliation(): string {
        return this.attributes.affiliation;
    }

    get homeworld(): Planet {
        return this.attributes.homeworld;
    }

    set name(name: string) {
        this.attributes.name = name;
    }

    set race(race: string) {
        this.attributes.race = race;
    }

    set affiliation(affiliation: string) {
        this.attributes.affiliation = affiliation;
    }

    set homeworld(homeworld: Planet) {
        this.attributes.homeworld = homeworld;
    }
}