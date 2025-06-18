import { Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from "@shared/header/header.component";
import { FooterComponent } from '@shared/footer/footer.component';
import { AuthUserService } from '@services/user/auth-user.service';
import { User } from '@models/user.model';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from '@shared/confirm-dialog/confirm-dialog.component';
import { AuthCommentService } from '@services/comment/auth.comment.service';
import { AuthDeckService } from '@services/deck/auth.deck.service';
import { SnackbarService } from '@app/core/services/snackbar/snackbar.service';

@Component({
  selector: 'app-management',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, MatPaginatorModule, MatTableModule],
  templateUrl: './management.component.html',
  styleUrl: './management.component.css'
})
export class ManagementComponent implements OnInit {

  @ViewChild(MatPaginator) 
  paginator!: MatPaginator;

  users: User[] = [];
  displayedColumns: string[] = ['id','name', 'email', 'role','status','delete'];
  dataSource = new MatTableDataSource<User>(this.users);

  
  constructor(
    private router: Router,
    private _modal: MatDialog,
    private _serviceUser: AuthUserService,
    private _serviceComment: AuthCommentService,
    private _serviceUserDeck: AuthDeckService,
    private _snackbar: SnackbarService

  ) { 
  }

  ngOnInit() {
    this.updateDataSource();
  }


  async updateDataSource(){
    this._serviceUser.getAllUsers().then((res) => {
      this.users = res;
      this.dataSource = new MatTableDataSource<User>(this.users);
    }
  ).finally(() => {
      this.dataSource.paginator = this.paginator;
    });
  }

  generateNewUser(){
    const dialogRef = this._modal.open(CreateUserComponent,
      {
        width: '800px',
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.updateDataSource();
      }
    });

  }

  /**
   * @description
   * Filtra los usuarios
   * 
   * @param event 
   */
  filterUser(event: any){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim();
  }

  handleUserClick(event: User){
    this.router.navigate(['/management', event.id]);
  }

  
  deleteUser(user: User){


    const dialogConfirmRef = this._modal.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirmar eliminación',
        message: `¿Estás seguro de que quieres eliminar al usuario ${user.name}?`,
        whisper: true,
        whisperText: 'Esta acción no se puede deshacer.',
      }
    });

    dialogConfirmRef.afterClosed().subscribe(result => {
      if (result) {
        if (user.id !== null && user.id !== undefined) {
          this._serviceUser.deleteUser(user.id);
          this.updateDataSource();
          this._snackbar.userDeleted();
        }
      }
    });
  }


}
