import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthApiScrifallService } from 'src/app/core/service/serviceApiScryfall/auth-api-scrifall.service';
import { PopupCardComponent } from '../popup-card/popup-card.component';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() cartaComponente: any;

  constructor(
    private dialog: MatDialog,
  ) { }


  async ngOnInit(): Promise<void> {
  }



OpenPopupCard(){
  var _popup = this.dialog.open(PopupCardComponent,{
    width: '60%',
    enterAnimationDuration:'500ms',
    exitAnimationDuration:'500ms',
    data:{
      title: this.cartaComponente.nameCard
    }
       // this.router.navigate(['/card']);
  });

_popup.afterClosed().subscribe(item => {
  console.log(item);
})



}}
