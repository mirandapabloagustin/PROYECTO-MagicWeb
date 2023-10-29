import { Injectable } from '@angular/core';
import { Tarea } from '../Models';
import { ApiService } from './api.service';
import { lastValueFrom } from 'rxjs';

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
}
