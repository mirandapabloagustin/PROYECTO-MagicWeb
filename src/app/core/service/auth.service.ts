import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { User } from '../Models';
import { Observable, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private apiService : ApiService
  ) { }

  
  public async userVerification(email : string, password : string): Promise<boolean>{
    let user : User[]=[];
    try{
      user = await lastValueFrom(this.apiService.authenticationUser(email, password));
    } catch (error) {
      console.error(error);
      return false;
    }
    return user.length ==1;
  }

  public async userRegistration(user : User): Promise<boolean>{
    let registrarion : boolean = false;
    this.apiService.createUser(user).subscribe(
      {
        next: () => {
          registrarion = true;
        },
        error: error => {
          console.error(error);
        }
      }
    )
    return registrarion;
  }

  public async userNameVerificacion(userName : string): Promise<boolean>{
    let user : User[]=[];
    try{
      user = await lastValueFrom(this.apiService.getUserName(userName));
    } catch (error) {
      console.error(error);
      return false;
    }
    return user.length ==1;
  }

  

  public async userUpdate(user : User): Promise<boolean>{
    let update : boolean = false;
    this.apiService.updateUser(user).subscribe(
      {
        next: () => {
          update = true;
        },
        error: error => {
          console.error(error);
        }
      }
    )
    return update;
  }

  public verifyFields(email:string,password:string, userRegister:User):boolean{
    return (email == userRegister.email && password == userRegister.password) ? true : false;
  }
































}

