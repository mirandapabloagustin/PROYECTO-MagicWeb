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

  getUsers(): Observable<User>  {
    return this.http.get<User>(`${this._ev}/${this._typeEndpoint[0]}`);
  }


  getUserById(id: number): Observable<User>  {
    return this.http.get<User>(`${this._ev}/${this._typeEndpoint[0]}/${id}`);
  }


  createUser(user: User): Observable<User>  {
    return this.http.post<User>(`${this._ev}/${this._typeEndpoint[0]}`, user);
  }



  updateUser(user: User): Observable<User>  {
    return this.http.put<User>(`${this._ev}/${this._typeEndpoint[0]}/${user.id}`, user);
  }


  deleteUser(id: string): Observable<User>  {
    return this.http.delete<User>(`${this._ev}/${this._typeEndpoint[0]}/${id}`);
  }


  authUser(nick: string, password: string): Observable<User[]> {
    return this.http.get<User[]>(`${this._ev}/users?nick=${nick}&password=${password}`);
  }
  

  getUserByEmail(email: string): Observable<boolean> {
    return this.http.get<User[]>(`${this._ev}/${this._typeEndpoint[0]}`).pipe(
      map(users => users.some(user => user.email === email))
    );
  }

  getUserByNick(nick: string):  Observable<boolean> {
    return this.http.get<User[]>(`${this._ev}/${this._typeEndpoint[0]}`).pipe(
      map(users => users.some(user => user.nick === nick))
    );
  }

  
}
