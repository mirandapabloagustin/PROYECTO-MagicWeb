import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthApiScrifallService } from 'src/app/core/service/serviceApiScryfall/auth-api-scrifall.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() carta: any;

  constructor(
    private router: Router,
  ) { }


  async ngOnInit(): Promise<void> {
 
  }

  public dataCard() {
    this.router.navigate(['/card']);
  }

}
