import { Module } from "@nestjs/common";
import { PlanetRepository } from "src/domain/planet/repository/planet.repository";
import { ListPlanetUseCase } from "src/domain/planet/use-case/list.planet";
import { DatabaseModule } from "src/infra/database/database.module";
import { PlanetController } from "./controllers/list.planet.controller";

@Module({
    imports: [DatabaseModule],
    providers: [
        {
            provide: ListPlanetUseCase,
            useFactory: (planetRepository: PlanetRepository) => {
                return new ListPlanetUseCase(planetRepository);
            },
            inject: [PlanetRepository]
        }
    ],
    controllers: [PlanetController]
})

export class PlanetModule { }