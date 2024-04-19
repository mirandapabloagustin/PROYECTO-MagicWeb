import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardMode } from '../model/cardsModel';

@Component({
  selector: 'app-card-mode',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-mode.component.html',
  styleUrls: ['./card-mode.component.css']
})
export class CardModeComponent {
@Input() cardsMode!: CardMode;
}
