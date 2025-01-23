import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import {
  faHatWizard,
  faRightFromBracket,
  faBars,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router, RouterLink } from '@angular/router';
import { AuthUserService } from '@services/user/auth-user.service';
import { statusLogged } from '@services/guard/auth.guard';




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
  public statusLogin = false;
  userName = 'Anonimo';
  icons = [faHatWizard, faUser, faRightFromBracket, faBars];

  constructor(
    private _router: Router,
    private _serviceUser: AuthUserService,
  ) { }

  ngOnInit() {
    statusLogged.subscribe((status) => {
      if (status !== null) {
      this.statusLogin = status;
      }
    });
  }

  logout() {
    this.statusLogin = false;
    this._serviceUser.logoutUser();
    this._router.navigate(['/landing']);
  }


}
