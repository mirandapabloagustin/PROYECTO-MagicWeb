import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/Models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public userRegistrarion : User = new User();
  confirmPass : string = "";
  confirmEmail : string = "";

  constructor(
    private router: Router
  ) { }

  
  public goToLogin(){
    this.router.navigate(["/auth/login"])
  }

  

  public checkIn(){


  }

}
