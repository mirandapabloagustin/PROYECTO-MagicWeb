import { Component, Input, SimpleChanges } from '@angular/core';

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

  showMessage(): void {
    console.log('Message shown!');
  }
}
