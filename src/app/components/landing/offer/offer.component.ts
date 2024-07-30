import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [],
  template: `
    <section>
      <div class="content-top">
        <h2>Nuestros Servicios</h2>
        <span
          >Al ingresar a nuestra plataforma web, podrás utilizar nuestras
          múltiples herramientas que transformarán tu forma de vivir esta
          experiencia.</span
        >
      </div>

      <div class="imga"></div>
      <ul>
        <li>
          <article>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-map-search"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5" />
              <path d="M9 4v13" />
              <path d="M15 7v5" />
              <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M20.2 20.2l1.8 1.8" />
            </svg>
            <h3>Explora</h3>
            <span
              >Adéntrate en el vasto mundo de Magic. Encuentra nuevas
              estrategias, cartas y formas de jugar, aprende sobre las últimas
              expansiones.</span
            >
          </article>
        </li>
        <li>
          <article>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-books"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M5 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"
              />
              <path
                d="M9 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"
              />
              <path d="M5 8h4" />
              <path d="M9 16h4" />
              <path
                d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041z"
              />
              <path d="M14 9l4 -1" />
              <path d="M16 16l3.923 -.98" />
            </svg>
            <h3>Gestiona</h3>
            <span>
              Puedes administrar el nombre de cada uno de tus mazos para que
              tengan su propia esencia. Organiza tus cartas, clasifica tus mazos
              y mantén tu colección siempre a punto.
            </span>
          </article>
        </li>
        <li>
          <article>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-search"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>
            <h3>Busca</h3>
            <span>
              Contamos con una de las bibliotecas más actualizadas de Magic.
              Descubre nuevas cartas y mucho más. Encuentra rápidamente lo que
              necesitas.
            </span>
          </article>
        </li>
      </ul>
    </section>
  `,
  styles: `
    section{
      background-color: var(--bg-green-color);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 4rem;
    }

    .content-top{
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-top: 2rem;
      margin-bottom: 2rem;
      margin-left: auto;
      margin-right: auto;
    }

    h2{
      color: var(--letter-color);
      font-size: 3rem;
    }

    span{
      color: var(--letter-color);
      font-size: 1rem;
      text-align: center;
      padding: 1rem;
    }

    ul{
      display: flex;
      gap: 2rem;
      margin-top: 5rem;
      margin-bottom: 2rem;

    }

    li{
      display: flex;
      justify-content: center;
      width: 350px;
    }

    
    article {
      border-radius: 8px;
      gap: 16px;
      display: flex;
      align-items: center;
      flex-direction: column;
      text-align: center;
      padding: 16px;
      height: 100%;
    }

    svg{
      color: var(--letter-color);
    }

    h3 {
      color: var(--letter-color);
      font-size: 2rem;
    }

    span{
      color: var(--letter-color);
      font-size: 1.2rem;
      line-height: 1.58;
      letter-spacing: -0.004em;
    }

    @media (max-width: 768px) {
      section {
        padding: 1rem;
      }

      h2 {
        font-size: 2rem;
      }

      span {
        font-size: 1rem;
      }

      ul {
        flex-direction: column;
      }

      li {
        width: 100%;
      }

      article {
        height: auto;
      }

      h3 {
        font-size: 1.5rem;
      }

      span {
        font-size: 0.8rem;
      }
    }

  `,
  encapsulation: ViewEncapsulation.Emulated,
})
export class OfferComponent {
  imagen = './public/offer/map-search.png';

  servicesInfo = [
    {
      title: '',
      description: '',
    },
    {
      title: 'Gestiona',
      description:
        'Puedes administrar el nombre de cada uno de tus mazos para que tengan su propia esencia. Organiza tus cartas, clasifica tus mazos y mantén tu colección siempre a punto.',
    },
    {
      title: 'Busca',
      description:
        'Contamos con una de las bibliotecas más actualizadas de Magic. Descubre nuevas cartas y mucho más. Encuentra rápidamente lo que necesitas.',
    },
  ];
}
