import { Component, HostListener, Input, OnInit } from '@angular/core';
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
import { LocalStorageService } from '@app/core/services/user/local-storage.service';
import { User } from '@app/core/models/user.model';
import { FormBuilder, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { CommentDeck } from '@app/core/models/comment.deck.model';
import { AuthCommentService } from '@app/core/services/comment/auth.comment.service';

interface TypeCards {
  name: string;
  cards: any[];
}

@Component({
  selector: 'app-view-deck',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, EmptyComponent,ReactiveFormsModule],
  templateUrl: './view-deck.component.html',
  styleUrl: './view-deck.component.css'
})


export class ViewDeckComponent implements OnInit {
  formComment! : FormGroup;
  countWords = 0;
  limitWords = 1000;
  private _userLogged! : User;
  scroll: number = 0;
  previewCard: any;
  moveMouse = {
    x: 0,
    y: 0
  }
  deckDetails!: Deck;
  listComments: CommentDeck[] = [];
  types: any[] = [];
  titleEmpty: string = 'No hay cartas en tu mazo';
  messageEmpty: string = 'Parece que aún no has agregado ninguna carta. Agrega nuevas cartas para comenzar a armar tu mazo y usarlas en tus partidas.';
  buttonLabelEmpty: string = 'Buscar cartas';
  @Input() isPublic: boolean = false;
  constructor(
    private _formBuilder: FormBuilder,
    private _router: ActivatedRoute,
    private _redirect: Router,
    private _local: LocalStorageService,
    private _service : AuthDeckService,
    private _cService : AuthCommentService,
    private _snackBar: SnackbarService,
    private _matDialog: MatDialog,
  ) {
    this.formComment = this._formBuilder.group({
      comment: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(1000),Validators.pattern(/^[a-zA-ZÀ-ÿ0-9\s.,!?()'":-]/)]]
    });
   }

  ngOnInit(): void {
    this._userLogged = this._local.getUserLogged();

    this._cService.listComments$.subscribe(comments => {
      this.listComments = comments;
    });

    this._router.paramMap.subscribe(params => {
      const id = params.get('idDeck');
      if (id) this.getDeckById(id);
    });

    this._router.queryParams.subscribe(params => {
      this.isPublic = params['public']; 
    });

  }

  /**
   * @description
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
   * @description
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
   * @description
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
   * @description
   * Metodo para verificar si un usuario le dio like a un mazo.
   * @param {Deck} deck - Mazo a verificar si el usuario le dio like.
   * @returns {boolean} - Retorna true si el usuario le dio like al mazo, false si no le dio like.
   */
  checkLikeUser(deck: Deck):boolean {
    return deck.votesUser!.includes(this._userLogged.id!);
  }

  /**
   * @description
   * Metodo para dar like a un mazo.
   * - Verifica si el usuario ya le dio like al mazo.
   * - Si el usuario ya le dio like al mazo, lo elimina del arreglo de likes, si no lo agrega.
   * - Llama al metodo updateDeck del servicio deckAuthService para actualizar el mazo.
   * @param {Deck} deck - Mazo a dar like.
   * @returns {void} - No retorna nada.
   */
  likeDeck(deck: Deck) {
    if(this.checkLikeUser(deck)){
      deck.votesUser = deck.votesUser?.filter(id => id !== this._userLogged.id) || [];
    }else{
      deck.votesUser?.push(this._userLogged.id!);
      this._snackBar.emitSnackbar('Gracias por participar en la comunidad', 'success','Tu voto ha sido registrado');
    }
    this._service.updateDeck(deck).then(res => {
      if(res){
        this.deckDetails = deck;
      }
    });
  }

  /**
   * @description
   * Metodo para copiar un mazo.
   * - Verifica si el mazo ya existe en la lista de mazos del usuario.
   * - Si el mazo no existe, lo copia y muestra un mensaje de exito.
   * - Si el mazo ya existe, muestra un mensaje de advertencia.
   * @returns {void} - No retorna nada.
   */
  copieDeck() {
    this._service.checkDeckExists(this._userLogged.id!,this.deckDetails).then(res => {
      if(!res) {
        this._service.copyDeck(this.deckDetails, this._userLogged.id!).then(res => {
          if(res) {
            this._snackBar.emitSnackbar('El mazo fue copiado correctamente.', 'success', 'Mazo copiado');
          }
        });
      }else {
        this._snackBar.emitSnackbar('Ya tienes este mazo en tu lista.', 'info', 'Verifica tus mazos !');
      }
    });
  }

    /**
     * @description
   * Metodo para cambiar el estado de un mazo.
   * Llama al metodo updateDeck del servicio deckAuthService para actualizar el estado del mazo.
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
   * @description
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

  /**
   * @description
   * Metodo para eliminar un mazo.
   * - Abre un dialogo de confirmacion para eliminar el mazo, este devuelve un booleado.
   * - Si el booleado es true, llama al metodo deleteDeck del servicio deckAuthService.
   * - Si se elimino el mazo, redirige al usuario a la pagina de mazos y muestra un mensaje de exito.
   * @returns {void} - No retorna nada.
   */
  async deleteDeck(){
    const dialogConfirmRef = this._matDialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Eliminar Mazo',
        message: '¿Estas seguro que deseas eliminar este mazo?'
      }
    });

      dialogConfirmRef.afterClosed().subscribe(result => {
        if(result) {
          this._service.deleteDeck(this.deckDetails.id!).then(res => {
            if(res) {
              this._redirect.navigate(['/',this.deckDetails.id,'decks']);
              this._snackBar.emitSnackbar('El Mazo fue eliminado correctamente.', 'success', 'Mazo eliminado.');
            }
          });
        }
      });
  }



  /**
   * @description
   * Metodo para eliminar una carta de un mazo.
   * Llama al metodo updateDeck del servivio deckAuthService para actualizar el mazo.
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
   * @description
   * Metodo para  obtener todas las cartas del arreglo de tipos.
   * - Recorre el arreglo de tipos y concatena las cartas de cada tipo.
   * @returns {any[]} - Retorna un arreglo de cartas.
   */
  private getCardsOfTypes(): any[] {
    let cards: any[] = [];
    this.types.forEach(type => {
      cards = cards.concat(type[1]);
    });
    return cards;
  }

/**
 * @description
 * Metodo para redirigir al usuario a la pagina de cartas.
 * - Llama al servicio de Router para redirigir al usuario a la ruta /main.
 * @returns {void} - No retorna nada.
 */
  redirectToCards=()=> {
    this._redirect.navigate(['/main']);
  }

  /**
   * @description
   * Metodo para agrupar las cartas de un mazo por tipo.
   * - Recorre el arreglo de cartas, si la carta no tiene un tipo, no la agrega al arreglo.
   * - Toma el primer tipo de la carta y lo agrega como llave de tipo.
   * - Si el arreglo del tipo no existe, lo crea y agrega la carta al arreglo.
   * - Se le asigana el un interface TypeCards, con el nombre del tipo y las cartas del tipo.
   * @param {Deck} deck - Mazo a agrupar por tipo.
   * @returns {any[]} - Retorna un objeto arreglo de cartas agrupadas por tipo.
   */
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

  /**
   * @description
   * Metodo para ordenar las cartas de un mazo por nombre.
   * - Recorre el arreglo de tipos y ordena las cartas por nombre.
   * @param {[string, any[]][]} types - Arreglo de tipos de cartas.
   * @returns {[string, any[]][]} - Retorna un arreglo de tipos de cartas ordenadas por nombre.
   */
  orderByName(types: [string, any[]][]): [string, any[]][] {
    return types.map(([type, cards]) => {
      return [
        type,
        cards.sort((a, b) => a.name.localeCompare(b.name)) 
      ];
    });
  }

  /**
   * @description
   * Metodo para organizar las cartas de un mazo por tipo y ordenarlas por nombre.
   * - Llama a los metodos groupCardsByType y orderByName.
   * @param {Deck} deck - Mazo a organizar.
   * @returns {any[]} - Retorna un arreglo de cartas organizadas por tipo y ordenadas por nombre.
   */
  organizeByTypes(deck: Deck): any[] {
    const groupByTypes =  this.groupCardsByType(deck);
    const orderByName = this.orderByName(groupByTypes);
    return orderByName;
  }

  /**
   * @description
   * Metodo para obtener la imagen de un color de carta.
   * - Concatena la ruta de la imagen con el color de la carta.
   * @param {string} color - Color de la carta.
   * @returns {string} - Retorna la ruta de la imagen del color de la carta.
   */
  getDeckColorImg(color: string) {
    return `./icons/cards_icons/${color}.svg`;
  }

  /**
   * @description
   * Metodo para formatear la fecha.
   * - Obtiene el dia, mes y año de la fecha.
   * - Formatea la fecha en el formato dd/mm/yyyy.
   * @param {Date} date - Fecha a formatear.
   * @returns {string} - Retorna la fecha formateada en el formato dd/mm/yyyy.
   */
  formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  
  /**
   * @description
   * Metodo para obtener la fecha en formato dd/mm/yyyy.
   * - Obtiene la fecha en formato ISO, la convierte a Objeto Date.
   * - Llama al metodo formatDate para formatear la fecha.
   * @param {string} value - Fecha en formato ISO.
   * @returns {string} - Retorna la fecha formateada en el formato dd/mm/yyyy.
   */
  getFormatDate(value: string) {
    const date = new Date(value);
    return this.formatDate(date);
  }

  /**
   * @description
   * Metodo para mostrar la vista previa de una carta.
   * - Obtiene la carta y la asigna a la variable previewCard.
   * - Obtiene el elemento de la carta y le agrega la clase visibility, posicionandolo en la posicion del mouse.
   * @param { any } - Carta a mostrar la vista previa.
   * @returns {void} - No retorna nada.
   */
  showPreviewImg(card: any) {
    this.previewCard = card;
    const element = document.getElementById(card.id);
    if(element){
      element.classList.add('visibility');
      element.style.top = `${this.moveMouse.y + 10}px`;
      element.style.left = `${this.moveMouse.x + 10}px`;
    }
  }
  
  /**
   * @description
   * Metodo para ocultar la vista previa de una carta.
   * - Elimina la variable previewCard, asignandole un valor nulo.
   * - Obtiene el elemento de la carta y le quita la clase visibility.
   * @param { any } - Carta a ocultar la vista previa.
   * @returns {void} - No retorna nada.
   */
  hidePreviewImg(card:any) {
    this.previewCard = null;
    const element = document.getElementById(card.id);
    if(element){
      element.classList.remove('visibility');
    }
  }
  
  /**
   * @description
   * Metodo para mover la vista previa de una carta.
   * - Llama al HostListener del evento mousemove, para obtener la posicion del mouse.
   * - Asigna la posicion del mouse a la variable moveMouse.
   * @param {MouseEvent} e - Evento del mouse.
   * @returns {void} - No retorna nada.
  */
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.moveMouse.x = e.clientX;
    this.moveMouse.y = e.clientY + window.scrollY;
  }
  

  /**
   * @description
   * Metodo para enviar un comentario.
   * - Obtiene el valor del formulario y lo muestra en consola.
   * @returns {void} - No retorna nada.
   */
  sendComment() {
    const user = this._local.getUserLogged();
    const comment = new CommentDeck();
    if(user){
      comment.deckId = this.deckDetails.id!;
      comment.userId = user.id!;
      comment.userName = user.nick!;
      comment.userImage = user.imgUri!;
      comment.comment = this.formComment.get('comment')?.value;
      comment.createdAt = new Date();
    }
    this._cService.createComment(comment)
    this.formComment.reset();
  }


  /**
   * @description
   * Metodo para contar las palabras del comentario.
   * - Obtiene el comentario ingresado y cuenta la cantidad de caracteres.
   * - Si la cantidad de caracteres es mayor a la cantidad de palabras permitidas, corta el comentario.
   * - Si no, asigna la cantidad de caracteres a la variable countWords.
   * @returns {void} - No retorna nada.
   */
  countWordsDescription() {
    const comment = this.formComment.get('comment')?.value;
    const characters = comment ? comment.length : 0;
    if (characters > this.limitWords) {
      this.formComment
        .get('comment')
        ?.setValue(comment.slice(0, this.limitWords));
    } else {
      this.countWords = characters;
    }
  }
    
    /**
   * @description 
   * Metodo para validar si existe un error en el campo.
   * - Obtiene el campo del formulario y llama al metodo hasError del campo, que recibe el nombre del error.
   * @param field 
   * @param error 
   * @returns {boolean} - Retorna un true si existe un error en el campo
   */
    hasError(field: string, error: string) {
      const formControl = this.formComment.get(field);
      return formControl?.hasError(error);
    }
  
    /**
     * @description
     * Metodo para validar si existe un error en el campo.
     * - Llama al metodo hasError, que recibe el nombre del campo y el nombre del error.
     * Si existe un error, agrega la clase form__error-status al campo, de lo contrario la elimina.
     * @param {string} field - Nombre del campo 
     * @param {string} error - Nombre del error 
     * @returns {boolean} Retorna un true si existe un error en el campo
     */
    hasExistsError(field: string, error: string): boolean {
      const value = this.hasError(field, error);
      const element = document.getElementById(field);
      value ? element?.classList.add('form__error-status') : element?.classList.remove('form__error-status');
      return value!;
    }
   

   
}
