import { Injectable } from '@angular/core';
import { lastValueFrom, forkJoin } from 'rxjs';
import { ApiService } from './api.service';
import { User } from '../Models';

@Injectable({
  providedIn: 'root'
})


export class AuthTareaService {

  private userLogin: User | null | undefined;

  constructor(
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
  //and save the token in the local storage
  public async registerNewUser(user: User): Promise<boolean> {
    let registerOk = false;
    try {
      if (user.nickName && user.email) {
        registerOk = await this.authNewUserRegister(user);
        if (registerOk) {
          this.userLogin = await lastValueFrom(this.apiService.registerUser(user));
          localStorage.setItem('token', this.userLogin.toString());
        }
      }
    } catch (error) {
      console.log(error);
    }
    return registerOk;
  }

  //@param email and password
  //@returns boolean
  //This method authenticate a user in the database whit the email and password
  //and save the token in the local storage
  public async authUserLogin(email: string, password: string): Promise<boolean> {
    let isLogin = false;
    try {
      let response = await lastValueFrom(this.apiService.authUserRegister(email, password));
      this.userLogin = response[0];
      if (this.userLogin) {
        localStorage.setItem('token', this.userLogin.toString());
        isLogin = true;
      }
    } catch (error) {
      console.log(error);
    }
    return isLogin;
  }


  //@param user
  //@returns boolean
  //This method update a user in the database
  public async updateUser(user: User): Promise<boolean> {
    let isUpdate = false;
    try {
      if (user.id) {
        isUpdate = await lastValueFrom(this.apiService.updateUserApi(user));
      }
    } catch (error) {
      console.log(error);
    }
    return isUpdate;
  }


  //@returns User | undefined
  //This method return the current user 
  public getCurrentUser(): User | undefined {
    if (!this.userLogin) {
      return undefined;
    }
    return structuredClone(this.userLogin);
  }

  //@returns void
  //This method logout a user
  public logoutUser(): void {
    this.userLogin = undefined
    localStorage.clear();
  }

  //@returns boolean
  //This method check if a user is login
  public checkUserLogin(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  //@param user
  //@returns void
  //This method update the current user in the local storage
  public userChaceUpdate( user: User){
    if(user){
      this.userLogin = user;
      localStorage.clear();
      localStorage.setItem('token', this.userLogin.toString());
    }
  }


}
