import { Component } from '@angular/core';
import { HeaderComponent } from '@shared/header/header.component';
import { BannerComponent } from './banner/banner.component';
import { OfferComponent } from './offer/offer.component';

const SHARED_COMPONENTS = [HeaderComponent, BannerComponent, OfferComponent];

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [SHARED_COMPONENTS],
  template: `
    <app-header />

    <main>
      <section>
        <app-banner />
        <app-offer />
      </section>
    </main>
    
  `,
  styles: `
  main{
    position: relative;

    background-image: url('public/landing/b-land.png'); 
    background-size: cover; 
    background-position: center; 
    background-attachment: fixed; 
    background-repeat: no-repeat; 
  }

  section{
            position: relative;
            z-index: 1; /* Asegura que el contenido esté sobre la imagen de fondo */
        }

  
  `
})
export class LandingComponent {

}
