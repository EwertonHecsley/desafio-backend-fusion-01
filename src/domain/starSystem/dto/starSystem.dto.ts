import { IsNotEmpty, IsString, ValidateNested, ValidationOptions } from "class-validator";
import Planet from "src/domain/planet/entity/planet.entity";

export function IsArrayNotEmpty(validationOptions?: ValidationOptions) {
    return function (object, propertyName: string) {
        ValidateNested({ each: true })(object, propertyName);
        IsNotEmpty(validationOptions)(object, propertyName);
    };
}

export class StarSystemDto {

    @IsString()
    @IsNotEmpty({ message: 'name is required.' })
    name: string;

    @IsString()
    @IsNotEmpty({ message: 'description is required.' })
    description: string;

    @IsArrayNotEmpty({ message: 'list of planets is required and must not be empty.' })
    listPlanets: Planet[];
}