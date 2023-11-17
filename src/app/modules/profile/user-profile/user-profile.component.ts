import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeckCard,Card, User } from 'src/app/core/Models';
import { AuthTareaService } from 'src/app/core/service/auth-tarea.service';
import { PhotoUserComponent } from '../photo-user/photo-user.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  //variable que va a recibir el usuario logueado
  user: User | undefined;
  cards: Card[] | undefined;
  pathimg: string = 'srcassetscard-door-to-nothingness.jpg';
  isPasswordHidden = true;
  editingProfile: boolean = false;
  
  editedNickName : string = '';
  editedDescription: string = '';
  editedName : string = '';
  editedSurName : string = '';
  editedEmail : string = '';
  editedPassword : string = '';



  constructor(
    private dialog: MatDialog,
    private authTareaService: AuthTareaService
    ) { }

  ngOnInit(): void {
    //recuperamos el usuario logueado desde el servicio
    this.user = this.authTareaService.getCurrentUser();
  }

  togglePassword() {
    this.isPasswordHidden = !this.isPasswordHidden;
  }

  hidePasswordText(password: string | undefined): string {
    return password ? '•'.repeat(password.length) : '';
  }

  public changeProfilePhoto(){
    var _popup = this.dialog.open(PhotoUserComponent, {
      panelClass: 'img-container',
      width: 'max-content',
      height: '250px',
      data: this.user
    });

    _popup.afterClosed().subscribe(item => {
      console.log(item);
    })
    this.authTareaService.updateUser(this.user!);
    this.authTareaService.userChaceUpdate(this.user!);

  }

  public addDeckUser() {
    let newDeck: DeckCard = {
      id: this.user?.decks?.length! + 1,
      nameDeck: 'New Deck '+ (this.user?.decks?.length! + 1),
      cards: []
    }
    this.user?.decks?.push(newDeck);
    this.authTareaService.updateUser(this.user!);
    this.authTareaService.userChaceUpdate(this.user!);
  }

  public deleteDeck(deckToDelete: any) {
    const index = this.user?.decks?.findIndex(deck => deck.id === deckToDelete.id);
    if (index !== -1) {
      this.user?.decks?.splice(index!, 1);
      this.authTareaService.updateUser(this.user!);
      this.authTareaService.userChaceUpdate(this.user!);
    }
  }

  public updateDeck(deckToUpdate: any) {
    const index = this.user?.decks?.findIndex(deck => deck.id === deckToUpdate.id);
    if (index !== -1) {
      this.user?.decks?.splice(index!, 1, deckToUpdate);
      this.authTareaService.updateUser(this.user!);
      this.authTareaService.userChaceUpdate(this.user!);
    }
  }

  public editUserProfile() {
    this.editedNickName = this.user?.nickName || '';
    this.editedDescription = this.user?.description || '';
    this.editedName = this.user?.nameUser || '';
    this.editedSurName = this.user?.surName || '';
    this.editedEmail = this.user?.email || '';
    this.editedPassword = this.user?.password || '';
    this.editingProfile = true;
  }
  

  saveProfile() {
    (this.editedNickName !== '') ? this.user!.nickName = this.editedNickName : this.user?.nickName;
    (this.editedDescription !== '') ? this.user!.description = this.editedDescription : this.user?.description;
    (this.editedName !== '') ? this.user!.nameUser = this.editedName : this.user?.nameUser;
    (this.editedSurName !== '') ? this.user!.surName = this.editedSurName : this.user?.surName;
    (this.editedEmail !== '') ? this.user!.email = this.editedEmail : this.user?.email;
    (this.editedPassword !== '') ? this.user!.password = this.editedPassword : this.user?.password;
    this.editingProfile = false;
    this.authTareaService.updateUser(this.user!);
    this.authTareaService.userChaceUpdate(this.user!);
  }

}
