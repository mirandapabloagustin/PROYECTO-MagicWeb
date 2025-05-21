import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@app/core/models/user.model';
import { Observable } from 'rxjs';
import { enviorment } from 'src/enviroments/enviroment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _ev = enviorment.apiUser;

  private _typeEndpoint = [
    'users',
  ];

  constructor(
    private http: HttpClient
  ) { }


  /**
   * @description
   * Metodo que obtiene todos los usuarios
   * @returns {Observable<User>} Retorna un observable con un array de usuarios.
   */
  all(): Observable<User[]>  {
    return this.http.get<User[]>(`${this._ev}/${this._typeEndpoint[0]}`);
  }

  /**
   * @description
   * Metodo que obtiene un usuario por su id
   * @param { number } id - Id del usuario a obtener.
   * @returns { Observable<User[]> } Retorna un observable con un array de usuarios.
   */
  getById(id: string): Observable<User[]>  {
    return this.http.get<User[]>(`${this._ev}/users?id=${id}`);
  }


  /**
   * @description
   * Metodo que crea un usuario
   * @param { User } user - Usuario a crear.
   * @returns { Observable<User> } Retorna un observable con un usuario.
   */
  
  createUser(user: User): Observable<User>  {
    return this.http.post<User>(`${this._ev}/${this._typeEndpoint[0]}`, user);
  }

  /**
   * @description
   * Metodo que actualiza un usuario
   * @param { User } user - Usuario a actualizar.
   * @returns { Observable<User> } Retorna un observable con un usuario.
   */

  update(user: User): Observable<User>  {
    return this.http.put<User>(`${this._ev}/${this._typeEndpoint[0]}/${user.id}`, user);
  }

  /**
   * @description
   * Metodo que elimina un usuario
   * @param { string } id - Id del usuario a eliminar.
   * @returns { Observable<User> } Retorna un observable con un usuario.
   */

  deleteUser(id: string): Observable<User>  {
    return this.http.delete<User>(`${this._ev}/${this._typeEndpoint[0]}/${id}`);
  }


  /**
   * @description
   * Metodo que obtiene un usuario por su email
   * @param { string } email - Email del usuario a obtener.
   * @returns { Observable<User[]> } Retorna un observable con un array de usuarios.
   */
  authUser(nick: string, password: string): Observable<User[]> {
    return this.http.get<User[]>(`${this._ev}/users?nick=${nick}&password=${password}`);
  }
  
  /**
   * @description
   * Metodo que obtiene un usuario por su email
   * @param { string } email - Email del usuario a obtener.
   * @returns { Observable<boolean> } Retorna un observable con un booleano.
   */

  getUserByEmail(email: string): Observable<boolean> {
    return this.http.get<User[]>(`${this._ev}/${this._typeEndpoint[0]}`).pipe(
      map(users => users.some(user => user.email === email))
    );
  }

  /**
   * @description
   * Metodo que obtiene un usuario por su nick
   * @param { string } nick - Nick del usuario a obtener.
   * @returns { Observable<boolean> } Retorna un observable con un booleano.
   */
  getUserByNick(nick: string):  Observable<boolean> {
    return this.http.get<User[]>(`${this._ev}/${this._typeEndpoint[0]}`).pipe(
      map(users => users.some(user => user.nick === nick))
    );
  }

  
}
