import { Module } from "@nestjs/common";
import { PlanetModule } from "./planet/planet.module";
import { StarSystemModule } from "./starSystem/starSystem.module";

@Module({
    imports: [PlanetModule, StarSystemModule],
    exports: [PlanetModule, StarSystemModule]
})

export class HttpModule { }