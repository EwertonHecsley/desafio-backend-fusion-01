import StarSystem from "src/domain/starSystem/entity/system.entity";

export class StarSystemPresenter {

    static toHTTP(starSystem: StarSystem) {
        return {
            id: starSystem.id.valueID,
            name: starSystem.name,
            description: starSystem.description
        }
    }
}