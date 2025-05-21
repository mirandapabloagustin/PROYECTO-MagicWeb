import { Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from "@shared/header/header.component";
import { FooterComponent } from '@app/shared/footer/footer.component';
import { ListUserComponent } from './components/list.user/list.user.component';
import { AuthUserService } from '@app/core/services/user/auth-user.service';
import { User } from '@app/core/models/user.model';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { Router } from '@angular/router';

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
  displayedColumns: string[] = ['id','name', 'email', 'role','status','edit','delete'];
  dataSource = new MatTableDataSource<User>(this.users);

  
  constructor(
    private router: Router,
    private _serviceUser: AuthUserService,
    private modal: MatDialog

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
    const dialogRef = this.modal.open(CreateUserComponent,
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

  editUser(user: User){
    console.log("Edit user", user);
    // Abre el modal de edicion
    // Se actualiza la tabla
    // en caso de error se muestra un mensaje de error
  }

  deleteUser(user: User){
    console.log("Delete user", user);
    // Abre el modal de confirmacion
    // Se elimina el usuario de la base de datos
    // se actualiza la tabla
    // en caso de error se muestra un mensaje de error
  }


}
