import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Router } from '@angular/router';
import { ButtonStyleComponent } from '@app/shared/button-style/button-style.component';

const MODULES = [ButtonStyleComponent];

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [... MODULES],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() dataCard: any;
  @Output() idCard = new EventEmitter<string>()

  constructor(private router: Router) {}
 
  navigateToDetails(){
    this.idCard.emit(this.dataCard.id)
  }


}
