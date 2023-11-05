import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/Models';
import { AuthTareaService } from 'src/app/core/service/auth-tarea.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerOk :boolean = true;
  newRegister: User = new User();

  constructor(
    private router: Router,
    private authTareaService: AuthTareaService
  ) { }


  public goToLogin() {
    this.router.navigate(["/auth/login"])
  }

  public registerUser() {
    this.authTareaService.registerNewUser(this.newRegister)
    .then((response) => {
      if (response) {
        this.router.navigate(["/home/home-page"]);
      } else {
        const modificarComponente = document.querySelector(".card-background") as HTMLElement;
        modificarComponente.classList.toggle("card-background-error");
        setTimeout(() => {
          modificarComponente.classList.remove("card-background-error");
          modificarComponente.classList.add("card-background");
        }, 1000);
        this.registerOk = false;
      }
    });
  }
}
