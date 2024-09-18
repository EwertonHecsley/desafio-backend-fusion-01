import Planet from "../entity/planet.entity";

export abstract class PlanetRepository {
    abstract create(planet:Planet):Promise<Planet>;
    abstract getAll(): Promise<Planet[]>;
}