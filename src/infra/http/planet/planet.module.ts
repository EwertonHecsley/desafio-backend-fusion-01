import { Module } from "@nestjs/common";
import { PlanetRepository } from "src/domain/planet/repository/planet.repository";
import { ListPlanetUseCase } from "src/domain/planet/use-case/list.planet";
import { DatabaseModule } from "src/infra/database/database.module";
import { ListPlanetController } from "./controllers/list.planet.controller";
import { CreatePlanetController } from "./controllers/create.planet.controller";
import { CreatePlanetUseCase } from "src/domain/planet/use-case/create.planet";
import { FindPlanetController } from "./controllers/find.planet.controller";
import { FindPlanetUseCase } from "src/domain/planet/use-case/find.planet";
import { EditPlanetController } from "./controllers/edit.planet.controller";
import { EditPlanetUseCase } from "src/domain/planet/use-case/edit.planet";
import { DeletePlanetController } from "./controllers/delete.controller";
import { DeletePlanetUseCase } from "src/domain/planet/use-case/delete.planet";

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
        },
        {
            provide: FindPlanetUseCase,
            useFactory: (planetRepository: PlanetRepository) => {
                return new FindPlanetUseCase(planetRepository);
            },
            inject: [PlanetRepository]
        },
        {
            provide: EditPlanetUseCase,
            useFactory: (planetRepository: PlanetRepository) => {
                return new EditPlanetUseCase(planetRepository);
            },
            inject: [PlanetRepository]
        },
        {
            provide: DeletePlanetUseCase,
            useFactory: (planetRepository: PlanetRepository) => {
                return new DeletePlanetUseCase(planetRepository)
            },
            inject: [PlanetRepository]
        }
    ],
    controllers: [ListPlanetController, CreatePlanetController, FindPlanetController, EditPlanetController, DeletePlanetController]
})

export class PlanetModule { }