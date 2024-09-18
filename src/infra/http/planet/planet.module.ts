import { Module } from "@nestjs/common";
import { PlanetRepository } from "src/domain/planet/repository/planet.repository";
import { ListPlanetUseCase } from "src/domain/planet/use-case/list.planet";
import { DatabaseModule } from "src/infra/database/database.module";
import { ListPlanetController } from "./controllers/list.planet.controller";
import { CreatePlanetController } from "./controllers/create.planet.controller";
import { CreatePlanetUseCase } from "src/domain/planet/use-case/create.planet";

@Module({
    imports: [DatabaseModule],
    providers: [
        {
            provide: ListPlanetUseCase,
            useFactory: (planetRepository: PlanetRepository) => {
                return new ListPlanetUseCase(planetRepository);
            },
            inject: [PlanetRepository]
        },
        {
            provide: CreatePlanetUseCase,
            useFactory: (planetRepository: PlanetRepository) => {
                return new CreatePlanetUseCase(planetRepository);
            },
            inject: [PlanetRepository]
        }
    ],
    controllers: [ListPlanetController, CreatePlanetController]
})

export class PlanetModule { }