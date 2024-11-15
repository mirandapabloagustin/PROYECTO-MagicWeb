import { Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import { Card } from '@models/card.model';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const MODULES = [FontAwesomeModule];

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MODULES],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  iconPlus = faPlus;

  @Input() dataCard!: Card;
  @Output() cardClicked = new EventEmitter<any>();
 
  navigateToDetails(){
    //this.cardClicked.emit(this.dataCard);
  }

  constructor() { }

  ngOnInit(): void {
    
  }

  


}
