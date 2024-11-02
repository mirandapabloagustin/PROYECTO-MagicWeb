
import { Card } from "@app/core/models/card.model";

export interface IApiResponse {
    cards: Card [];
    headers: ApiResponseHeaders;
}

export interface ApiResponseHeaders {
    link?: {
        prev?: string;
        next?: string;
        last?: string;
        first?: string;
    };
}