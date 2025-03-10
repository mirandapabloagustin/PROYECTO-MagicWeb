import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationComponent } from '@shared/notification/notification.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor() { }

  private _snackbar = inject(MatSnackBar);

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

  errorSave(){
    this.emitSnackbar('Tuvimos inconvenientes y ocurrio un error al guardar.','warning','Intenta de nuevo mas tarde');
  }

  errorServer(){
    this.emitSnackbar('Tuvimos inconvenientes y ocurrio un error en el servidor.','warning','Intenta de nuevo mas tarde');
  }

  commentSave(){
    this.emitSnackbar('Comentario guardado correctamente.','success','Gracias por tu comentario.');
  }

  commentDelete(){
    this.emitSnackbar('Comentario eliminado correctamente.','success','Igual no lo queriamos...');
  }


}
