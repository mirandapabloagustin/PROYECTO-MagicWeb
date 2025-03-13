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

  /**
   * @description
   * Metodo que se encarga de cerrar el dialogo y retornar la imagen seleccionada.
   * - Se realiza una autoreferencia al dialog para que cuando se finalize el componente retorne un valor string.
   * @param img 
   */
  selectImg(img: string) {
    this.dialogRef.close(img);
  }


}
