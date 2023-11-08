import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-popup-card',
  templateUrl: './popup-card.component.html',
  styleUrls: ['./popup-card.component.css']
})

export class PopupCardComponent implements OnInit {
  inputdata: any;
  closemessage = 'Close using directive';
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<PopupCardComponent>) {

  }
  ngOnInit(): void {
    this.inputdata = this.data;
  }

  closepopup() {
    this.ref.close('Close using function');
  }

  panelOpenState = false;
}





