import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { CardsService } from './cards.service';
import { Card } from '@app/core/models/card.model';

@Injectable({
  providedIn: 'root'
})
export class AuthApiCardService {
  uniqueCards: Card[] = [];
  currentIndex: number = 0;
  itemsToShow: number = 10;

  constructor(private service: CardsService) { }

  async getCardsData(): Promise<Card[]> {
    const response = await lastValueFrom(this.service.getCards(1, 100));
    const newCards = this.getUniqueCardsWithImage(response.cards);
    this.uniqueCards = [...this.uniqueCards, ...newCards];
    return newCards; 
  }

  private getUniqueCardsWithImage(cards: Card[]): Card[] {
    const unique: Set<string> = new Set();
    const result: Card[] = [];
    
    while (this.currentIndex < cards.length && result.length < this.itemsToShow) {
      const card = cards[this.currentIndex];
      if (card.imageUrl && !unique.has(card.name)) {
        unique.add(card.name);
        result.push(card);
      }
      this.currentIndex++;
    }
    
    return result;
  }
}
