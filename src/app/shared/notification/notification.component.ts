import { Component, Inject, inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import { Notification } from '@core/models/notification.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent {

  snackBarRef = inject(MatSnackBarRef);

  msgNotification: Notification;

  msgIcons = [
    "comprobado.png",
    "error.png",
    "warning.png",
    "informacion.png"
  ]

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
    this.msgNotification = this._iconMsg(data.message ,data.type, data.whisper);
  }




  private _iconMsg(msg:string, type: string, whisper?:string): Notification {
    let notiData = new Notification();
    notiData.message = msg;
    notiData.whisper = whisper;

    switch (type) {
      case 'success':
        notiData.className = 'success';
        notiData.title = 'Éxito';
        notiData.icon = this.msgIcons[0];
        return notiData;
      case 'error':
        notiData.className = 'error';
        notiData.title = 'Error';
        notiData.icon = this.msgIcons[1];
        return notiData;
      case 'warning':
        notiData.className = 'warning';
        notiData.title = 'Advertencia';
        notiData.icon = this.msgIcons[2];
        return notiData;
      case 'info':
        notiData.className = 'info';
        notiData.title = 'Información';
        notiData.icon = this.msgIcons[3];
        return notiData;
      default:
        notiData.className = 'error';
        notiData.title = 'Error';
        notiData.icon = this.msgIcons[1];
        notiData.message = 'Ocurrió un error al realizar la operación';
        notiData.whisper = 'Por favor, intente nuevamente';
        return notiData;
    }
  }

}
