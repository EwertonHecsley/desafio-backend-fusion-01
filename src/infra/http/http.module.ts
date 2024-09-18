import { Module } from "@nestjs/common";
import { PlanetModule } from "./planet/planet.module";

@Module({
    imports: [PlanetModule],
    exports: [PlanetModule]
})

export class HttpModule { }