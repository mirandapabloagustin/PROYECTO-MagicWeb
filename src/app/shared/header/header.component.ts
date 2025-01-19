import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  faHatWizard,
  faRightFromBracket,
  faBars,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router, RouterLink } from '@angular/router';
import { LocalStorageService } from '@app/core/services/user/local-storage.service';
import { AuthUserService } from '@app/core/services/user/auth-user.service';



const COMPONENTS = [FontAwesomeModule, RouterLink];

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [COMPONENTS],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class HeaderComponent implements OnInit {
  isLogged = false;
  userName = '';
  icons = [faHatWizard, faUser, faRightFromBracket, faBars];

  constructor(
    private _router: Router,
    private _serviceUser: AuthUserService,
    private _localStorageService: LocalStorageService,
  ) { }




  ngOnInit() {
    this.isLogged = this._localStorageService.checkUserLogin('user');
    this._serviceUser.userLogged$.subscribe((name) => {
      this.userName = name;
    });
    console.log(this.isLogged, 'HEADER');
  }

  logout() {
    this._localStorageService.removeItemStorage('user');
    this.isLogged = false;
    this._router.navigate(['/login']);
  }


}
