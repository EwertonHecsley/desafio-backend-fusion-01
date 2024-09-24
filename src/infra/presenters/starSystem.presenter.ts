import StarSystem from "src/domain/starSystem/entity/system.entity";

export class StarSystemPresenter {

    static toHTTP(starSystem: StarSystem) {
        return {
            id: starSystem.id.valueID,
            name: starSystem.name,
            description: starSystem.description,
            listPlanets: starSystem.listPlanets.map(planet => ({
                id: planet.id.valueID,
                name: planet.name,
                climate: planet.climate,
                terrain: planet.terrain,
                population: planet.population
            }))
        }
    }
}