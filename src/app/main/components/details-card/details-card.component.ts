import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-details-card',
  standalone: true,
  imports: [],
  templateUrl: './details-card.component.html',
  styleUrl: './details-card.component.css'
})
export class DetailsCardComponent {
  @Input() cardId?:string;

}
