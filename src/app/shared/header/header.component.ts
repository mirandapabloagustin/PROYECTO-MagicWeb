
import { Router} from '@angular/router';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import{faHatWizard, faHeart,faScroll, faDungeon, faAddressCard,faLaptopCode, faWandMagicSparkles} from '@fortawesome/free-solid-svg-icons';


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
  icon6 = faLaptopCode;
  icon7 = faWandMagicSparkles;

  constructor(private enrutamiento:Router) { }

  isSticky: boolean = false;
  elementPosition: any;
  userLoggedIn:boolean= false;


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

goToAbout(){
  this.enrutamiento.navigate(['aterrizaje#about']);

}

goToReglas(){
  this.enrutamiento.navigate([ 'aterrizaje#reglas']);
}


scrollToSection(sectionId: string, sectionId2 : Array<string>) {
const element=document.getElementById(sectionId);
const otherElements = sectionId2.map((id) => document.getElementById(id));

if(element){
  element.classList.remove('hidden-section');
  element.scrollIntoView({behavior:'smooth', block:'start'});
  otherElements.forEach((element2:any) => element2.classList.add('hidden-section'));
}
}

  
}


// hideSections(exceptSectionId: any) {
//   const sections = document.querySelectorAll('.container');
//   sections.forEach((section) => {
//     const sectionId = section.getAttribute('id');
//     if (sectionId !== exceptSectionId) {
//       section.classList.add('hidden-section');
//     }
//   });

// }

// scrollToSection(sectionId: string) {
    
//   const sections = document.querySelectorAll('.container');
//   sections.forEach((section) => {
//     section.classList.add('hidden-section');
//   });


//   const element = document.getElementById(sectionId);
//   if (element) {
//     element.classList.remove('hidden-section');
//     element.scrollIntoView({ behavior: 'smooth' });
//   }

// }

// }
