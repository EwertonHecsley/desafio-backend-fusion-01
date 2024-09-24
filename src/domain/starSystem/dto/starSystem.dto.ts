import { IsNotEmpty, IsString } from "class-validator";

export class StarSystemDto {

    @IsString()
    @IsNotEmpty({ message: 'name is required.' })
    name: string;

    @IsString()
    @IsNotEmpty({ message: 'description is required.' })
    description: string;
}