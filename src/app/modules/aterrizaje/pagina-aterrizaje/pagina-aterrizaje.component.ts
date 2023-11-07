
import { Component,NgModule,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{faHeart,faWandSparkles,faLaptopCode,faScroll} from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-pagina-aterrizaje',
  templateUrl: './pagina-aterrizaje.component.html',
  styleUrls: ['./pagina-aterrizaje.component.css']
})

export class PaginaAterrizajeComponent implements OnInit {
  icon1=faHeart;
  icon2=faWandSparkles;
  icon3=faLaptopCode;
  icon4=faScroll;


  constructor(private enrutamiento : Router) { }

  ngOnInit(): void {
  }

  irAlLogin(){
    this.enrutamiento.navigate(['auth/login']);
  }

  scrollToSection(sectionId: string) {
    
    const sections = document.querySelectorAll('.container');
    sections.forEach((section) => {
      section.classList.add('hidden-section');
    });

 
    const element = document.getElementById(sectionId);
    if (element) {
      element.classList.remove('hidden-section');
      element.scrollIntoView({ behavior: 'smooth' });
    }

}
  unfixBanner(){
    const element = document.getElementsByClassName('banner');
    if (element) {
      element[0].classList.remove('fixed');
    }
  }


      hideSections(exceptSectionId: any) {
        const sections = document.querySelectorAll('.container');
        sections.forEach((section) => {
          const sectionId = section.getAttribute('id');
          if (sectionId !== exceptSectionId) {
            section.classList.add('hidden-section');
          }
        });
      }

}

