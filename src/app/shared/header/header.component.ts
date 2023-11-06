
import { Router} from '@angular/router';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import{faHatWizard, faHeart,faScroll, faDungeon, faAddressCard} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{
  icon=faHatWizard;
  icon2=faHeart;
  icon3=faAddressCard;
  icon4=faDungeon;
  icon5=faScroll;
  constructor(private enrutamiento:Router) { }

  isSticky: boolean = false;
  elementPosition: any;
  userLoggedIn:boolean= true;


  public goToLogin(){
           this.enrutamiento.navigate(['auth/login']);
         }
    ngOnInit(): void {
      
     
    }

    public logOutRedirect(){
      this.enrutamiento.navigate(['aterrizaje']);}
    


    ngAfterViewInit(){
      this.elementPosition = this.menuElement.nativeElement.offsetTop;
    }
    
    @ViewChild ('stickyMenu') menuElement!: ElementRef;
    
        
  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll >= this.elementPosition) {
      this.isSticky = true;
    } else {
      this.isSticky = false;
    } if (windowScroll === 0) {
      this.isSticky = false;
    }
  }


  getLogoImageSource() {
    return this.isSticky
      ? 'assets/graphics/magic\ logo\ png.png' // New image path when sticky
      : 'assets/logo-footer.png'; // Original image path
  }


logOut(){
  this.userLoggedIn=false;
  this.logOutRedirect();
}

}



