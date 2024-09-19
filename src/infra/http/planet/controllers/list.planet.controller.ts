import { Controller, Get, HttpCode, InternalServerErrorException, Res } from "@nestjs/common";
import { Response } from "express";
import { ListPlanetUseCase } from "src/domain/planet/use-case/list.planet";
import { PlanetPresenter } from "src/infra/presenters/planet.presenter";

@Controller("/planet")
export class ListPlanetController {

    constructor(private readonly planetService: ListPlanetUseCase) { }

    @Get()
    @HttpCode(200)
    async handler(@Res() response: Response) {
        const result = await this.planetService.execute();

        if (result.isLeft()) {
            throw new InternalServerErrorException('Internal Server Error.');
        }

        const planets = result.value.map(planet => PlanetPresenter.toHTTP(planet));

        return response.json(planets);
    }
}