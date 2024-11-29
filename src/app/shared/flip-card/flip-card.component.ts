import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { info } from 'node:console';

@Component({
  selector: 'app-flip-card',
  standalone: true,
  imports: [],
  templateUrl: './flip-card.component.html',
  styleUrl: './flip-card.component.css',
})
export class FlipCardComponent {
  @Input() infoCards: any;
  @Input() flip: boolean = false;
  @Output() clickCard = new EventEmitter<any>();
  isFlipped = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['flip']) {
      if(this.isFlipped){
        this.isFlipped = false;
      }
    }
  }

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
  }

  showMessage(){
    this.clickCard.emit(this.infoCards);
  }
}
