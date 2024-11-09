import { Component, OnInit } from '@angular/core';
import { AuthApiCardService } from '@app/core/services/card/auth.card.service';

@Component({
  selector: 'app-cards-gallery',
  standalone: true,
  imports: [],
  templateUrl: './cards-gallery.component.html',
  styleUrl: './cards-gallery.component.css',
})
export class CardsGalleryComponent implements OnInit {

  constructor(private _service: AuthApiCardService) {}

   // Lista de cartas
   cards: any[] = [
    {
      title: 'Carta de Estrategia',
      description: 'Potencia tus jugadas con esta poderosa carta.',
      image: 'https://via.placeholder.com/300x200?text=Carta'
    },
    {
      title: 'Carta Mágica',
      description: 'Una carta que cambiará el curso del juego.',
      image: 'https://via.placeholder.com/300x200?text=Carta'
    },
    {
      title: 'Carta de caca 1',
      description: 'Protege tu mazo con esta defensa imparable.',
      image: 'https://via.placeholder.com/300x200?text=Carta'
    }
  ];

  currentCardIndex: number = 0;

  ngOnInit(): void {

  }

  // Cambia la carta al siguiente
  nextCard(): void {
    this.currentCardIndex = (this.currentCardIndex + 1) % this.cards.length;
  }

  // Cambia la carta al anterior
  prevCard(): void {
    this.currentCardIndex = (this.currentCardIndex - 1 + this.cards.length) % this.cards.length;
  }
}
