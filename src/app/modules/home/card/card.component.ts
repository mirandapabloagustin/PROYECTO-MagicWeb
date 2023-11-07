import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() carta: any;
  @Input() carta2: any[]=[];

  constructor(
    private router: Router,
  ) { }


  async ngOnInit(): Promise<void> {
  }

  public dataCard() {
    this.router.navigate(['/card']);
  }

}
