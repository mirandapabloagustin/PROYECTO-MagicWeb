import { Component } from '@angular/core';
import { AuthTareaService } from 'src/app/core/service/auth-tarea.service';

@Component({
  selector: 'app-carga-cliente',
  templateUrl: './carga-cliente.component.html',
  styleUrls: ['./carga-cliente.component.css']
})
export class CargaClienteComponent {

  camposCompletos : boolean|undefined;
  titulo: string = "";
  descripcion: string = "";

  constructor(
    private authTareaService: AuthTareaService
  ) { }

  async cargarTarea(){
    this.camposCompletos = await this.authTareaService.crearTarea(this.titulo, this.descripcion);
    if(this.camposCompletos){
      this.titulo = "";
      this.descripcion = "";
    }
  }

}
