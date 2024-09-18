import Entity from "src/core/generics/entity.generic";
import Identity from "src/core/generics/identity.generic";

type PlanetType = {
    name: string;
    climate: string;
    terrain: string;
    population: number;
}

export default class Planet extends Entity<PlanetType> {

    static create(planetData: PlanetType, id?: Identity): Planet {
        return new Planet(
            {
                name: planetData.name,
                climate: planetData.climate,
                terrain: planetData.terrain,
                population: planetData.population,
            },
            id
        )
    }

    get name(): string {
        return this.attributes.name;
    }

    get climate(): string {
        return this.attributes.climate;
    }

    get terrain(): string {
        return this.attributes.terrain;
    }

    get population(): number {
        return this.attributes.population;
    }

    set name(name: string) {
        this.attributes.name = name;
    }

    set climate(climate: string) {
        this.attributes.climate = climate;
    }

    set terrain(terrain: string) {
        this.attributes.terrain = terrain;
    }

    set population(population: number) {
        this.attributes.population = population;
    }
}