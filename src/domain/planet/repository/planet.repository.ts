import Planet from "../entity/planet.entity";

export abstract class PlanetRepository {
    abstract create(planet: Planet): Promise<Planet>;
    abstract getAll(): Promise<Planet[]>;
    abstract findById(id: string): Promise<Planet | null>;
    abstract update(planet: Planet, id: string): Promise<Planet | null>;
    abstract delete(id: string): Promise<void>;
}