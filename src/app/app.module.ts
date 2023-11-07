import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PopupCardComponent } from './modules/home/popup-card/popup-card.component';



@NgModule({
  declarations: [
    AppComponent,
    PopupCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule //agrego el modulo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
