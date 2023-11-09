import { Component, EventEmitter, Output } from '@angular/core';
import { AuthApiScrifallService } from 'src/app/core/service/serviceApiScryfall/auth-api-scrifall.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {

  constructor(
    private authApiScrifallService: AuthApiScrifallService
  ) { }
  
}
