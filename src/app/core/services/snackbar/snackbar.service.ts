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
    this._snackbar.openFromComponent(NotificationComponent, {
      data: {
        message: 'Tuvimos inconvenientes y ocurrio un error al guardar.',
        type: 'warning',
        whisper: 'Intenta de nuevo mas tarde'
      },
      duration: 5000,
      horizontalPosition: 'end'
    });
  }

  errorServer(){
    this._snackbar.openFromComponent(NotificationComponent, {
      data: {
        message: 'Tuvimos inconvenientes con el servidor.',
        type: 'error',
        whisper: 'Intenta de nuevo mas tarde'
      },
      duration: 5000,
      horizontalPosition: 'end'
    });
  }



}
