import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'http://localhost:3000';

  constructor( 
    private http: HttpClient 
    ) { }

  public authenticationUser( email : string, password : string): Observable<User[]>{
    return this.http.get<User[]>(`${this.url}/users?email=${email}&password=${password}`);
  }

  public getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.url}/users`);
  }

  public getUserById(id: number): Observable<User[]>{
    return this.http.get<User[]>(`${this.url}/users?id=${id}`);
  }

  public createUser(user: User): Observable<User>{
    return this.http.post<User>(`${this.url}/users`, user);
  }

  public updateUser(user: User): Observable<User>{
    return this.http.put<User>(`${this.url}/users/${user.id}`, user);
  }

  public getUserName(name: string): Observable<User[]>{
    return this.http.get<User[]>(`${this.url}/users?name=${name}`);
  }

  

}
