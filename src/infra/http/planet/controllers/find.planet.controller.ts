import { Controller, Get, HttpCode, NotFoundException, Param, Res } from "@nestjs/common";
import { Response } from "express";
import { FindPlanetUseCase } from "src/domain/planet/use-case/find.planet";
import { PlanetPresenter } from "src/infra/presenters/planet.presenter";

@Controller('/planet')
export class FindPlanetController {

    constructor(private readonly planetService: FindPlanetUseCase) { }

    @Get(':id')
    @HttpCode(200)
    async handler(@Param('id') id: string, @Res() response: Response) {

        const result = await this.planetService.execute(id);

        if (result.isLeft()) {
            throw new NotFoundException(result.value.message);
        }

        return response.json(PlanetPresenter.toHTTP(result.value));
    }
}