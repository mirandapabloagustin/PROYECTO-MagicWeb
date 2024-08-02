import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-about-banner',
  standalone: true,
  imports: [],
  template: `
    <section>
      <div class=""></div>
      <div class="content-about">
        <h1>NUESTRO EQUIPO</h1>

        <div class="content-text">
          <p>
            Nuestro equipo nació inicialmente de la amistad generada durante las
            clases, pero pronto la carrera nos solicitó formar equipos de trabajo
            para enfrentar cada uno de los proyectos evaluativos.
          </p>
          <p>
            Al principio, nuestro enfoque era simplemente cumplir con las
            consignas, pero rápidamente nos dedicamos a dejar nuestra propia
            personalidad y estilo en cada tarea, transformando una obligación
            académica en una verdadera pasión.
          </p>
          <p>
            Cada miembro de nuestro equipo aporta su experiencia y visión,
            asegurando que cada proyecto no solo cumpla con sus objetivos, sino
            que también refleje nuestra originalidad.
          </p>
        </div>
      </div>
    </section>
  `,
  styleUrl: './about-banner.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class AboutBannerComponent {}
