import { HttpHeaders } from "@angular/common/http";
import { Card } from "@app/core/models/card.model";

export interface IApiResponse {
    cards: Card [];
    headers: HttpHeaders;
}
