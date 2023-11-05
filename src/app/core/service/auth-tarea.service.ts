import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { ApiService } from './api.service';
import { User } from '../Models';

@Injectable({
  providedIn: 'root'
})
export class AuthTareaService {
  newUserRegister: User[] = [];
  userLogin: User[] = [];

  constructor(
    private http: HttpClient,
    private apiService: ApiService
  ) { }


  //@param user
  //@returns boolean
  //This method authenticate a user in the database whit the email and password 
  public async autehnticateNewUserRegister(user: User): Promise<boolean> {
    try {
      this.newUserRegister = await lastValueFrom(this.apiService.autehnticateEmailUserRegister(user.email!));
      this.newUserRegister = await lastValueFrom(this.apiService.autehnticateNickNameUserRegister(user.nickName!));
    } catch (error) {
      console.log(error);
    }
    return this.newUserRegister.length === 0;
  }

  //@param user
  //@returns boolean
  //This method register a new user in the database
  public async registerNewUser(user: User): Promise<boolean> {
    let registerOk = false;
    try {
      if (user.nickName && user.email) {
        registerOk = await this.autehnticateNewUserRegister(user);
        if (registerOk) {
          await lastValueFrom(this.apiService.registerUser(user));
        }
      }
    } catch (error) {
      console.log(error);
    }
    return registerOk;
  }

  //@param email
  //@param password
  //@returns boolean
  //This method authenticate a user in the database whit the email and password
  public async autehnticateUserLogin(email: string, password: string): Promise<boolean> {
    try {
      this.userLogin = await lastValueFrom(this.apiService.autehnticateUserRegister(email, password));
    } catch (error) {
      console.log(error);
    }
    return this.userLogin.length === 1;
  }


}
