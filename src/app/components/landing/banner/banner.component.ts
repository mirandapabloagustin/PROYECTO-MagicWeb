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
     
      </div>
    </section>
  `,
  styles: `
  .banner {
    background-image: url('public/banner/b-fondo.webp');
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
    color: #eee;
    margin: 0;
    text-shadow: var(--text-shadow) var(--shadow-color);
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
