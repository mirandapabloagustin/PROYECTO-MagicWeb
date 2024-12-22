export class SearchCards {
    total: number;
    newLoad: boolean;
    next: string;
    prev: string;
    hasMore: boolean;

    constructor(total: number, newLoad: boolean, next: string, prev: string, hasMore: boolean) {
        this.next = next == undefined ? '' : next;
        this.prev = prev == undefined ? '' : prev;
        this.total = total == undefined ? 0 : total;
        this.newLoad = newLoad == undefined ? false : newLoad;
        this.hasMore = hasMore == undefined ? false : hasMore;
    }
}