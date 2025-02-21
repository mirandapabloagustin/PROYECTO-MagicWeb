import { IFilterDeckDTO } from "@interfaces/dto/filter.deck.dto";

export class FilterDeckDTO implements IFilterDeckDTO {

    name: string;
    mana: string;
    tag: string;
    colors: [];

    constructor(data: IFilterDeckDTO) {
        this.name = data.name;
        this.mana = data.mana;
        this.tag = data.tag;
        this.colors = data.colors;
    }
    
}