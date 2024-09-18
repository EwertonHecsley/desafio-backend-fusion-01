import { Controller, Get, HttpCode } from "@nestjs/common";
import { ListPlanetUseCase } from "src/domain/planet/use-case/list.planet";

@Controller("/planet")
export class PlanetController {

    constructor(private readonly listPlanet: ListPlanetUseCase) { }

    @Get()
    @HttpCode(200)
    async handler() {
        return await this.listPlanet.execute();
    }
}