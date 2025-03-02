import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-chance-img',
  standalone: true,
  imports: [],
  templateUrl: './chance-img.component.html',
  styleUrl: './chance-img.component.css'
})
export class ChanceImgComponent implements OnInit {

  constructor(
      private dialogRef: MatDialogRef<ChanceImgComponent>,
      @Inject(MAT_DIALOG_DATA) public data: string[],
  ) { }

  ngOnInit(): void {
  }

  selectImg(img: string) {
    this.dialogRef.close(img);
  }


}
