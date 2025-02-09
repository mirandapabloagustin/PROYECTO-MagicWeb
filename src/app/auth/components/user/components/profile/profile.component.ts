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
    private _snackbarService: SnackbarService
  ) { }

  reloadProfile() {
    this._routes.navigate(['/profile']);
  }

  goToDecks() {
    this._routes.navigate(['/decks']);
  }

  goToFavorites() {
    this.showFav.emit(true);
  }

  editProfile() {
    const dialogRef = this._matDialog.open(UserEditComponent, {
      data: this.user,
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // COLOCAR CODIGO NECESARIO PARA ACTUALIZAR EL USUARI0
        this.updateProfile(result);
      }
    });

  }

  deleteProfile() {
    const dialogRef = this._matDialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Suspender Perfil',
        message: '¿Estás seguro que deseas suspender tu perfil?'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Perfil eliminado');
        // COLOCAR CODIGO NECESARIO PARA DAR DE BAJA EL USUARIO
      }
    });
  }

  getFlagImage(countryName: string): string {
    const flag = this.countries.find(country => country.name == countryName);
    return `https://flagcdn.com/w320/${countryName.toLocaleLowerCase()}.png`;
  }

  getCountrie(codeCountry: string): string {
    const value = this.countries.find(country => country.code == codeCountry);
    return value ? value.name : '';
  }


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



}
