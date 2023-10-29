import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Usuario, Tarea } from '../Models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private ruta = "http://localhost:3000";

  constructor(private rutaHttp: HttpClient) { }

  public obtenerUsuariosPorEmailYContrasenia(email: string, password: string): Observable<Usuario[]> {
    return this.rutaHttp.get<Usuario[]>(`${this.ruta}/usuarios?email=${email}&password=${password}`);
  }

  public obtenerTareasApi(): Observable<Tarea[]> {
    return this.rutaHttp.get<Tarea[]>(`${this.ruta}/tareas`);
  }

  public borraTareaApi(id: number): Observable<boolean> {
    return this.rutaHttp.delete<Tarea>(`${this.ruta}/tareas/${id}`).pipe(
      map(respuesta=> true),
      catchError(error => of(false))
    );
  }


}
