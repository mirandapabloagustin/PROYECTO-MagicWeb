import { Component, Output, EventEmitter, OnInit, HostListener } from '@angular/core';
import { CardComponent } from '@shared/card/card.component';
import { AuthApiCardService } from '@services/card/auth.card.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Card } from '@models/card.model';
import { ButtonStyleComponent } from '@shared/button-style/button-style.component';
import {
  faArrowUp
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const MODULES = [CardComponent, MatProgressSpinnerModule, ButtonStyleComponent, FontAwesomeModule];

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
  hasMoreItems = true; 
  isVisible = false;
  icon = faArrowUp;

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
      this.db = await this.serviceAuth.preLoadCards();
      console.log('this.db', this.db.length);
      this.loading = false;
    } catch (error) {
      console.log('Error', error);
    }
  }

  loadMoreCards() {
    const moreCards = this.serviceAuth.getMoreCards(); 
    if (moreCards.length > 0) {
      this.db = [...this.db, ...moreCards]; 
    } else {
      console.log('No hay más cartas para cargar.'); 
      this.hasMoreItems = false;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isVisible = window.scrollY > 300; 
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
}
