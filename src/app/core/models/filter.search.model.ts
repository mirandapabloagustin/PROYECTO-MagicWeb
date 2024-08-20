import { IfilterSearch } from '../interfaces/filter.search.interface';

export class FilterSearchDto implements IfilterSearch {
    color: string | null;
    mana: string | null;
    type: string | null;
    format: string | null;
    set: string | null;

    constructor(filterSearch?: IfilterSearch) {
        this.color = filterSearch?.color == undefined ? '' : filterSearch.color;
        this.mana = filterSearch?.mana == undefined ? '' : filterSearch.mana;
        this.type = filterSearch?.type == undefined ? '' : filterSearch.type;
        this.format = filterSearch?.format == undefined ? '' : filterSearch.format;
        this.set = filterSearch?.set == undefined ? '' : filterSearch.set;
    }
}