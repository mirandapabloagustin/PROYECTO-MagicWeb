import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flip-card',
  standalone: true,
  imports: [],
  templateUrl: './flip-card.component.html',
  styleUrl: './flip-card.component.css'
})
export class FlipCardComponent implements OnInit {
  
  ngOnInit(): void {
    console.log(this.infoCards);
  }

  @Input() infoCards: any;



}
