import { Component } from '@angular/core';
import{ HostListener } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    constructor(private enrutamiento : Router) { }

    public goToLogin(){
      this.enrutamiento.navigate(['auth/login']);
    }
    
        


}

