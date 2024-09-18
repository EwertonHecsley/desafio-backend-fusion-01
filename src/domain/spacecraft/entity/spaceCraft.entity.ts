import Entity from "src/core/generics/entity.generic";
import Identity from "src/core/generics/identity.generic";

type SpacecraftType = {
    name: string;
    model: string;
    manufacturer: string;
    passengerCapacity: number;
}

export default class Spacecraft extends Entity<SpacecraftType> {

    static create(dataSpacecraft: SpacecraftType, id?: Identity): Spacecraft {
        return new Spacecraft(
            {
                name: dataSpacecraft.name,
                model: dataSpacecraft.model,
                manufacturer: dataSpacecraft.manufacturer,
                passengerCapacity: dataSpacecraft.passengerCapacity
            },
            id
        )
    }

    get name(): string {
        return this.attributes.name;
    }

    get model(): string {
        return this.attributes.model;
    }

    get manufacturer(): string {
        return this.attributes.manufacturer;
    }

    get passengerCapacity(): number {
        return this.attributes.passengerCapacity;
    }

    set name(name: string) {
        this.attributes.name = name;
    }

    set model(model: string) {
        this.attributes.model = model;
    }

    set manufacturer(manufacturer: string) {
        this.attributes.manufacturer = manufacturer;
    }

    set passengerCapacity(passengerCapacity: number) {
        this.attributes.passengerCapacity = passengerCapacity;
    }
}