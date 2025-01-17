import { Component, Output, EventEmitter, OnInit, HostListener, Input, SimpleChanges, OnChanges } from '@angular/core';
import { CardComponent } from '@shared/card/card.component';
import { AuthApiCardService } from '@services/card/auth.card.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  faArrowUp
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const MODULES = [CardComponent, MatProgressSpinnerModule, FontAwesomeModule];

@Component({
  selector: 'app-list-cards',
  standalone: true,
  imports: [...MODULES],
  templateUrl: `./list-cards.component.html`,
  styleUrls: [`./list-cards.component.css`],
})
export class ListCardsComponent implements OnInit{
  isVisible = false;
  hiddenBtnNext:boolean = false;
  hiddenBtnPrev: boolean = false;
  icon = faArrowUp;

  listCards: any[] = [];

  @Output() cardSelected = new EventEmitter<any>();

  constructor(
    private _service: AuthApiCardService
  ) { }

  ngOnInit() {
    this.firstLoad();
  }


  firstLoad() {
    this._service.iterator$.subscribe((data) => {
      this.listCards = data}
    );
    this._service.nextPageStatus$.subscribe((data) => {
      this.hiddenBtnNext = data;
    });
    this._service.prevPageStatus$.subscribe((data) => {
      this.hiddenBtnPrev = data;
    });
  }

  nextPage() {
    this._service.next();
    
  }

  prevPage() {
    this._service.prev();
  }

  handleCardId(cardData: any) {
    this.cardSelected.emit(cardData);
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isVisible = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }




}
