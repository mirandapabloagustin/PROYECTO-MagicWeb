import { Component, OnInit } from '@angular/core';
// para conectar con la API
import { ApiService } from 'src/app/core/service/api.service';
//para Redireccionar
import { Router } from '@angular/router';
//para usar las Clases
import { Usuario } from 'src/app/core/Models';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public usuarioInicio: Usuario = new Usuario(null);

  ngOnInit(): void {
  }

  constructor(
    private servicioApi: ApiService,
    private enrrutamiento: Router
  ) { }


  public inicioSesion() {
    this.servicioApi.obtenerUsuariosPorEmailYContrasenia(this.usuarioInicio.email!, this.usuarioInicio.password!).subscribe(
      {
        next: (resultado) => {
          if (resultado.length == 1) {
            this.enrrutamiento.navigate(["/home/pagina-principal"]);
          }
        },error: (errorEncontrado) =>{
          console.log(errorEncontrado);
        }
      }
    )
  }


}
