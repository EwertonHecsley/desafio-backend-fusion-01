import { Body, Controller, HttpCode, NotFoundException, Param, Put, Res } from "@nestjs/common";
import { Response } from "express";
import { UpdatePlanetDto } from "src/domain/planet/dto/update.planet.dto";
import { EditPlanetUseCase } from "src/domain/planet/use-case/edit.planet";

@Controller('/planet')
export class EditPlanetController {

    constructor(private readonly planetService: EditPlanetUseCase) { }

    @Put(':id')
    @HttpCode(204)
    async handler(@Param('id') id: string, @Body() planetData: UpdatePlanetDto, @Res() response: Response) {
        const result = await this.planetService.execute({ id, planet: planetData });

        if (result.isLeft()) {
            throw new NotFoundException(result.value.message);
        }

        return response.json();
    }
}