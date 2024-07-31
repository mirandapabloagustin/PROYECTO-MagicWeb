import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer>
      <header>
        <nav>
          <div class="web">
            <div class="web-info">
              <h4>DESCKFORGE</h4>
              <span
                >Tu plataforma ideal para explorar el magnífico mundo de Magic:
                The Gathering. Descubre nuevas cartas, gestiona tus mazos y
                mantente al día con las últimas expansiones y noticias del
                juego.</span
              >
            </div>
            <img src="footer/logo.webp" alt="Magic: The Gathering" />
          </div>

          <div class="web-links">
            <h4>Enlaces</h4>
            <ul>
              <li><a href="#">Sobre Magic</a></li>
              <li><a href="#">Nosotros</a></li>
              <li><a href="#">Registrarse</a></li>
              <li><a href="#">Ingresar</a></li>
            </ul>
          </div>

          <div class="contacto">
            <h4>Contacto</h4>
            <ul>
              <li>
                <span class="items">
                  Mar del Plata, Buenos Aires, Argentina
                </span>
              </li>
              <li>
                <span class="items"> informes&#64;mdp.utn.edu.ar</span>
              </li>
              <li>
                <span class="items">+54 (0223) 480-1220</span>
              </li>
            </ul>
          </div>

          <div class="social">
            <h4>Social</h4>
          </div>
        </nav>
      </header>
      <footer class="footer-of-footer">
        <span>© 2023 Equipo Dinamita. Todos los derechos reservados.</span>
      </footer>
    </footer>
  `,
  styles: `
  header{
    background-color: var(--bg-black-color);
    display: flex;
    justify-content: center;
    padding: 4rem 2rem 2rem 2rem;
  }

  span{
    color: var(--text-color);
  }

  h4{
    color: var(--text-color);
    font-size: 1.5rem;
    border-bottom: 2px solid rgb(86, 180, 124);
  }

  nav{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    gap: 1rem;
  }

  .web{
    width: 250px;
    display: flex;
    flex-direction: column;
  }

  .web-info{
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  img{
    height: 100px;
    padding-top: 1rem;
  }

  .web-links{
    width: 250px;
  }

  ul{
    list-style: none;
    padding-top: 0.5rem;
  }

  li{
    line-height: 30px;
  }

  a{
    color: var(--text-color);
    font-size: 1rem;
    text-transform: uppercase;
  }

  a:hover{
    transition: .3s
    cursor: pointer;
    transition: 0.2s;
    border-bottom: 2px solid rgb(86, 180, 124);
    padding-bottom: 5px;
  }

  .contacto{
    width: 250px;
  }
  
  .footer-of-footer {
    background-color: var(--bg-black-color-hover);
    display: flex;
    justify-content: center;
    padding: 1rem;
  }


  @media (max-width: 768px){
    header{
      padding: 4rem 3rem 4rem 3rem;
    }

    nav{
      flex-direction: column;
      gap: 3rem;
    }

    h4{
      width: 100%;
      text-align: center;
    }

    span{
      text-align: center;
    }

    .web{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .web-links{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    ul{
      padding-top: 0.5rem;
      text-align: center;
    }


  }

  `,
})
export class FooterComponent {}
