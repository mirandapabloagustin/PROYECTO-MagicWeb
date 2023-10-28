import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,map,of } from 'rxjs';
import { Usuario } from '../Models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private ruta = "http://localhost:3000/usuarios";

  constructor(private rutaHttp: HttpClient) { }

  public obtenerUsuariosPorEmailYContrasenia(email : string, password : string): Observable<Usuario[]>{
    return this.rutaHttp.get<Usuario[]>('${this.ruta}/usuarios?email=${email}&password=${password}');
  }

}
