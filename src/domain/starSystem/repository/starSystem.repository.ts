import StarSystem from "../entity/system.entity";

export abstract class StarSystemRepository {
    abstract create(starSystem: StarSystem): Promise<StarSystem>;
}