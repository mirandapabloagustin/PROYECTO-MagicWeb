import { IFilterSearchDTO } from '../../interfaces/dto/filter.search.dto.interface';

export class FilterSearchDto implements IFilterSearchDTO {
    name: string;
    color: string;
    mana: string;
    type: string;
    format: string;
    set: string;

    constructor(filterSearch?: IFilterSearchDTO) {
        this.name = filterSearch?.name == undefined ? '' : filterSearch.name;
        this.color = filterSearch?.color == undefined ? '' : filterSearch.color;
        this.mana = filterSearch?.mana == undefined ? '' : filterSearch.mana;
        this.type = filterSearch?.type == undefined ? '' : filterSearch.type;
        this.format = filterSearch?.format == undefined ? '' : filterSearch.format;
        this.set = filterSearch?.set == undefined ? '' : filterSearch.set;
    }
}
