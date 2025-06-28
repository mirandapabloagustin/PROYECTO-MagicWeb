import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationComponent } from '@shared/notification/notification.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor() { }

  private _snackbar = inject(MatSnackBar);

  /**
   * @description
   * Metodo que emite un snackbar
   * - Se le pasa un mensaje y un tipo de mensaje.
   * - Se le puede pasar un mensaje secundario que es opcional.
   * @param {string} msg - Mensaje a mostrar.
   * @param {string} classType - Tipo de mensaje.
   * @param {string} whisperMsg - Mensaje secundario.
   */ 
  emitSnackbar(msg: string, classType:string,whisperMsg?:string) {
    this._snackbar.openFromComponent(NotificationComponent, {
      data: {
        message: msg,
        type: classType,
        whisper: whisperMsg
      },
      duration: 3000,
      horizontalPosition: 'end'
    });
  }
  

  errorFoundCards() {
    this.emitSnackbar('Tuvimos inconvenientes al buscar las cartas esperadas.','warning','Intenta con otro tipo de busqueda');
  }
  /**
   * @description
   * Metodo que emite un snackbar de error al guardar.
   */
  errorSave(){
    this.emitSnackbar('Tuvimos inconvenientes y ocurrio un error al guardar.','warning','Intenta de nuevo mas tarde');
  }

  /**
   * @description
   * Metodo que emite un snackbar de error con el servidor.
   */
  errorServer(){
    this.emitSnackbar('Tuvimos inconvenientes y ocurrio un error en el servidor.','warning','Intenta de nuevo mas tarde');
  }

  /**
   * @description
   * Metodo que emite un snackbar de succes al guardar un comentario.
   */
  commentSave(){
    this.emitSnackbar('Comentario guardado correctamente.','success','Gracias por tu comentario.');
  }

  /**
   * @description
   * Metodo que emite un snackbar de succes al eliminar un comentario.
   */
  commentDelete(){
    this.emitSnackbar('Comentario eliminado correctamente.','success','Igual no lo queriamos...');
  }

/**
 * @description
 * Metodo que emite un snackbar de succes al crear un usuario.
 */
  userCreated(){
    this.emitSnackbar('Usuario creado correctamente.','success','La operacion fue exitosa.');
  }

  /**
   * @description
   * Metodo que emite un snackbar de succes al eliminar un usuario.
   */
  userDeleted(){
    this.emitSnackbar('Usuario eliminado correctamente.','success','La operacion fue exitosa.');
  }

  /**
   * @description
   * Metodo que emite un snackbar de warnin al no poder obtener acceso a la info de un usuario.
   */
  cantGetAccessToUser(){
    this.emitSnackbar('No pudimos accerder al usuario seleccionado.','warning','Vuelva a intentarlo.');
  }

  /**
   * @description
   * Metodo que emite un snackbar de error al no poder guardar los cambios en el usuario.
   */
  cantSaveChanges(){
    this.emitSnackbar('No se han guardado los cambios.','warning','Vuelva a intentarlo.');
  }

  nonChanges(){
    this.emitSnackbar('No se han detectado cambios en el Perfil','info','Ni te hubieras gastado...');
  }



}
