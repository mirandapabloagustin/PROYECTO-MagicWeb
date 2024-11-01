import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ButtonStyleComponent } from '@app/shared/button-style/button-style.component';
import { Card } from '@models/card.model';

const MODULES = [ButtonStyleComponent];

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [... MODULES],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  @Input() dataCard!: Card;
  @Output() cardClicked = new EventEmitter<any>();
 
  navigateToDetails(){
    this.cardClicked.emit(this.dataCard);
    
  }

  constructor() { }

  ngOnInit(): void {
    
  }


}
