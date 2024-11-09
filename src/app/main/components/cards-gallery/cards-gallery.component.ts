import { Component, OnInit } from '@angular/core';
import { Card } from '@app/core/models/card.model';
import { AuthApiCardService } from '@app/core/services/card/auth.card.service';

@Component({
  selector: 'app-cards-gallery',
  standalone: true,
  imports: [],
  templateUrl: './cards-gallery.component.html',
  styleUrls: ['./cards-gallery.component.css'],
})
export class CardsGalleryComponent implements OnInit {
  constructor(private _service: AuthApiCardService) {}

  // Lista de cartas
  cards: Card[] = [];

  currentCardIndex: number = 0;

  async ngOnInit(): Promise<void> {
    try {
      // Cargar cartas aleatorias
      await this._service.getCardsRandoms();
      
      // Suscribirse a las cartas para recibir las actualizaciones en tiempo real
      this._service.cards$.subscribe((cards) => {
        this.cards.push(...cards);
      });
    } catch (error) {
      console.log(error);
    }
  }

  async loadMoreCards(): Promise<void> {
    try {
      // Cargar más cartas aleatorias
      await this._service.getCardsRandoms();
    } catch (error) {
      console.log(error);
    }
  }

  // Cambia la carta al siguiente
  nextCard(): void {
    this.currentCardIndex = (this.currentCardIndex + 1) % this.cards.length;
  }

  // Cambia la carta al anterior
  prevCard(): void {
    this.currentCardIndex =
      (this.currentCardIndex - 1 + this.cards.length) % this.cards.length;
  }
}
