import { Component } from '@angular/core';
import {
  faMapLocationDot,
  faEnvelope,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const COMPONENTS = [FontAwesomeModule];

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [COMPONENTS],
  template: `
    <footer>
      <header>
        <nav>
          <div class="web">
            <div class="web-info">
              <h4>DESCKFORGE</h4>
              <span
                >Tu plataforma ideal para explorar el magnífico mundo de Magic:
                The Gathering.</span
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
                <a
                  class="link"
                  href="https://maps.app.goo.gl/qtfNgTcP8xTfCeecA"
                >
                  <fa-icon [icon]="icons[0]"></fa-icon>
                  Buque Pesquero Dorrego N° 281
                </a>
              </li>
              <li>
                <a
                  class="link"
                  href="mailto:informes@mdp.utn.edu.ar?subject=Cosulta"
                >
                  <fa-icon [icon]="icons[1]"></fa-icon>
                  informes&#64;mdp.utn.edu.ar
                </a>
              </li>
              <li>
                <a class="link">
                  <fa-icon [icon]="icons[2]"></fa-icon>
                  +54 (0223) 480-1220
                </a>
              </li>
            </ul>
          </div>

          <div class="social">
            <h4>Social</h4>
            <div class="social-links">
              <a
                class="link-social"
                href="https://www.facebook.com/utnmardelplata"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="44"
                  height="44"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#3F51B5"
                    d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"
                  ></path>
                </svg>
              </a>

              <a
                href="https://www.instagram.com/utnmardelplata/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="44"
                  height="44"
                  viewBox="0 0 48 48"
                >
                  <radialGradient
                    id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                    cx="19.38"
                    cy="42.035"
                    r="44.899"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#fd5"></stop>
                    <stop offset=".328" stop-color="#ff543f"></stop>
                    <stop offset=".348" stop-color="#fc5245"></stop>
                    <stop offset=".504" stop-color="#e64771"></stop>
                    <stop offset=".643" stop-color="#d53e91"></stop>
                    <stop offset=".761" stop-color="#cc39a4"></stop>
                    <stop offset=".841" stop-color="#c837ab"></stop>
                  </radialGradient>
                  <path
                    fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                    d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                  ></path>
                  <radialGradient
                    id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                    cx="11.786"
                    cy="5.54"
                    r="29.813"
                    gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#4168c9"></stop>
                    <stop
                      offset=".999"
                      stop-color="#4168c9"
                      stop-opacity="0"
                    ></stop>
                  </radialGradient>
                  <path
                    fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                    d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                  ></path>
                  <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
                  <path
                    fill="#fff"
                    d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                  ></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/utnmardelplata/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="44"
                  height="44"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#0078d4"
                    d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"
                  ></path>
                  <path
                    d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
                    opacity=".05"
                  ></path>
                  <path
                    d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
                    opacity=".07"
                  ></path>
                  <path
                    fill="#fff"
                    d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
                  ></path>
                </svg>
              </a>
            </div>
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
    width: 150px;
  }

  ul{
    list-style: none;
    padding-top: 1rem;
  }

  li{
    padding-bottom: 1rem;
  
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
    width: 300px;
  }

  .social{
    width: 200px;
  }

  .social-links{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 0.5rem;
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
      padding-top: 1.5rem;
      text-align: center;
    }

    .contacto{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .social{
      width: 100%;
    }

    .social-links{
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      padding-top: 1rem;
    }

  }

  `,
})
export class FooterComponent {
  icons = [faMapLocationDot, faEnvelope, faPhone];
}
