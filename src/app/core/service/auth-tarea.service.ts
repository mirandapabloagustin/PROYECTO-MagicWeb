import { Injectable } from '@angular/core';
import { Tarea } from '../Models';
import { ApiService } from './api.service';
import { catchError, lastValueFrom, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthTareaService {

  constructor(private apiService : ApiService) { }

  public async obtenerTareas(): Promise<Tarea[]>{
    const respuestaApi = this.apiService.obtenerTareasApi();
    return await lastValueFrom(respuestaApi);
  }

  public async borrarTarea(id: number): Promise<boolean> {
    return await lastValueFrom(this.apiService.borraTareaApi(id));
  }


  public async crearTarea(titulo:string , descripcion:string) : Promise<boolean>{
    const tarea = new Tarea(null);
    tarea.id = await this.contarTareas() + 1;
    tarea.titulo = titulo;
    tarea.descripcion = descripcion;

    return lastValueFrom(this.apiService.crearTareaApi(tarea)).then(
      respuesta => true
    ).catch(error => false);
  }

  public async contarTareas(): Promise<number> {
    const respuestaApi = this.apiService.obtenerTareasApi();
    return await lastValueFrom(respuestaApi)
    .then(
      tareas => tareas.length
    ).catch(error => 0);
  }
}
