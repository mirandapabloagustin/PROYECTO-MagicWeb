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

  /**
   * @description
   * Metodo que se encarga de cambiar el estado de la carta
   * @returns { void} - No retorna nada
   */
  toggleFlip() {
    this.isFlipped = !this.isFlipped;
  }

  /**
   * @description
   * Metodo que envia la informacion de la carta al componente padre.
   * @returns { void} - No retorna nada
   */
  showMessage(){
    this.clickCard.emit(this.infoCards);
  }
}
