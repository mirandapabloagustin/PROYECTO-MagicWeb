export class ListHeaderDto {
    total_cards: number;
    has_more: boolean;
    next_page: string;
    prev_page: string;

    constructor(listHeader?: ListHeaderDto) {
        this.total_cards = listHeader?.total_cards === undefined ? 0 : listHeader.total_cards;
        this.has_more = listHeader?.has_more == undefined ? false : listHeader.has_more;
        this.next_page = listHeader?.next_page == undefined ? '' : listHeader.next_page;
        this.prev_page = listHeader?.prev_page == undefined ? '' : listHeader.prev_page;
    }
}