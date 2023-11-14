import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Models';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  url: string = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }


  public registerUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.url}/users`, user)
  }

  public authEmailUserRegister(email:string ): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/users?email=${email}`)
  }

  public authNickNameUserRegister(nickName:string ): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/users?nickName=${nickName}`)
  }

  public authUserRegister(email:string, password:string ): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/users?email=${email}&password=${password}`)
  }

  public updateUserApi(user: User): Observable<boolean> {
    return this.http.put<boolean>(`${this.url}/users/${user.id}`, user)
  }

  
}
