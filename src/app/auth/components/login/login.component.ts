import { Component, OnInit } from '@angular/core';
// para conectar con la API
import { ApiService } from 'src/app/core/service/api.service';
//para Redireccionar
import { Router } from '@angular/router';
//para usar las Clases
import { Usuario } from 'src/app/core/Models';

import { NgForm } from '@angular/forms';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public usuarioInicio: Usuario = {
    id: null,
    email: null,
    password: null
  };

  ngOnInit(): void {
  }

  constructor(
    private servicioApi: ApiService,
    private enrrutamiento: Router
  ) { }

  yesDog: boolean = false;

  public inicioSesion() {
    this.servicioApi.obtenerUsuariosPorEmailYContrasenia(this.usuarioInicio.email!, this.usuarioInicio.password!).subscribe(
      {
        next: (resultado) => {

          this.yesDog = true;
          setTimeout(() => {
            this.yesDog = false;
          }, 2000);
          if (resultado.length == 1) {

            setTimeout(() => {
              this.enrrutamiento.navigate(["/home/pagina-principal"]);
            }, 2000);
          }

        }, error: (errorEncontrado) => {
          console.log(errorEncontrado);
        }
      }
    )
  }


}
