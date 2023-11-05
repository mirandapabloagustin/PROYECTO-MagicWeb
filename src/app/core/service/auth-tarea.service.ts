import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom,forkJoin } from 'rxjs';
import { ApiService } from './api.service';
import { User } from '../Models';

@Injectable({
  providedIn: 'root'
})
export class AuthTareaService {
  userLogin: User[] = [];
  
  constructor(
    private http: HttpClient,
    private apiService: ApiService
    ) { }
    
    
    //@param user
    //@returns boolean
    //This method authenticate a user in the database whit the email and password 
    public async authNewUserRegister(user: User): Promise<boolean> {
      let newUserRegister: User[] = [];
      try {
          const [emailResult, nickNameResult] = await lastValueFrom(
              forkJoin([
                  this.apiService.authEmailUserRegister(user.email!),
                  this.apiService.authNickNameUserRegister(user.nickName!)
              ])
          );
          newUserRegister = [...emailResult, ...nickNameResult]; // Combinar los resultados

      } catch (error) {
          console.log(error);
      }
      return newUserRegister.length === 0;
  }

  //@param user
  //@returns boolean
  //This method register a new user in the database
  public async registerNewUser(user: User): Promise<boolean> {
    let registerOk = false;
    try {
      if (user.nickName && user.email) {
        registerOk = await this.authNewUserRegister(user);
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
  public async authUserLogin(email: string, password: string): Promise<boolean> {
    try {
      this.userLogin = await lastValueFrom(this.apiService.authUserRegister(email, password));
    } catch (error) {
      console.log(error);
    }
    return this.userLogin.length === 1;
  }


}
