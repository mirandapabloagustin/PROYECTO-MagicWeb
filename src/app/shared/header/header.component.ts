
import { Router} from '@angular/router';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';



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
    
    @ViewChild ('stickyMenu') menuElement!: ElementRef;
    
        


}

