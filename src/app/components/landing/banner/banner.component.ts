import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  template: `
    <section>
      <div class="banner">
        <div class="title">
          <h1>¡Magic DesckForge!</h1>
          <h2>Tu herramienta definitiva para explorar Magic: The Gathering.</h2>
        </div>
        <!--
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2b2b2b" fill-opacity="0.9" d="M0,0L120,48C240,96,480,192,720,240C960,288,1200,288,1320,288L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
-->
      </div>
    </section>
  `,
  styles: `
  .banner {
    background-image: url('public/banner/b-fondo.jpg');
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  svg{
    width: 100%;
    position: absolute;
  }

  .title{
    padding: 1rem;
    text-align: center;
  }

  h1, h2{
    color: white;
    margin: 0;
    text-shadow: 6px 4px 6px rgba(0,0,0,0.5);
  }

  h1{
    font-size: 4rem;
  }

  h2{
    font-size: 2rem;
  }

  @media (max-width: 952px){

    h1{
      font-size: 3rem;
    }

    h2{
      font-size: 1.5rem;

    }

  }

  
  `,
  encapsulation: ViewEncapsulation.Emulated,
})
export class BannerComponent {}
