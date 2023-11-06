import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

@Input() carta : string|undefined;

constructor(
  private router:Router
  ){

}

public dataCard(){
  this.router.navigate(['/card']);
}

}
