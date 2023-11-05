import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/Models';
import { AuthTareaService } from 'src/app/core/service/auth-tarea.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  userLogin: User = new User();
  loginOk :boolean = true;

  constructor(
    private router: Router,
    private authTareaService: AuthTareaService
    ) {}

  ngOnInit(): void {

  }

  public loginUser(){
    this.authTareaService.authUserLogin(this.userLogin.email!, this.userLogin.password!).then((response) => {
      if (response) {
        this.router.navigate(["/home/home-page"]);
      } else {
        const modificarComponente = document.querySelector(".card-background") as HTMLElement;
        modificarComponente.classList.toggle("card-background-error");
        setTimeout(() => {
          modificarComponente.classList.remove("card-background-error");
          modificarComponente.classList.add("card-background");
        }, 1000);
        this.loginOk = false;
      }
    });
  }
  

  goToRegister(){
    this.router.navigate(['auth/register']);
  }

}
