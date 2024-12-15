import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationComponent } from '@shared/notification/notification.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor() { }

  private _snackbar = inject(MatSnackBar);

  emitSnackbar(msg: string, classType:string) {
    this._snackbar.openFromComponent(NotificationComponent, {
      data: {
        message: msg,
        type: classType
      },
      duration: 2000,
      horizontalPosition: 'end'
    });
  }

}
