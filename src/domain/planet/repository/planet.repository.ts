import Planet from "../entity/planet.entity";

export abstract class PlanetRepository {
    abstract getAll(): Promise<Planet[]>;
}