import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.css'
})
export class ConfirmDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

  }

  /**
   * @description
   * Metodo que se encarga de cerrar el dialogo.
   * - Se realiza una autoreferencia al dialog para que cuando se finalize el componente retone un valor booleano.
   * @returns {void} - No retorna ningun valor.
   */
  onConfirm(): void {
    this.dialogRef.close(true);
  }

  /**
   * @description
   * Metodo que se encarga de cerrar el dialogo.
   * - Se realiza una autoreferencia al dialog para que cuando se finalize el componente retone un valor booleano.
   * @returns {void} - No retorna ningun valor.
   */
  onCancel(): void {
    this.dialogRef.close(false);
  }
  

}
