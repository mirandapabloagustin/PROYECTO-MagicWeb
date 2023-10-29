import { Component, EventEmitter, OnInit, } from '@angular/core';
// para conectar con la API
import { ApiService } from 'src/app/core/service/api.service';
//para Redireccionar
import { Router } from '@angular/router';
//para usar las Clases
import { Usuario } from 'src/app/core/Models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  estado: boolean | undefined;
  
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
    
    
    public inicioSesion() {
    this.servicioApi.obtenerUsuariosPorEmailYContrasenia(this.usuarioInicio.email!, this.usuarioInicio.password!).subscribe(
      {
        next: (resultado) => {
          this.estado=true;
          if (resultado.length == 1) {
            setTimeout(() => {
              this.enrrutamiento.navigate(["/home/pagina-principal"]);
            }, 1500);
          }else{
            this.estado = false;
         }

        }, error: (errorEncontrado) => {
          console.log(errorEncontrado);
        }
      }
    )
  }


}
