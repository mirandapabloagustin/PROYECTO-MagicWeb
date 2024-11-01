import { HttpHeaders } from "@angular/common/http";

export interface IApiResponse {
    cards: any[];
    headers: HttpHeaders;
}
