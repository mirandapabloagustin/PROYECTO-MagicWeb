import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupCardComponent } from '../popup-card/popup-card.component';
import { User } from 'src/app/core/Models';
import { AuthTareaService } from 'src/app/core/service/auth-tarea.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() cartaComponente: any;
  userLogin : User | undefined;

  constructor(
    private dialog: MatDialog,
    private authTareaService: AuthTareaService
  ) { }


  async ngOnInit(): Promise<void> {
  }



  public OpenPopupCard() {
    var _popup = this.dialog.open(PopupCardComponent, {
      panelClass: 'custom-dialog-container',
      width: '700px',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
      data: this.cartaComponente
    });

    _popup.afterClosed().subscribe(item => {
      console.log(item);
    })

  }



}
