import { Component } from '@angular/core';
import{ HostListener } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isSticky = true;
    constructor(private enrutamiento : Router) { }

    public irAlLogin(){
      this.enrutamiento.navigate(['auth/login']);
    }
    
        
  @HostListener('window:scroll', ['$event'])
  handleScroll(event: Event): void {
    this.isSticky = window.scrollY > 0;
  }

}

