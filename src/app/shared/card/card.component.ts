import { Component, Input } from '@angular/core';
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


}
