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

  /**
   * @description
   * Metodo que se encarga de emitir un evento al componente padre con la informacion de la carta seleccionada.
   * - Se emite un evento con la informacion de la carta seleccionada.
   * - Se guarda la posicion del scroll de la ventana para no perder la poscion ubicada.
   */
  navigateToDetails(){
    this.cardClicked.emit(this.dataCard);
    this._scrollService.saveScroll(window.scrollY);
  }
  
  /**
   * @description
   * Metodo que se encarga de abrir un dialogo para agregar la carta al deck.
   * - Se abre un dialogo con el componente AddToDeckComponent.
   * - Se envia la informacion de la carta seleccionada al dialogo.
   * @returns {void} - No retorna nada.
   */
  addCardInDeck(){
    this._matDialog.open(AddToDeckComponent,{
      width: '300px',
      data: this.dataCard,
      panelClass: 'custom-dialog-container'
    });
  }
  
  /**
   * @description
   * Metodo que se encarga de rotar la carta.
   * - Se cambia el valor de la propiedad isRotated.
   * @returns {void} - No retorna nada.
   */
  transformCard(){
    this.isFlipped = !this.isFlipped;
  }

  /**
   * @description
   * Metodo que se encarga de rotar la carta.
   * - Se cambia el valor de la propiedad isRotatedRight.
   * @returns {void} - No retorna nada.
   */
  rotateCard() {
    this.isRotated = !this.isRotated;
  }

  /**
   * @description
   * Metodo que se encarga de rotar la carta hacia la derecha.
   * - Se cambia el valor de la propiedad isRotatedRight.
   * @returns {void} - No retorna nada.
   */
  rotateRightCard() {
    this.isRotatedRight = !this.isRotatedRight;
  }



}
