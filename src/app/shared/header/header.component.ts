import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import {
  faHatWizard,
  faRightFromBracket,
  faBars,
  faUser,
  faToolbox,
  faUsers,
  faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router, RouterLink } from '@angular/router';
import { AuthUserService } from '@services/user/auth-user.service';
import { statusLogged } from '@services/guard/auth.guard';
import { User } from '@app/core/models/user.model';
import { LocalStorageService } from '@app/core/services/user/local-storage.service';




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
  userLogged: User | undefined;
  public statusLogin = false;
  icons = [faHatWizard, faUser, faRightFromBracket, faBars, faToolbox,faUsers,faMagnifyingGlass];

  constructor(
    private _router: Router,
    private _serviceUser: AuthUserService,
    private _local: LocalStorageService
  ) { }

  ngOnInit() {
    statusLogged.subscribe((status) => {
      if (status !== null) {
      this.statusLogin = status;
      const user = this._local.getItemStorage();
      if (user) {
      this.userLogged = JSON.parse(user);
      }
    }
    });
  }

  logout() {
    this.statusLogin = false;
    this._serviceUser.logoutUser();
    this._router.navigate(['/landing']);
  }


}
