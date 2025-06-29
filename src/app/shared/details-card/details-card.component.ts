import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Mana } from '@app/core/models/manaCost.model';
import { AddToDeckComponent } from '../add-to-deck/add-to-deck.component';
import { User } from '@models/user.model';
import { LocalStorageService } from '@services/user/local-storage.service';
import { AuthUserService } from '@app/core/services/user/auth-user.service';
import { SnackbarService } from '@app/core/services/snackbar/snackbar.service';
import { AuthCommentService } from '@app/core/services/comment/auth.comment.service';

@Component({
  selector: 'app-details-card',
  standalone: true,
  imports: [],
  templateUrl: './details-card.component.html',
  styleUrl: './details-card.component.css'
})

export class DetailsCardComponent implements OnInit{
  isTransformed = false;
  @Input() cardData?:any;
  private userLogged! : User;

  manaFaces: Mana[][] = [];

  formattedLegalities: {
    format: string;
    legality: string;
    index?: number;
  }[] = [];

    constructor(
      private _matDialog: MatDialog,
      private _local: LocalStorageService,
      private _sService: AuthUserService,
      private _sComment: AuthCommentService,
      private _snackBar: SnackbarService
    ) { }


  ngOnInit(): void {
    this.userLogged = this._local.getUserLogged();
    window.scrollTo(0, 0);
    if(this.cardData?.layout !== 'normal'){
      this.formatMana(this.cardData?.card_faces[0].mana_cost, this.cardData?.card_faces[1].mana_cost);
    }else{
      this.formatMana(this.cardData?.mana_cost);
    }

    this.formatLegalities(this.cardData?.legalities);
  }



  /**
   * @description
   * Metodo que recibe un array de strings con los simbolos de mana y los formatea para mostrarlos en la vista.
   * @param {string[]} manaData - Array de strings con los simbolos de mana.
   * @returns {void} - No retorna ningun valor.
   */
  formatMana(...manaData :string[]){
    this.manaFaces = manaData.map((manaCost) => {
      return manaCost
      .split('{')
      .filter((symbol) => symbol.includes('}'))
      .map((symbol, index) => {
        const symbolKey = symbol.split('}')[0];
        return {
          src: `icons/cards_icons/${symbolKey}.svg`,
          alt: symbolKey,
          index, 
        };
      }
      );
    }
    );
  }

  /**
   * @description
   * Metodo que recibe un objeto con los formatos y sus legalidades.
   *  - Filtra los formatos 'StandardBrawl' y 'PauperCommander'.
   *  - Mapea los formatos y legalidades a un nuevo objeto.
   * @param {any} legalities - Objeto con los formatos y sus legalidades.
   * @returns {void} - No retorna ningun valor.
   */
  formatLegalities(legalities: any): void {
    this.formattedLegalities = Object.keys(legalities)
      .filter(format => format.toLowerCase() !== 'standardbrawl' && format.toLowerCase() !== 'paupercommander')
      .map((format, index) => {
        return {
          format,
          legality: legalities[format],
          index,
        };
      });
  }

  /**
   * @description
   * Metodo que cambia el estado de la variable 'isTransformed' para mostrar la carta en su estado original o transformada.
   * @returns {void} - No retorna ningun valor.
   */
  transformCard(): void {
    this.isTransformed = !this.isTransformed;
  }

  /**
   * @description
   * Metodo que verifica si la carta esta en la lista de favoritos del usuario.
   * @returns {boolean} - Retorna un valor booleano.
   */
  checkFavorite(): boolean {
    return this.userLogged.favCards!.some(
      (card) => card.id === this.cardData.id
    );
  }

  /**
   * @description
   * Metodo que agrega o elimina la carta de la lista de favoritos del usuario.
   * - Si la carta esta en la lista de favoritos, la elimina.
   * - Si la carta no esta en la lista de favoritos, la agrega.
   * - Actualiza la informacion del usuario en la base de datos.
   * @returns {Promise<void>} - Retorna una promesa vacia.
   */
  async addCardToFavorites(){
    if(this.checkFavorite() ){
      this.userLogged.favCards = this.userLogged.favCards!.filter(
        (card) => card.id !== this.cardData.id
      );
      this._snackBar.emitSnackbar('La carta ha sido eliminada de tus favoritos.','warning','¡Vaya!');
    }else{
      this.userLogged.favCards?.push(this.cardData);
      this._snackBar.emitSnackbar('La carta ha sido agregada a tus favoritos.','success','¡Genial!');
    }

    try{
      this._sService.updateUser(this.userLogged).then((res) => {
        if(res){
          this._local.setItemStorage(this.userLogged);
          
        }
      });
    }catch(error){
      this._snackBar.errorServer();
    }
  } 

  /**
   * @description
   * Metodo que permite al usuario establecer la carta como imagen de perfil.
   * - Actualiza la informacion del usuario en la base de datos.
   * @returns {void} - No retorna ningun valor.
   */
  async setCardAsProfile(){
    try{
      this.userLogged.imgUri = this.checkTypeCard(this.cardData);
      const res = await this._sService.updateUser(this.userLogged);

      if(res){
        await this._sComment.updateImageComment(this.userLogged.imgUri,this.userLogged.id!);
        this._local.setItemStorage(this.userLogged);
        this._snackBar.emitSnackbar('Imagen de perfil actualizada','success','La imagen ha sido actualizada.');
      }
    }catch(error){
      this._snackBar.errorServer();
    }
  }

/**
 * @description
 * Metodo que verifica si la carta es de doble cara y retorna la imagen correspondiente.
 * @param {any} card - Objeto con la informacion de la carta. 
 * @returns {string} - Retorna la ruta de la imagen de la carta.
 */
  private checkTypeCard(card : any ):string{
    let imgCard = '';
    if(card.layout === 'transform'){
      this.isTransformed ? imgCard = card.card_faces[1].image_uris.art_crop : imgCard = card.card_faces[0].image_uris.art_crop;
    }else{
      imgCard = card.image_uris.art_crop;
    }
    return imgCard;
  }

  /**
   * @description
   * Metodo que abre un dialogo para agregar la carta a un mazo.
   * - Envia la informacion de la carta al dialogo.
   * @returns {void} - No retorna ningun valor.
   */
  addCardToDeck(): void {
       this._matDialog.open(AddToDeckComponent,{
         width: '300px',
         data: this.cardData,
         panelClass: 'custom-dialog-container'
       });
  }
  


}