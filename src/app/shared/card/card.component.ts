import { Component, EventEmitter, Input, Output} from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDialog } from '@angular/material/dialog';
import { AddToDeckComponent } from '../add-to-deck/add-to-deck.component';
import { ScrollService } from '@app/core/services/scroll/scroll.service';

const MODULES = [FontAwesomeModule];

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MODULES],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent  {
  iconPlus = faPlus;

  isFlipped = false;
  isRotated = false;
  isRotatedRight = false;

  @Input() dataCard: any;
  @Output() cardClicked = new EventEmitter<any>();

  constructor(private _matDialog: MatDialog,
    private _scrollService: ScrollService,
  ) { }

  navigateToDetails(){
    this.cardClicked.emit(this.dataCard);
    this._scrollService.saveScroll(window.scrollY);
  }
  
  addCardInDeck(){
    this._matDialog.open(AddToDeckComponent,{
      width: '300px',
      data: this.dataCard,
      panelClass: 'custom-dialog-container'
    });
  }
  
  transformCard(){
    this.isFlipped = !this.isFlipped;
  }

  rotateCard() {
    this.isRotated = !this.isRotated;
  }

  rotateRightCard() {
    this.isRotatedRight = !this.isRotatedRight;
  }



}
