import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthTareaService } from 'src/app/core/service/auth-tarea.service';
@Component({
  selector: 'app-photo-user',
  templateUrl: './photo-user.component.html',
  styleUrls: ['./photo-user.component.css']
})
export class PhotoUserComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    private ref: MatDialogRef<PhotoUserComponent>,
    private authTareaService: AuthTareaService
  ) { }

  closepopup() {
    this.ref.close('Close using function');
  }

  imgSelectForUser(url:string){
    this.data.imagUser = url;
    this.closepopup();
  }


}
