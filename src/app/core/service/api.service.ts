import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Models';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(
    private http: HttpClient
  ) { }


  public registerUser(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:3000/users', user)
  }

  public autehnticateEmailUserRegister(email:string ): Observable<User[]> {
    return this.http.get<User[]>(`http://localhost:3000/users?email=${email}`)
  }

  public autehnticateNickNameUserRegister(nickName:string ): Observable<User[]> {
    return this.http.get<User[]>(`http://localhost:3000/users?nickName=${nickName}`)
  }

  public autehnticateUserRegister(email:string, password:string ): Observable<User[]> {
    return this.http.get<User[]>(`http://localhost:3000/users?email=${email}&password=${password}`)
  }
}
