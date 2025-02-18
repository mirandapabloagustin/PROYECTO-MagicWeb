import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from '@app/core/models/user.model';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { ConfirmDialogComponent } from '@app/shared/confirm-dialog/confirm-dialog.component';
import { Router } from '@angular/router';
import { AuthUserService } from '@app/core/services/user/auth-user.service';
import { SnackbarService } from '@app/core/services/snackbar/snackbar.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  @Input() user: User | undefined;
  @Output() showFav = new EventEmitter<boolean>();

  countries = [
    { name: 'Argentina', code: 'AR' },
    { name: 'Bolivia', code: 'BO' },
    { name: 'Brasil', code: 'BR' },
    { name: 'Chile', code: 'CL' },
    { name: 'Colombia', code: 'CO' },
    { name: 'Costa Rica', code: 'CR' },
    { name: 'Cuba', code: 'CU' },
    { name: 'Ecuador', code: 'EC' },
    { name: 'El Salvador', code: 'SV' },
    { name: 'Guatemala', code: 'GT' },
    { name: 'Honduras', code: 'HN' },
    { name: 'México', code: 'MX' },
    { name: 'Nicaragua', code: 'NI' },
    { name: 'Panamá', code: 'PA' },
    { name: 'Paraguay', code: 'PY' },
    { name: 'Perú', code: 'PE' },
    { name: 'República Dominicana', code: 'DO' },
    { name: 'Uruguay', code: 'UY' },
    { name: 'Venezuela', code: 'VE' }
  ];

  constructor(
    private _routes: Router,
    private _matDialog: MatDialog,
    private _serviceUser: AuthUserService,
    private _snackbarService: SnackbarService,
  ) { }

  reloadProfile() {
    this._routes.navigate(['/', this.user?.id]);
  }

  goToDecks() {
    this._routes.navigate([this.user?.id, 'decks']);
  }

  goToFavorites() {
    this.showFav.emit(true);
  }

  editProfile() {
    const dialogEditRef = this._matDialog.open(UserEditComponent, {
      data: this.user,
      panelClass: 'custom-dialog-container'
    });

    dialogEditRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateProfile(result);
      }
    });
  }

  /**
   * Abre un PopUp de confirmación para suspender el perfil del usuario.
   * Si el usuario confirma la suspensión, se elimina el perfil.
   */
  deleteProfile() {
    const dialogConfirmRef = this._matDialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Suspender Perfil',
        message: '¿Estás seguro que deseas suspender tu perfil?'
      }
    });

    dialogConfirmRef.afterClosed().subscribe(result => {
      if (result) {
        this.changeStatusLogged(result);
      }
    });
  }
  /**
   * Transforma el nombre de un país en la bandera del país.
   * @param {string} countryName - Nombre del país.
   * @returns {string} - URL de la bandera del país.
   */
  getFlagImage(countryName: string): string {
    const flag = this.countries.find(country => country.name == countryName);
    return `https://flagcdn.com/w320/${countryName.toLocaleLowerCase()}.png`;
  }
  /**
   * Transforma el código de un país en el nombre del país.
   * @param {string} codeCountry - Código del país.
   * @returns {string} - Nombre del país.
   */
  getCountrie(codeCountry: string): string {
    const value = this.countries.find(country => country.code == codeCountry);
    return value ? value.name : '';
  }
  /**
 * Actualiza las propiedades del usuario obtenidos de popup edicion de usuario.
 * @param {any} mapeo - Objeto que contiene las claves y valores a actualizar.
 * @returns {User} - Devuelve el objeto `User` modificado.
 */
  updateInfo(mapeo: any): User {
    if (this.user) {
      Object.keys(mapeo).forEach(key => {
        if (mapeo[key] !== '' && mapeo[key] !== undefined) {
          (this.user as any)[key] = mapeo[key];
        }
      });

    }
    return this.user as User;
  }
/**
 * Actualiza el perfil del usuario.
 * Primero, verifica si el objeto `mapeo` contiene valores.
 * Si es así, intenta actualizar el perfil del usuario.
 * Si la operación es exitosa, muestra un mensaje de éxito y recarga el perfil.
 * Si la operación falla, muestra un mensaje de error.
 * @param mapeo - Objeto que contiene las claves y valores a actualizar.
 * @returns {void}
 */
  async updateProfile(mapeo: any) {
    const value = this.updateInfo(mapeo);
    if (value) {
      try {
        const res = await this._serviceUser.updateUser(value);
        if (res) {
          console.log('Perfil actualizado', res);
          this._snackbarService.emitSnackbar(
            'Los cambios realizados se guardaron correctamente.',
            'success',
            'Datos Guardados.'
          );
          this.reloadProfile();
        }
      } catch (error) {
        console.error(error);
        this._snackbarService.emitSnackbar('Error al actualizar el perfil', 'error','Vuelva a intantarlo...');
      }
    }
  }

  changeStatusLogged(status: boolean) {
    if (status && this.user) {
        this.user.status = false;
        this._serviceUser.updateUser(this.user);
        this._serviceUser.logoutUser();
        this._routes.navigate(['/landing']);
    }
  }



}
