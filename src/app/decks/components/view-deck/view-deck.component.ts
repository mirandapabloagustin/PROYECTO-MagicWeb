import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Deck } from '@app/core/models/deck.model';
import { HeaderComponent } from '@shared/header/header.component';
import { FooterComponent } from "@shared/footer/footer.component";
import { AuthDeckService } from '@app/core/services/deck/auth.deck.service';
import { EmptyComponent } from '@app/shared/empty/empty.component';
import { DeckStatus } from '@enums/status.deck';
import { MatDialog } from '@angular/material/dialog';
import { ChanceImgComponent } from '@app/shared/chance-img/chance-img.component';
import { SnackbarService } from '@app/core/services/snackbar/snackbar.service';
import { EditDeckComponent } from '../edit-deck/edit-deck.component';
import { ConfirmDialogComponent } from '@shared/confirm-dialog/confirm-dialog.component'; 

interface TypeCards {
  name: string;
  cards: any[];
}

@Component({
  selector: 'app-view-deck',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, EmptyComponent],
  templateUrl: './view-deck.component.html',
  styleUrl: './view-deck.component.css'
})


export class ViewDeckComponent implements OnInit {
  deckDetails!: Deck;
  types: any[] = [];
  titleEmpty: string = 'No hay cartas en tu mazo';
  messageEmpty: string = 'Parece que aún no has agregado ninguna carta. Agrega nuevas cartas para comenzar a armar tu mazo y usarlas en tus partidas.';
  buttonLabelEmpty: string = 'Buscar cartas';
  @Input() isPublic: boolean = false;
  constructor(
    private _router: ActivatedRoute,
    private _redirect: Router,
    private _service : AuthDeckService,
    private _snackBar: SnackbarService,
    private _matDialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this._router.paramMap.subscribe(params => {
      const id = params.get('idDeck');
      if(id) {
        this.getDeckById(id);
       
      }
    })
  }

  /**
   * Metodo para actualizar mazo.
   * Llama al metodo updateDeck del servicio deckService.
   * @returns {boolean} - Retorna true si se actualizo el mazo, false si no se pudo actualizar.
   */
  private async updateDeck(): Promise<boolean> {
    try {
      const res = await this._service.updateDeck(this.deckDetails);
      if(res) {
        return true;
      }
    } catch (e) {
      console.error(e);
    }
    return false;
  }

  /**
   * Metodo para obtener un mazo por su id de mazo.
   * Llama al metodo getDeckById del servicio deckService.
   * @param {string} id - Id del mazo a obtener.
   * @returns {void} - No retorna nada.
   */
  private async getDeckById(id: string):Promise<void>{
    try {
      const deck = await this._service.getDeckById(id);
      this.deckDetails = deck;
      if(this.deckDetails.cards!.length > 0) {
        this.types = this.organizeByTypes(this.deckDetails);
      }
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * Metodo para descargar un mazo en formato de texto.
   * Crea un archivo de texto con los nombres y tipos de las cartas.
   * @returns {void} - No retorna nada.
   */
  downloadFormatDeck() {
    const deck = this.deckDetails.cards!.map(card => {
      return `Name: ${card.name}, Type: ${card.type_line}`;
    }).join('\n');
    const fileFormat = new Blob([deck], { type: 'text/plain' });
    const element = document.getElementById('downloadLink');
    element!.setAttribute('href', URL.createObjectURL(fileFormat));
  }

    /**
   * Metodo para cambiar el estado de un mazo.
   * Llama al metodo updateDeck para actualizar el estado del mazo.
   * @returns {void} - No retorna nada.
   */
    toggleDeckState(){
      this.deckDetails.status === DeckStatus.Public ? this.deckDetails.status = DeckStatus.Private : this.deckDetails.status = DeckStatus.Public;
      this.updateDeck().then(res => {
        if(res) {
          this._snackBar.emitSnackbar(`El estado de tu mazo fue actualizado. Ahora es ${this.deckDetails.status}`, 'info', 'Se actualizo tu mazo');
        }
      })
    }

  /**
   * Metodo para obtener las imagenes de las cartas de un mazo.
   * @param {Deck} deck - Mazo a obtener las imagenes de las cartas.
   * @returns {string[]} - Retorna un arreglo de imagenes de las cartas.
   */
  private getDeckImgs(deck: Deck): string[] {
    const imgsUrl: string[] = [];
    deck.cards!.forEach(card => {
      if(!imgsUrl.includes(card.image_uris.art_crop)){
        imgsUrl.push(card.image_uris.art_crop);
      }
    });
    return imgsUrl;
  }

  /**
   * @description
   * Metodo para cambiar la imagen de un mazo.
   * - Abre un dialogo con las imagenes de las cartas del mazo.
   * - Actualiza la imagen del mazo con la imagen seleccionada.
   * - Llama al metodo updateDeck para actualizar el mazo.
   * @returns {void} - No retorna nada.
   */
  async changeImgDeck() {
    const dialogConfirmRef = this._matDialog.open(ChanceImgComponent, {
      data: this.getDeckImgs(this.deckDetails)
    });
    dialogConfirmRef.afterClosed().subscribe(result => {
      if (result) {
        this.deckDetails.imgDeck = result;
        this.updateDeck().then(res => {
          if(res) {
            this._snackBar.emitSnackbar('La imagen de tu mazo fue actualizada.', 'success', 'Mazo actualizado');
          }
        }).catch(e => {
          this._snackBar.errorSave();
      });
      }
    });
  }

  /**
   * @description
   * Metodo para abrir un dialogo para editar un mazo.
   * - Abre un dialogo con el componente EditDeckComponent
   * - Envia la informacion del mazo al componente.
   * @returns {void} - No retorna nada.
   */
  editDeckInfo() {
    const dialogRef = this._matDialog.open(EditDeckComponent, {
      data: this.deckDetails,
      width: '1000px',
    });
  }

  deleteDeck(){
    const dialogConfirmRef = this._matDialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Eliminar Mazo',
        message: '¿Estas seguro que deseas eliminar este mazo?'
      }
    });

    dialogConfirmRef.afterClosed().subscribe(result => {
      if(result) {
      console.log('Mazo Eliminado');
      this._redirect.navigate(['/',this.deckDetails.id,'decks']);
      this._snackBar.emitSnackbar('El Mazo fue eliminado correctamente.', 'success', 'Mazo eliminado.');
      }
    });

  }



  /**
   * Metodo para eliminar una carta de un mazo.
   * Llama al metodo updateDeck para actualizar el mazo.
   * @param {any} type - Tipo de carta a eliminar.
   * @param {number} index - Posicion de la carta a eliminar.
   * @returns {void} - No retorna nada.
   */
  deleteCard(type: any, index: number) {
    type[1].splice(index, 1);
    const value = this.getCardsOfTypes();
    this.deckDetails.cards = value;
    this.updateDeck().then(res => {
      if(res) {
        this._snackBar.emitSnackbar('La Carta fue eliminada de tu mazo.', 'success', 'Mazo actualizado');
      }
    });
}

  /**
   * Metodo para obtener todas las cartas de un mazo.
   * @returns {any[]} - Retorna un arreglo de cartas.
   */
  private getCardsOfTypes(): any[] {
    let cards: any[] = [];
    this.types.forEach(type => {
      cards = cards.concat(type[1]);
    });
    return cards;
  }



  redirectToCards=()=> {
    this._redirect.navigate(['/main']);
  }

  groupCardsByType(deck: Deck): any[] {
    const types = deck.cards!.reduce((acc, card) => {
      if (!card.type_line) return acc; 
      const mainType = card.type_line.split("—")[0].trim();
      if (!acc[mainType]) {
        acc[mainType] = [];
      }
      acc[mainType].push(card);
      return acc; 
    }, {} as TypeCards);
    return Object.entries(types);
  }

  orderByName(types: [string, any[]][]): [string, any[]][] {
    return types.map(([type, cards]) => {
      return [
        type,
        cards.sort((a, b) => a.name.localeCompare(b.name)) 
      ];
    });
  }

  organizeByTypes(deck: Deck): any[] {
    const groupByTypes =  this.groupCardsByType(deck);
    const orderByName = this.orderByName(groupByTypes);
    return orderByName;
  }

  getDeckColorImg(color: string) {
    return `./icons/cards_icons/${color}.svg`;
  }

  formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  
  getFormatDate(value: string) {
    const date = new Date(value);
    return this.formatDate(date);
  }





}
