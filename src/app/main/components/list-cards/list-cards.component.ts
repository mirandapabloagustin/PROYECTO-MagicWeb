import { Component, Output, EventEmitter, OnInit, HostListener } from '@angular/core';
import { CardComponent } from '@shared/card/card.component';
import { AuthApiCardService } from '@services/card/auth.card.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Card } from '@models/card.model';
import { ButtonStyleComponent } from '@shared/button-style/button-style.component';

const MODULES = [CardComponent, MatProgressSpinnerModule, ButtonStyleComponent];

@Component({
  selector: 'app-list-cards',
  standalone: true,
  imports: [...MODULES],
  templateUrl: `./list-cards.component.html`,
  styleUrls: [`./list-cards.component.css`],
})
export class ListCardsComponent implements OnInit {
  db: Card[] = [];
  loading = true;
  loadingMore = false;
  hasMoreItems = true; 
  isVisible = false;

  constructor(private serviceAuth: AuthApiCardService) {}

  ngOnInit(): void {
    this.loadCards();
  }

  @Output() cardSelected = new EventEmitter<any>();

  handleCardId(cardData: any) {
    this.cardSelected.emit(cardData);
  }

  async loadCards() {
    try {
      const res = await this.serviceAuth.getCardsData();
      this.db = res;
      this.hasMoreItems = res.length > 0; 
      this.loading = false;
    } catch (error) {
      console.log('Error', error);
      this.loading = false;
    }
  }

  async loadMoreCards() {
    try {
      const res = await this.serviceAuth.getCardsData(); 
      this.db = [...this.db, ...res];
      this.hasMoreItems = res.length > 0; 
    } catch (error) {
      console.log('Error', error);
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isVisible = window.scrollY > 300; // Cambia el valor según necesites
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
}
