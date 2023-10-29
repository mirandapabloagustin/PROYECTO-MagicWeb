import { Component, OnInit,EventEmitter,Output, Input } from '@angular/core';
import { Tarea } from 'src/app/core/Models';
import { AuthTareaService } from 'src/app/core/service/auth-tarea.service';


@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {



  @Input() item: string | undefined;



  public tareas: Tarea[] = [];

  constructor
    (private authTareaService: AuthTareaService) { }

  ngOnInit(): void {
    this.obtenerTareas();
  }

  public obtenerTareas(): void {
    this.authTareaService.obtenerTareas().then((tareas) => {
      this.tareas = tareas;
    }).catch((error) => {
      console.log(error);
    });
  }

  public borrarTareaPag(id: number): void {
    this.authTareaService.borrarTarea(id)
      .then(borrado => {
        if (borrado) {
          this.obtenerTareas();
        }
      })
      .catch(error => console.log(error)
      )
  }


}
