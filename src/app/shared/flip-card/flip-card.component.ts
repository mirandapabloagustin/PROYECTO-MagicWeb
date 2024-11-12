import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flip-card',
  standalone: true,
  imports: [],
  templateUrl: './flip-card.component.html',
  styleUrl: './flip-card.component.css'
})
export class FlipCardComponent {
  

  @Input() infoCards: any;

  isFlipped = false;

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
  }

  showMessage() {
    console.log('Redirigiendo');
  }

}
