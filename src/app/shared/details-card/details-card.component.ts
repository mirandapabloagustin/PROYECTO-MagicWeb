import { Component, Input } from '@angular/core';
import { ManaComponent } from "../mana/mana.component";


@Component({
  selector: 'app-details-card',
  standalone: true,
  imports: [ManaComponent],
  templateUrl: './details-card.component.html',
  styleUrl: './details-card.component.css'
})
export class DetailsCardComponent {
  @Input() cardData?:any;


}
